/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { cn } from "@/lib/utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  FontBoldIcon,
  FontItalicIcon,
  ResetIcon,
  StrikethroughIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { useCallback, useEffect, useRef, useState } from "react";

const LowPriority = 1;

function Divider() {
  return <div className="w-[1px] bg-gray-200 mx-1" />;
}

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority
      )
    );
  }, [editor, $updateToolbar]);

  return (
    <div
      className="flex bg-white p-1 rounded-t-lg align-middle border-t border-x"
      ref={toolbarRef}
    >
      <button
        disabled={!canUndo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        className="border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Undo"
      >
        <i className="bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60">
          <ResetIcon />
        </i>
      </button>
      <button
        disabled={!canRedo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        className="border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Redo"
      >
        <i className="bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60">
          <ResetIcon className="-scale-x-100" />
        </i>
      </button>
      <Divider />
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
        className={cn(
          "border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20",
          isBold ? "bg-[#dfe8fa] bg-opacity-30" : ""
        )}
        aria-label="Format Bold"
      >
        <i
          className={cn(
            "bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60",
            isBold ? "opacity-100" : ""
          )}
        >
          <FontBoldIcon />
        </i>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
        className={cn(
          "border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20",
          isItalic ? "bg-[#dfe8fa] bg-opacity-30" : ""
        )}
        aria-label="Format Italics"
      >
        <i
          className={cn(
            "bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60",
            isItalic ? "opacity-100" : ""
          )}
        >
          <FontItalicIcon />
        </i>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}
        className={cn(
          "border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20",
          isUnderline ? "bg-[#dfe8fa] bg-opacity-30" : ""
        )}
        aria-label="Format Underline"
      >
        <i
          className={cn(
            "bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60",
            isUnderline ? "opacity-100" : ""
          )}
        >
          <UnderlineIcon />
        </i>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        }}
        className={cn(
          "border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20",
          isStrikethrough ? "bg-[#dfe8fa] bg-opacity-30" : ""
        )}
        aria-label="Format Strikethrough"
      >
        <i
          className={cn(
            "bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60",
            isStrikethrough ? "opacity-100" : ""
          )}
        >
          <StrikethroughIcon />
        </i>
      </button>
      <Divider />
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        }}
        className="border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Left Align"
      >
        <i className="bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60">
          <TextAlignLeftIcon />
        </i>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        }}
        className="border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Center Align"
      >
        <i className="bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60">
          <TextAlignCenterIcon />
        </i>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        }}
        className="border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Right Align"
      >
        <i className="bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60">
          <TextAlignRightIcon />
        </i>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
        }}
        className="border-0 flex bg-none rounded-lg p-2 mr-0.5 cursor-pointer align-middle hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Justify Align"
      >
        <i className="bg-contain inline-block size-[18px] mt-0.5 ml-0.5 align-[-0.25em] opacity-60">
          <TextAlignJustifyIcon />
        </i>
      </button>{" "}
    </div>
  );
}

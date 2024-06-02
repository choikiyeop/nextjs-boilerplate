"use client";

import { $getRoot, $getSelection, EditorState } from "lexical";
import { useEffect, useState } from "react";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin } from "./OnChangePlugin";
import ToolbarPlugin from "./ToolbarPlugin";
import { Button } from "../ui/button";

const theme = {
  // Theme styling goes here
  //...
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.error(error);
}

export const Editor = () => {
  const [editorState, setEditorState] = useState<string>("");

  const onChange = (editorState: EditorState) => {
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  };

  const onClick = () => {
    console.log(editorState);
    console.log("create post");
  };

  const initialConfig = {
    namespace: "editor",
    theme,
    onError,
  };

  return (
    <div className="flex flex-col">
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="min-h-80 px-7 py-4 outline-none border rounded-b-lg" />
          }
          placeholder={<div className="text-gray-300">Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin onChange={onChange} />
      </LexicalComposer>
      <Button onClick={onClick} className="self-end mt-3">
        작성
      </Button>
    </div>
  );
};

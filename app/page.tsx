import { PageLayout } from "@/components/layouts/page-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <Image src="/tech.png" alt="tech" width={1920} height={300} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/rainy.png" alt="rainy" width={1920} height={720} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/coding.png" alt="coding" width={1920} height={720} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <main>페이지</main>
    </PageLayout>
  );
}

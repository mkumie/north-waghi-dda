import ComponentWrapper from "@/components/ComponentWrapper";
import { PictureSlide } from "@/components/PictureSlide";

export default function Home() {
  return (
    <ComponentWrapper className="flex flex-col items-center mx-4 sm:w-auto">
      <PictureSlide />
    </ComponentWrapper>
  );
}

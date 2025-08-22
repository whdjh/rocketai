import Image from "next/image";
import { SajuTable } from "./SajuTable";
import { sajuData } from "@/mocks/saju";

export default function Home() {
  return (
    <div className="bg-F3F2EF">
      <div className="min-[475px]:block">
        <div className="relative min-w-[475px] max-w-md mx-auto px-4">
          <p className="absolute top-[785px] left-[100px] text-[16px] whitespace-pre-line font-normal leading-[150%] tracking-[-0.025em] text-center">
            이제부터 본격적으로{"\n"}
            {sajuData.name}님의 사주팔자를{"\n"}
            분석해볼 차례네요.
          </p>
          <p className="absolute top-[1215px] left-[100px] text-[16px] whitespace-pre-line font-normal leading-[150%] tracking-[-0.025em] text-center">
            제가 {sajuData.name}님의 사주를{"\n"}
            보기 쉽게 표로 정리했어요.
          </p>
          <Image
            src="/img_main.png"
            alt="mainimage"
            width={375}
            height={1200}
            className="w-full h-auto align-top"
          />
          <div className="absolute bottom-45 left-1/2 transform -translate-x-1/2">
            <SajuTable />
          </div>
        </div>
      </div>
    </div>
  );
}

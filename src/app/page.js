import Image from "next/image";
import { SajuTable } from "./SajuTable";
import { sajuData } from "@/mocks/saju";

// 475px 미만일 때 표시될 컴포넌트
const ScreenTooSmall = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">😔</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        화면이 너무 작아요
      </h2>
      <p className="text-gray-600 mb-4">
        최소 475px 이상의 화면에서
        <br />
        이용해 주세요
      </p>
      <p className="text-sm text-gray-500">
        현재 화면 크기가 너무 작아
        <br />
        정상적인 서비스 이용이 어렵습니다
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="bg-F3F2EF">
      <div className="block min-[475px]:hidden">
        <ScreenTooSmall />
      </div>
      <div className="hidden min-[475px]:block">
        <div className="relative min-w-[475px] max-w-md mx-auto px-4">
          <p className="absolute top-[790px] left-[85px] text-[16px] whitespace-pre-line font-normal leading-[150%] tracking-[-0.025em] text-center">
            이제부터 본격적으로{"\n"}
            {sajuData.name}님의 사주팔자를{"\n"}
            분석해볼 차례네요.
          </p>
          <p className="absolute top-[1230px] left-[95px] text-[16px] whitespace-pre-line font-normal leading-[150%] tracking-[-0.025em] text-center">
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

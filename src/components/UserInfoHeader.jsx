import Image from "next/image";
import { sajuData } from "@/mocks/saju";

export const UserInfoHeader = () => (
  <div>
    <Image
      src="/ic_left.svg"
      alt="left"
      width={56}
      height={38}
      className="absolute top-[45px] left-[8px]"
    />
    <Image
      src="/ic_right.svg"
      alt="right"
      width={56}
      height={38}
      className="absolute top-[26px] right-[8px]"
    />
    <div className="absolute top-[40px] left-[66px] w-[220px] h-[48px] flex flex-col items-center gap-3">
      <p className="font-normal text-[16px] leading-[100%] tracking-[0%] text-center m-0">
        {sajuData.name}님의 사주
      </p>
      <p className="font-bold text-[20px] leading-[100%] tracking-[0%] text-center m-0">
        {sajuData.birth}
      </p>
    </div>
  </div>
);

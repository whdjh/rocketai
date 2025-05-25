import Image from "next/image";
import { sajuData } from "@/mocks/saju";

// 테이블 헤더 컴포넌트
const TableHeader = () => (
  <thead>
    <tr>
      <td className="border border-b-2 border-r-2 border-l-0 border-t-0 p-2"></td>
      <td className="border border-b-2 border-t-0 p-2">時</td>
      <td className="border border-b-2 border-t-0 p-2">日</td>
      <td className="border border-b-2 border-t-0 p-2">月</td>
      <td className="border border-b-2 border-r-2 border-t-0 p-2">年</td>
    </tr>
  </thead>
);

// 일반 테이블 행 컴포넌트
const TableRow = ({ label, labelSub, elements, isLast = false }) => {
  const borderClass = isLast ? "border" : "border border-b-2";
  const rightBorderClass = isLast
    ? "border border-r-2"
    : "border border-b-2 border-r-2";

  return (
    <tr>
      <td
        className={`${rightBorderClass} border-l-0 p-2 text-center leading-tight whitespace-nowrap`}
      >
        <p className="text-[14px] font-medium">{label}</p>
        <p className="text-[10px] text-gray-500">{labelSub}</p>
      </td>
      {elements.map((element, index) => (
        <td
          key={index}
          className={`${index === 3 ? rightBorderClass : borderClass} p-2`}
        >
          <p className="text-[14px] font-medium">{element[0]}</p>
          <p className="text-[10px] text-gray-500">{element[1]}</p>
        </td>
      ))}
    </tr>
  );
};

// 천간/지지 행 컴포넌트
const ElementRow = ({ label, labelSub, elements, colors, isLast = false }) => {
  const borderClass = isLast ? "border" : "border border-b-2";
  const rightBorderClass = isLast
    ? "border border-r-2"
    : "border border-b-2 border-r-2";

  return (
    <tr>
      <td
        className={`${rightBorderClass} border-l-0 p-2 text-center leading-tight`}
      >
        <p className="text-[14px] font-medium">{label}</p>
        <p className="text-[10px] text-gray-500">{labelSub}</p>
      </td>
      {elements.map((element, index) => (
        <td
          key={index}
          className={`${index === 3 ? rightBorderClass : borderClass} p-1`}
        >
          <div
            className={`${colors[index]} rounded-md p-2 flex flex-col items-center justify-center leading-none`}
          >
            <p className="text-[5px]">{element[0]}</p>
            <p className="text-[25px] font-medium">{element[1]}</p>
            <p className="text-[8px]">{element[2]}</p>
          </div>
        </td>
      ))}
    </tr>
  );
};

// 귀인 행 컴포넌트
const GuiinRow = ({ elements }) => (
  <tr>
    <td className="border border-b-2 border-r-2 border-l-0 p-2 text-center leading-tight whitespace-nowrap">
      <p className="text-[14px] font-medium">貴人</p>
      <p className="text-[10px] text-gray-500">(귀인)</p>
    </td>
    {elements.map((element, index) => {
      if (index < 2) {
        return (
          <td key={index} className="border border-b-2 p-2">
            <p className="text-[14px] font-medium">{element[0]}</p>
            <p className="text-[10px] text-gray-500">{element[1]}</p>
          </td>
        );
      } else if (index === 2) {
        return (
          <td key={index} className="border border-b-2 p-2">
            <p className="text-[14px] font-medium">{element[0]}</p>
            <p className="text-[10px] text-gray-500">{element[1]}</p>
          </td>
        );
      } else {
        return (
          <td
            key={index}
            className="border border-b-2 border-r-2 border-t-0 p-2"
          >
            {element.map((subElement, subIndex) => (
              <div key={subIndex}>
                <p className="text-[14px] font-medium">{subElement[0]}</p>
                <p className="text-[10px] text-gray-500">{subElement[1]}</p>
              </div>
            ))}
          </td>
        );
      }
    })}
  </tr>
);

// 배경 선 컴포넌트
const BackgroundLines = () => (
  <>
    <div className="absolute top-[8px] left-[2px] right-[2px] border-t-[1px] border-[#2B557E]" />
    <div className="absolute bottom-[8px] left-[2px] right-[2px] border-b-[1px] border-[#2B557E]" />
    <div className="absolute top-[2px] bottom-[2px] left-[8px] border-l-[1px] border-[#2B557E]" />
    <div className="absolute top-[2px] bottom-[2px] right-[8px] border-r-[1px] border-[#2B557E]" />
  </>
);

const UserInfoHeader = () => (
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

// 메인 컴포넌트
export const SajuTable = () => {
  // 천간/지지 색상 설정
  const cheonganColors = [
    "bg-black text-white",
    "bg-red-700 text-white",
    "bg-black text-white",
    "bg-black text-white",
  ];

  const jijiColors = [
    "bg-cyan-600 text-white",
    "bg-black text-white",
    "bg-black text-white",
    "bg-white border-1 text-black",
  ];

  return (
    <div className="w-[351px] h-[650px] bg-[F5F3EC] border-3 border-[#1B2F49] shadow-[0px_4px_4px_0px_#00000040]">
      <BackgroundLines />
      <UserInfoHeader />

      <div className="absolute top-[98px] left-[21px] w-[310px] h-[473px]">
        <table className="w-full text-center border-collapse">
          <TableHeader />
          <tbody>
            <TableRow
              label="十星"
              labelSub="(십성)"
              elements={sajuData.elements1}
            />

            <ElementRow
              label="天干"
              labelSub="(천간)"
              elements={sajuData.elements2}
              colors={cheonganColors}
            />

            <ElementRow
              label="地支"
              labelSub="(지지)"
              elements={sajuData.elements3}
              colors={jijiColors}
            />

            <TableRow
              label="十星"
              labelSub="(십성)"
              elements={sajuData.elements4}
            />

            <TableRow
              label="十二運星"
              labelSub="(십이운성)"
              elements={sajuData.elements5}
            />

            <TableRow
              label="十二神殺"
              labelSub="(십이신살)"
              elements={sajuData.elements6}
            />

            <GuiinRow elements={sajuData.elements7} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

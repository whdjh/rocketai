import { sajuData } from "@/mocks/saju";
import { UserInfoHeader } from "@/components/UserInfoHeader";
import { TableHeader } from "@/components/TableHeader";
import { TableRow } from "@/components/TableRow";
import { ElementRow } from "@/components/ElementRow";
import { GuiinRow } from "@/components/GuiinRow";

// 메인 컴포넌트
export const SajuTable = () => {

  return (
    <div className="w-[351px] h-[650px] bg-[F5F3EC] border-3 border-[#1B2F49] shadow-[0px_4px_4px_0px_#00000040]">
      {/* 배경 선 */}
      <div className="absolute top-[8px] left-[2px] right-[2px] border-t-[1px] border-[#2B557E]" />
      <div className="absolute bottom-[8px] left-[2px] right-[2px] border-b-[1px] border-[#2B557E]" />
      <div className="absolute top-[2px] bottom-[2px] left-[8px] border-l-[1px] border-[#2B557E]" />
      <div className="absolute top-[2px] bottom-[2px] right-[8px] border-r-[1px] border-[#2B557E]" />
      
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
            />

            <ElementRow
              label="地支"
              labelSub="(지지)"
              elements={sajuData.elements3}
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

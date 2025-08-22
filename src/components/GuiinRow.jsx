export const GuiinRow = ({ elements }) => (
  <tr>
    <td className="border border-b-2 border-r-2 border-l-0 p-2 text-center leading-tight whitespace-nowrap w-[20%]">
      <p className="text-[14px] font-medium">貴人</p>
      <p className="text-[10px] text-gray-500">(귀인)</p>
    </td>
    {elements.map((element, index) => {
      if (index < 2) {
        return (
          <td key={index} className="border border-b-2 p-2 w-[20%]">
            <p className="text-[14px] font-medium">{element[0]}</p>
            <p className="text-[10px] text-gray-500">{element[1]}</p>
          </td>
        );
      } else if (index === 2) {
        return (
          <td key={index} className="border border-b-2 p-2 w-[20%]">
            <p className="text-[14px] font-medium">{element[0]}</p>
            <p className="text-[10px] text-gray-500">{element[1]}</p>
          </td>
        );
      } else {
        return (
          <td
            key={index}
            className="border border-b-2 border-r-2 border-t-0 p-2 w-[20%]"
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

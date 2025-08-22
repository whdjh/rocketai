export const ElementRow = ({ label, labelSub, elements, isLast = false }) => {
  const borderClass = isLast ? "border" : "border border-b-2";
  const rightBorderClass = isLast
    ? "border border-r-2"
    : "border border-b-2 border-r-2";

  return (
    <tr>
      <td
        className={`${rightBorderClass} border-l-0 p-2 text-center leading-tight w-[20%]`}
      >
        <p className="text-[14px] font-medium">{label}</p>
        <p className="text-[10px] text-gray-500">{labelSub}</p>
      </td>
      {elements.map((element, index) => (
        <td
          key={index}
          className={`${index === 3 ? rightBorderClass : borderClass} p-1 w-[20%]`}
        >
          <div
            className={`${element.color} rounded-md p-2 flex flex-col items-center justify-center leading-none`}
          >
            <p className="text-[5px]">{element.text[0]}</p>
            <p className="text-[25px] font-medium">{element.text[1]}</p>
            <p className="text-[8px]">{element.text[2]}</p>
          </div>
        </td>
      ))}
    </tr>
  );
};

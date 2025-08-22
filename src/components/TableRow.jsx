export const TableRow = ({ label, labelSub, elements, isLast = false }) => {
  const borderClass = isLast ? "border" : "border border-b-2";
  const rightBorderClass = isLast
    ? "border border-r-2"
    : "border border-b-2 border-r-2";

  return (
    <tr>
      <td
        className={`${rightBorderClass} border-l-0 p-2 text-center leading-tight whitespace-nowrap w-[20%]`}
      >
        <p className="text-[14px] font-medium">{label}</p>
        <p className="text-[10px] text-gray-500">{labelSub}</p>
      </td>
      {elements.map((element, index) => (
        <td
          key={index}
          className={`${index === 3 ? rightBorderClass : borderClass} p-2 w-[20%]`}
        >
          <p className="text-[14px] font-medium">{element[0]}</p>
          <p className="text-[10px] text-gray-500">{element[1]}</p>
        </td>
      ))}
    </tr>
  );
};

import { useSkipOptions } from "../../context/SkipOptionsContext";
import SkipOptionsCard from "./SkipOptionsCard";

function SkipOptionsList() {
  const { skipOptions } = useSkipOptions();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {skipOptions.map((skipOption) => (
        <SkipOptionsCard skipOption={skipOption} key={skipOption.id} />
      ))}
    </ul>
  );
}

export default SkipOptionsList;

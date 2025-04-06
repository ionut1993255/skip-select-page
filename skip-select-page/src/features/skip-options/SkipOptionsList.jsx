import { useState } from "react";
import { useSkipOptions } from "../../context/SkipOptionsContext";
import SkipOptionsCard from "./SkipOptionsCard";

function SkipOptionsList() {
  const { skipOptions } = useSkipOptions();
  const [selectedSkipOption, setSelectedSkipOption] = useState(null);

  function handleToggleSkipOption(skipOptionId) {
    setSelectedSkipOption((prevSkipOptionId) =>
      prevSkipOptionId === skipOptionId ? null : skipOptionId,
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {skipOptions.map((skipOption) => (
        <SkipOptionsCard
          key={skipOption.id}
          skipOption={skipOption}
          isSelected={selectedSkipOption === skipOption.id}
          onClick={() => handleToggleSkipOption(skipOption.id)}
        />
      ))}
    </ul>
  );
}

export default SkipOptionsList;

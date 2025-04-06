import { useSkipOptions } from "../../context/SkipOptionsContext";
import { useSkipOptionSelection } from "../../context/SkipOptionSelectionContext";
import SkipOptionsCard from "./SkipOptionsCard";

function SkipOptionsList() {
  const { skipOptions } = useSkipOptions();
  const { selectedSkipOption, selectSkipOption } = useSkipOptionSelection();

  function handleToggleSkipOption(skipOptionId) {
    const newSelectedSkipOption =
      selectedSkipOption?.id === skipOptionId
        ? null
        : skipOptions.find((skipOption) => skipOption.id === skipOptionId);

    selectSkipOption(newSelectedSkipOption);
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {skipOptions.map((skipOption) => (
        <SkipOptionsCard
          key={skipOption.id}
          skipOption={skipOption}
          isSelected={selectedSkipOption?.id === skipOption.id}
          onClick={() => handleToggleSkipOption(skipOption.id)}
        />
      ))}
    </ul>
  );
}

export default SkipOptionsList;

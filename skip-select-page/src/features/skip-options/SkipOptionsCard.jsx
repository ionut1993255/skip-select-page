import { icons } from "../../utils/icons";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";

const { arrowRight } = icons;

function SkipOptionsCard({ skipOption, isSelected, onClick }) {
  const { size, hire_period_days, price_before_vat } = skipOption;

  return (
    <li
      className={`group relative rounded-lg border-2 p-4 md:p-6 transition-all cursor-pointer
        ${isSelected ? "border-[#0037C1] hover:border-[#0037C1]" : "border-[#2A2A2A] hover:border-[#0037C1]/50"}
        bg-[#1C1C1C] text-white`}
      onClick={onClick}
    >
      <div className="relative">
        <img
          src="/skip-option-card-img.jpg"
          alt="skip-option-card-img"
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />

        <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {size} Yards
        </div>

        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
          {size} Yard Skip
        </h3>

        <p className="text-sm text-gray-400 mb-4 md:mb-6">
          {hire_period_days} day hire period
        </p>

        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
              £{+price_before_vat}
            </span>

            <span className="text-sm text-gray-400 ml-2">per week</span>
          </div>
        </div>

        <Button
          className={`w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
    ${
      isSelected
        ? "bg-[#0037C1] hover:bg-[#002da1] text-white hover:text-white"
        : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1] hover:text-white"
    }`}
        >
          <span className="text-[17px] font-semibold">
            {isSelected ? "Selected" : "Select This Skip"}
          </span>

          {!isSelected && (
            <Icon
              icon={arrowRight}
              className="w-4 h-4 lucide lucide-arrow-right"
            />
          )}
        </Button>
      </div>
    </li>
  );
}

export default SkipOptionsCard;

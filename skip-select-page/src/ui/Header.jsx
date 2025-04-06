import React from "react";
import { icons } from "../utils/icons";
import Button from "./Button";
import Icon from "./Icon";
import Divider from "./Divider";

const { postcode, wasteType, skip, shield, calendar, creditCard } = icons;

const headerButtonData = [
  { icon: postcode, text: "Postcode", disabled: false },
  { icon: wasteType, text: "Waste Type", disabled: false },
  { icon: skip, text: "Select Skip", disabled: false },
  { icon: shield, text: "Permit Check", disabled: true },
  { icon: calendar, text: "Choose Date", disabled: true },
  { icon: creditCard, text: "Payment", disabled: true },
];

function Header() {
  return (
    <header className="flex justify-center items-center mb-8 overflow-x-auto">
      {headerButtonData.map((button, index) => (
        <React.Fragment key={index}>
          <Button disabled={button.disabled}>
            <Icon icon={button.icon} className="w-6 h-6" />

            <span className="ml-2 mr-[1rem] text-white text-[17px] font-semibold">
              {button.text}
            </span>
          </Button>

          {index < headerButtonData.length - 1 && (
            <Divider color={index === 0 ? "#0037C1" : undefined} />
          )}
        </React.Fragment>
      ))}
    </header>
  );
}

export default Header;

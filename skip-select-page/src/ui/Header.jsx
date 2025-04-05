import React from "react";
import HeaderButton from "./HeaderButton";
import Icon from "./Icon";
import Divider from "./Divider";

const headerIcons = {
  postcode: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </>
  ),
  wasteType: (
    <>
      <path d="M3 6h18"></path>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
      <line x1="10" x2="10" y1="11" y2="17"></line>
      <line x1="14" x2="14" y1="11" y2="17"></line>
    </>
  ),
  skip: (
    <>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
      <path d="M15 18H9"></path>
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
      <circle cx="17" cy="18" r="2"></circle>
      <circle cx="7" cy="18" r="2"></circle>
    </>
  ),
  shield: (
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
  ),
  calendar: (
    <>
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
      <path d="M3 10h18"></path>
    </>
  ),
  creditCard: (
    <>
      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
      <line x1="2" x2="22" y1="10" y2="10"></line>
    </>
  ),
};

const headerButtonData = [
  { icon: headerIcons.postcode, text: "Postcode", disabled: false },
  { icon: headerIcons.wasteType, text: "Waste Type", disabled: false },
  { icon: headerIcons.skip, text: "Select Skip", disabled: false },
  { icon: headerIcons.shield, text: "Permit Check", disabled: true },
  { icon: headerIcons.calendar, text: "Choose Date", disabled: true },
  { icon: headerIcons.creditCard, text: "Payment", disabled: true },
];

function Header() {
  return (
    <header className="flex justify-center items-center mb-8 overflow-x-auto">
      {headerButtonData.map((button, index) => (
        <React.Fragment key={index}>
          <HeaderButton
            icon={<Icon icon={button.icon} />}
            text={button.text}
            disabled={button.disabled}
          />

          {index < headerButtonData.length - 1 && (
            <Divider color={index === 0 ? "#0037C1" : undefined} />
          )}
        </React.Fragment>
      ))}
    </header>
  );
}

export default Header;

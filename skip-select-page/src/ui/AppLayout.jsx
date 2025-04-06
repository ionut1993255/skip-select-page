import { useState } from "react";
import { SkipOptionsProvider } from "../context/SkipOptionsContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function AppLayout() {
  const [showFooter, setShowFooter] = useState(false);

  function toggleFooterVisibility(selectedSkipOptionId) {
    setShowFooter(!!selectedSkipOptionId);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Header />

      <SkipOptionsProvider>
        <Main onToggleFooter={toggleFooterVisibility} />
      </SkipOptionsProvider>

      {showFooter && <Footer />}
    </div>
  );
}

export default AppLayout;

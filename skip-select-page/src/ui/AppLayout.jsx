import { SkipOptionsProvider } from "../context/SkipOptionsContext";
import {
  SkipOptionSelectionProvider,
  useSkipOptionSelection,
} from "../context/SkipOptionSelectionContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function AppLayoutContent() {
  const { selectedSkipOption } = useSkipOptionSelection();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Header />
      <Main />
      {selectedSkipOption && <Footer />}
    </div>
  );
}

function AppLayout() {
  return (
    <SkipOptionsProvider>
      <SkipOptionSelectionProvider>
        <AppLayoutContent />
      </SkipOptionSelectionProvider>
    </SkipOptionsProvider>
  );
}

export default AppLayout;

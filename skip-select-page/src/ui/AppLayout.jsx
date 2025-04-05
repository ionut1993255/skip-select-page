import { SkipOptionsProvider } from "../context/SkipOptionsContext";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Header />

      <SkipOptionsProvider>
        <Main />
      </SkipOptionsProvider>
    </div>
  );
}

export default AppLayout;

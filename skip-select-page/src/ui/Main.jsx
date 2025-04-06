import { useSkipOptions } from "../context/SkipOptionsContext";
import NoDataMessage from "./NoDataMessage";
import Spinner from "./Spinner";
import SkipOptionsList from "../features/skip-options/SkipOptionsList";

function Main() {
  const { skipOptions, isLoading } = useSkipOptions();

  if (!isLoading && skipOptions.length === 0) {
    return <NoDataMessage message="No skip options available at the moment." />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 pb-32">
      <h2 className="text-2xl font-bold text-center mb-4">
        Choose Your Skip Size
      </h2>

      <p className="text-gray-400 text-center mb-8 font-semibold">
        Select the skip size that best suits your needs
      </p>

      <SkipOptionsList />
    </main>
  );
}

export default Main;

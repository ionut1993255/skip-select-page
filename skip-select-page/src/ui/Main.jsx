import SkipOptionsList from "../features/skip-options/SkipOptionsList";

function Main() {
  return (
    <main className="max-w-7xl mx-auto px-4 pb-32">
      <h2 className="text-2xl font-bold text-center mb-4">
        Choose Your Skip Size
      </h2>

      <p className="text-gray-400 text-center mb-8">
        Select the skip size that best suits your needs
      </p>

      <SkipOptionsList />
    </main>
  );
}

export default Main;

function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <div className="spinner"></div>
      <p className="text-gray-400 sm:text-lg lg:text-xl font-semibold">
        Loading skip options...
      </p>
    </div>
  );
}

export default Spinner;

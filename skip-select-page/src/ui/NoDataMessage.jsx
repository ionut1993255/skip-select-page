function NoDataMessage({ message = "No data available at the moment." }) {
  return (
    <div className="text-center text-gray-500">
      <p className="text-gray-400 sm:text-lg lg:text-xl font-semibold mt-14 sm:mt-16 lg:mt-24">
        {message}
      </p>
    </div>
  );
}

export default NoDataMessage;

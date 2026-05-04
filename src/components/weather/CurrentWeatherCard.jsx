
function CurrentWeatherCard({ name, value, unit }) {
  return (
    <div className="flex flex-col gap-5 bg-[#25253f] md:w-[20%] w-[48%] mb-3 md:mb-0 rounded-[10px] p-3 border border-gray-500">
      <span className="text-gray-300">{name}</span>
      <span className="text-3xl">
        {value} {unit}
      </span>
    </div>
  );
}

export default CurrentWeatherCard;

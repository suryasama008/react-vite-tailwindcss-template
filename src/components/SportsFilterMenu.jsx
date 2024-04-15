
const SportsFilterMenu = ({ sports, selectedSport, onSelectSport }) => {
  return (
    <div className=" text-white p-4 sticky mt-32  border-y border-gray-700 w-full">
      <div className="flex justify-start space-x-4 overflow-x-auto no-scrollbar">
        {sports.map((sport) => (
          <button
            key={sport}
            onClick={() => onSelectSport(sport)}
            className={`px-3 py-1 rounded ${selectedSport === sport ? 'bg-white text-gray-700' : 'bg-none'} hover:bg-black hover:border-2 hover:border-white transition-all`}
          >
            {sport}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SportsFilterMenu;

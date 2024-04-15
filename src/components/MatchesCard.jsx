

const MatchesCard = ({ match }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow hover:shadow-md transition ease-in duration-150">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-2 md:mb-0">
          <h3 className="text-lg font-semibold">{match.teams}</h3>
          <p className="text-sm text-gray-500">{match.date} at {match.time}</p>
        </div>
        <div className="font-medium">
          <p className={`text-${match.status === 'Live.' ? 'red' : 'green'}-600`}>{match.status}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchesCard;

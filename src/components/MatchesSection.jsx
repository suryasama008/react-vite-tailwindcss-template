import matches from './matchesData';

const MatchesSection = () => {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-3xl text-center font-bold text-white">Upcoming & Live Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match) => (
          <div key={match.id} className={`p-4 rounded-lg shadow-lg ${match.score ? 'bg-green-800' : 'bg-dark-700'}`}>
            <h3 className="text-xl font-semibold">{match.teams}</h3>
            <p className="text-md">{match.sport}</p>
            <p className={`${match.score ? 'text-red-500' : 'text-white'} text-lg`}>
              {match.score ? `Live - Score: ${match.score}` : `Time: ${match.time}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesSection;

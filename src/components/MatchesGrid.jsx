import { useState, useMemo } from 'react';
import MatchesCard from './MatchesCard';
import matchesData from './matchesData';
import SportsFilterMenu from './SportsFilterMenu';

const MatchesGrid = () => {
  const [selectedSport, setSelectedSport] = useState('All');
  
  const sports = useMemo(() => ['All', ...new Set(matchesData.map((match) => match.sport))], []);

  const filteredMatches = selectedSport === 'All' 
    ? matchesData 
    : matchesData.filter((match) => match.sport === selectedSport);

  return (
    <>
      <SportsFilterMenu
        sports={sports}
        selectedSport={selectedSport}
        onSelectSport={setSelectedSport}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((match) => (
            <MatchesCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MatchesGrid;

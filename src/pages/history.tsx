import { useContext } from 'react';
import { AppContext, type AppContextType } from '../App';

export const History = () => {
  const { results } = useContext(AppContext) as AppContextType;

  return (
    <div>
      <div id="historyPerm">
        {results.map((result) => (
          <div className="historyItem">
            <p>
              {result.calc} = {result.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

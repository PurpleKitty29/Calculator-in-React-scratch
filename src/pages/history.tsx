import { useContext } from 'react';
import { AppContext } from '../App';

export const History = () => {
  const { results } = useContext(AppContext);

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

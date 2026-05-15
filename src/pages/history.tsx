import { useContext } from 'react';
import { AppContext, type AppContextType } from '../App';

export const History = () => {
  const { results, setResults } = useContext(AppContext) as AppContextType;

  function deleteHistory() {
    setResults([]);
  }

  return (
    <div id="historyPerm">
      <button
        className="blueGlassButton"
        style={{
          position: "absolute",
          top: "90px",
          right: "20px",
        }}
        onClick={deleteHistory}
      >
        Delete
      </button>

      <div>
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
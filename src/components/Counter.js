import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ index, setCounterNum, counterNum }) => {
  return (
    <section>
      <div>
        {counterNum[index] > 0 && (
          <button
            onClick={() => {
              const newTab = [...counterNum];
              newTab[index]--;
              setCounterNum(newTab);
            }}
          >
            <FontAwesomeIcon icon="minus" />
          </button>
        )}

        <span>{counterNum[index]}</span>
        <button
          onClick={() => {
            const newTab = [...counterNum];
            newTab[index]++;
            setCounterNum(newTab);
          }}
        >
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            const newTab = [...counterNum];
            newTab[index] = 0;
            setCounterNum(newTab);
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;

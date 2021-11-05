import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ setCounterNum, counterNum }) => {
  let count = 0;
  return (
    <section>
      <div>
        <button
          onClick={() => {
            count--;
            setCounterNum(counterNum);
          }}
        >
          <FontAwesomeIcon icon="minus" />
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            count++;
            setCounterNum(counterNum);
          }}
        >
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            count = 0;
            setCounterNum(counterNum);
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;

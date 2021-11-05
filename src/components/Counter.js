import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ key, setCounterNum, counterNum }) => {
  return (
    <section>
      <div>
        <button onClick={() => {}}>
          <FontAwesomeIcon icon="minus" />
        </button>
        <span>{counterNum[key]}</span>
        <button onClick={() => {}}>
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
      <div>
        <button onClick={() => {}}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;

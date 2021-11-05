import { useState } from "react";
import Counter from "./Counter";

const AddCounterButton = () => {
  const [counterNum, setCounterNum] = useState([]);
  return (
    <>
      <button
        onClick={() => {
          const newCounterTab = [...counterNum];
          newCounterTab.push(<Counter />);
          setCounterNum(newCounterTab);
        }}
      >
        Add counter
      </button>
      {counterNum.map((counter, index) => {
        return <Counter key={index} setCounterNum={setCounterNum} counterNum={counterNum} />;
      })}
    </>
  );
};

export default AddCounterButton;

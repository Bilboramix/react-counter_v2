import { useState } from "react";
import Counter from "./Counter";

const AddCounterButton = () => {
  const [counterNum, setCounterNum] = useState([15]);
  console.log(counterNum);
  return (
    <>
      <button
        onClick={() => {
          const newCounterTab = [...counterNum];
          newCounterTab.push(0);
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

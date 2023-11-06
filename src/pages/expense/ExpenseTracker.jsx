import { useState } from "react";
import Dropdown from "../../components/dropdown";

const ExpenseTracker = () => {
  const [inputData, setInputData] = useState({
    description: "",
    amount: "",
    type: "",
  });
  //   const [income, setIncome] = useState("");
  const changeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const buttonHandler = () => {
    const inputAllData = {
      description: inputData?.description,
      amount: inputData?.amount,
      type: inputData?.type,
    };
    setInputData((prevState) => [inputAllData, prevState]);
    console.log("object", inputAllData, "inputdata", inputData);
  };
  const dataArryOptipons = [
    {
      text: "Income",
      value: "Income",
    },
    {
      text: "Expense",
      value: "Expense",
    },
  ];
  console.log("inputData", inputData);
  return (
    <section className="container mx-auto">
      <h1>Expense Tracker ₹{}</h1>
      <div className="w-full flex gap-4">
        <input
          type="text"
          name="description"
          value={inputData?.description}
          placeholder="Description"
          className="border rounded py-3 pl-7 pr-5"
          onChange={changeHandler}
        />

        <input
          type="number"
          name="amount"
          value={inputData?.amount}
          placeholder="Amount"
          className="border rounded py-3 pl-7 pr-5"
          onChange={changeHandler}
        />
        <div className="w-1/2">
          <Dropdown
            label="Type"
            name="type"
            options={dataArryOptipons}
            value={inputData?.type}
            onChange={(value) => {
              changeHandler({ target: { name: "type", value } });
            }}
          />
        </div>
        <button
          className="bg-purple-600 text-white w-full"
          onClick={buttonHandler}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default ExpenseTracker;

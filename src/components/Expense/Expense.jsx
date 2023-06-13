import { useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";

import "bootstrap/dist/css/bootstrap.min.css";
import expenseimg from "./expense.png";
import expenseImg from "./Budget-Planning.gif";
import "./Expense.css";



const Expense = () => {
  const initalValue = [];
  const [expenseData, setExpenseDate] = useState(initalValue);
  const [showExpenseList, setShowExpenseList] = useState(false);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onAmountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const onDateChangeHandler = (event) => {
    setDate(event.target.value);
  };


  const displayExpenseList = () => {
    if (expenseData.length) {
      return expenseData.map((ele, index, arr) => (
        <ExpenseList
          name={ele.name}
          amount={ele.amount}
          date={ele.date}
          index={index}
        />
      ));
    }
  }
  // setMessage("Expense list is");
  // const dispmessage=()=>{
  //   setMessage("Expense list is")
  // }

  const onSubmitHandler = () => {
    // <p className="fs-4 text-center">Expense list:</p>

    const data = { date, amount: +amount, name };
    if (amount && date && name) {
      setExpenseDate((prevState) => [...prevState, data]);
      setAmount("");
      setDate("");
      setName("");
      setShowExpenseList(true);
    }

    else {
      setShowExpenseList(false);
    }
  };
  const clearForm = () => {
    setAmount("");
    setDate("");
    setName("");
  };
  return (
    <>
      <div className="container ">
        {/* <img src={expenseimg} alt="expenseimg" class="mx-auto d-block img-fluid" /> */}
        <img src={expenseImg} alt="expenseimg" width="600" height="700" class="mx-auto d-block img-fluid " /> 
        <div className="row mt-0 mb-0 me-5 ms-5"> 
          <div className="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                aria-label="name"
                aria-describedby="basic-addon1"
                onChange={(event) => onNameChangeHandler(event)}
                value={name}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                amount
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="amount"
                aria-label="amount"
                aria-describedby="basic-addon1"
                onChange={onAmountChangeHandler}
                value={amount}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                date
              </span>
              <input
                type="date"
                className="form-control"
                placeholder="date"
                aria-label="date"
                aria-describedby="basic-addon1"
                onChange={onDateChangeHandler}
                value={date}
              />
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md ">
            {(
              !name || !amount || !date

            ) && (
                <span className="fs-8 text-center text-danger">Enter </span>
              )}

            {(
              !name
            ) && (
                <span className="fs-8 text-center text-danger">name </span>
              )}

            {(
              !amount
            ) && (
                <span className="fs-8 text-center text-danger">amount </span>

              )}

            {(
              !date
            ) && (
                <span className="fs-8 text-center text-danger">date </span>
              )}
          </div>
        </div>

        <div className="row m-5 mt-4 justify-content-center">
          <div className="col-md-3 col-sm-3">
            <button
              type="button"
              className="btn btn-dark"
              onClick={onSubmitHandler}
            >
              Add expense
            </button>
          </div>
          <div className="col-md-3 col-sm-3">
            <button
              type="button"
              className="btn btn-dark"
              onClick={clearForm}
            >
              Clear expense form
            </button>
          </div>

          <div className="col-md-3 col-sm-3">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                clearForm();
                setShowExpenseList(false);
              }
              }
            >
              Clear expense
            </button>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-1"></div>
          {showExpenseList && (
            <div className="col-md-8 col-sm-10">
              <p className="fs-4 text-center text-secondary">Expense list</p>
              {displayExpenseList()}
            </div>
          )}
          <div className="col-md-2 col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default Expense;




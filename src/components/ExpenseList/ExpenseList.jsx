import React from "react";

const ExpenseList = ({ name, amount, date, index }) => {
  return (
    <>
      <div className="container list-group">
        <div className="row mt-2 mb-2 alert alert-info">
          <div className="col-md">
            <div className="d-flex justify-content-between" key={index}>
              <p>name:-{name}</p>
              <p>amount:-{amount}</p>
              <p>date:-{date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;



import React, { useState } from "react";
import { Table, Button, Alert } from "react-bootstrap";

import Modal2 from "../Modal2";
import axios from "axios";
export const Calculate = () => {
  const [number, setNumber] = useState();
  const [sum, setSum] = useState(0);

  async function gettheSum(id) {
    //get the members of specific memberid
    await axios
      .get(`https://server2-hazel.vercel.app/data/?memberId=${id}`)
      .then((res) => {
        return res.data.filter((i) => !i.book.borrow);
      })
      .then((data) => {
        const calculatedSum = data.reduce(
          (acc, i) => acc + i.book.payamount,
          0
        );
        setSum(calculatedSum);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <h5>Calculate Debts of members </h5>
      <input
        placeholder="Enter the id of member"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>

      <Button
        variant="secondary"
        className="mx-2"
        onClick={() => gettheSum(number)}
      >
        Calculate
      </Button>

      <p>Amount : {sum}</p>

      {/* Alert for the members who have more than 500 debt */}
      {sum >= 500 ? (
        <Alert variant="warning" className="text-center" dismissible>
          Payment Due
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
};

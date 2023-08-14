import { Button, Container, Row, Table } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
export const Transaction = () => {
  const navi = useNavigate();
  return (
    <>
      <h3 className="text-center">Transactions</h3>
      <Button variant="success" onClick={() => navi("/transaction")}>
        Complete Transactions
      </Button>
      <Button
        variant="warning"
        className="mx-2"
        onClick={() => navi("/transaction/debt")}
      >
        Debts
      </Button>
      <Outlet />
    </>
  );
};

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { close, show } from "../../StateManagement/modalslice2";
import { useDispatch } from "react-redux";
import { Button, Container, Table } from "react-bootstrap";
import Models2 from "../Modal2";

export const Members = () => {
  const [members, setMembers] = useState();
  const dispatch = useDispatch();

  //get the data
  async function getData() {
    await axios
      .get("https://server2-hazel.vercel.app/data")
      .then((res) => {
        console.log(res.data);
        setMembers(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Button variant="success" className="text-right" onClick={getData}>
        Refresh
      </Button>
      <Container>
        <p className="fs-text-2">Members</p>
        <Table
          striped
          bordered
          hover
          responsive
          style={{ overflowX: "scroll" }}
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>BookName</th>
              <th>Author</th>
              <th>BorrowStatus</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          {/* get all the members who have borrowed the books */}
          {members === undefined ? (
            <p>No data filled yet</p>
          ) : (
            members
              .filter((i) => {
                if (i.book?.borrow === true) return i;
              })
              .map((item) => {
                return (
                  <tr>
                    <td>{item.memberId}</td>
                    <td>{item.name}</td>
                    <td>{item.book.title}</td>
                    <td>{item.book.author}</td>
                    <td>{item.book.borrow ? "Borrowed" : ""}</td>
                    <td>{item.book.payamount}</td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => dispatch(show(item))}
                      >
                        Return
                      </Button>
                    </td>
                  </tr>
                );
              })
          )}
        </Table>
      </Container>
      <Models2 />
    </div>
  );
};

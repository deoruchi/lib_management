import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
export const Tr1 = () => {
  const [members, setMembers] = useState();

  async function getData2() {
    await axios
      .get(` https://server2-hazel.vercel.app/data`)
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData2();
  }, []);

  return (
    <div>
      <Button onClick={getData2} className="my-2">
        referesh
      </Button>
      <Table striped bordered hover responsive style={{ overflowX: "scroll" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>BookName</th>
            <th>Author</th>
            <th>BorrowStatus</th>
          </tr>
        </thead>
        {/* members who just returned the book and paid yet */}
        {members === undefined
          ? "No data filled yet"
          : members
              .filter((i) => {
                if (i.book?.borrow === false && i.book?.payamount === 0)
                  return i;
              })
              .map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.memberId}</td>
                    <td>{item.name}</td>
                    <td>{item?.book.title}</td>
                    <td>{item?.book.author}</td>
                    <td>{item.book.borrow ? "Borrowed" : "Returned & paid"}</td>
                  </tr>
                );
              })}
      </Table>
    </div>
  );
};

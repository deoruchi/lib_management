import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { Calculate } from "./Calculate";
import { close, show } from "../../StateManagement/modalslice2";
import { useDispatch } from "react-redux";
import Models2 from "../Modal2";
export const Tr2 = () => {
  const [members, setMembers] = useState([]);
  const dispatch = useDispatch();
  async function getData2() {
    //fetch the data of members
    try {
      const response = await axios.get(`https://server2-hazel.vercel.app/data`);
      setMembers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData2();
  }, []);

  return (
    <div>
      <Button onClick={getData2} className="my-2">
        refresh
      </Button>
      <br></br>
      <br></br>

      <Calculate />
      <br></br>
      {members.length === 0 ? (
        <p>No data available yet</p>
      ) : (
        <>
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
              </tr>
            </thead>
            <tbody>
              {/* member who have both returned and paod for the book */}
              {members === undefined
                ? "no data "
                : members
                    .filter((i) => !i.book?.borrow && i.book.payamount !== 0)
                    .map((item) => (
                      <tr key={item.id}>
                        <td>{item.memberId}</td>
                        <td>{item.name}</td>
                        <td>{item.book.title}</td>
                        <td>{item.book.author}</td>
                        <td>{item.book.borrow ? "" : "Returned"}</td>
                        <td>{item.book.payamount}</td>
                        <td>
                          <Button onClick={() => dispatch(show(item))}>
                            Pay
                          </Button>
                        </td>
                      </tr>
                    ))}
            </tbody>
          </Table>
        </>
      )}
      <Models2 />
    </div>
  );
};

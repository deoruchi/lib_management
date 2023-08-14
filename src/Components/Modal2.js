import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { close } from "../StateManagement/modalslice2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Models2() {
  const show = useSelector((state) => state.modal2.show);
  const data = useSelector((state) => state.modal2.modelData);
  const dispatch = useDispatch();

  async function returnBook(id) {
    // On return: the borrow variable becomes false;
    const ndata = { ...data.book, borrow: false };

    await axios
      .patch(`https://server2-hazel.vercel.app/data/${id}`, {
        book: ndata,
      })
      .catch((err) => console.log(err));
  }

  async function payReturnBook(id) {
    //on return and pay : the pay amount becomes 0 and borrow becomes fals
    const ndata = { ...data.book, borrow: false, payamount: 0 };

    await axios
      .patch(`https://server2-hazel.vercel.app/data/${id}`, {
        book: ndata,
      })
      .then(() => alert("Paid and Returned"))
      .catch((err) => console.log(err));
  }

  return (
    <Modal show={show} onHide={() => dispatch(close())} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>Return Book</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          <strong>Name :</strong>
          {data?.name}
        </p>
        <p>
          <strong>Id: </strong>
          {data?.id}
        </p>
        <p>
          <strong>Name of Book Issued :</strong> {data?.book.title}
        </p>
        <p className="text-bold fs-5 text">
          <strong>Amount:</strong>
          Rs.{data?.book.payamount}
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => returnBook(data?.id)}>
          Return
        </Button>
        <Button variant="primary" onClick={() => payReturnBook(data?.id)}>
          Return & Pay
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Models2;

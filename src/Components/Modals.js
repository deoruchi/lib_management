import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { close } from "../StateManagement/modalslice";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { data } from "../Data/issuedata.json";
import axios, { AxiosHeaders } from "axios";

function Modals() {
  const show = useSelector((state) => state.modal.show);
  const data = useSelector((state) => state.modal.modelData);
  const dispatch = useDispatch();

  //data needed to be transfered
  const [name, setName] = useState();
  const [id, setId] = useState();
  const title = data?.title;
  const author = data?.authors;
  const isbn = data?.isbn;
  //updated data
  const updateData = {
    id: "",
    name: `${name}`,
    memberId: `${id}`,
    book: {
      title: title,
      author: author,
      isbn: isbn,
      payamount: 100,
      borrow: true,
    },
  };

  async function sendData() {
    //post the data
    await axios
      .post(
        `https://server2-hazel.vercel.app/data`,

        updateData
      )
      .then(() => dispatch(close()))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Modal show={show} onHide={() => dispatch(close())}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{data?.title}</h5>
          <p>
            Author:<strong>{data?.authors}</strong>
          </p>
          <p>ISBN : {data?.isbn}</p>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name of Issuer"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Id of Issuer"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* send data to the server*/}
          <Button
            variant="primary"
            onClick={() => {
              sendData();
              setName("");
              setId("");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;

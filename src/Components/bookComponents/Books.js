import { useState } from "react";
import { show } from "../../StateManagement/modalslice";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import book from "../../Data/data.json";
import Modals from "../Modals";

export default function Books() {
  const [keyword, setKeyWord] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Row>
          <Form.Control
            type="text"
            placeholder="Search by titles and authors"
            className=" mr-sm-2"
            value={keyword}
            onChange={(e) => {
              setKeyWord(e.target.value);
            }}
          />
          {book.message !== undefined
            ? book.message
                .filter((val) => {
                  if (keyword === "") return val;
                  else if (
                    val.authors
                      .toLocaleLowerCase()
                      .includes(keyword.toLocaleLowerCase())
                  )
                    return val;
                  else if (
                    val.title.toLowerCase().includes(keyword.toLowerCase())
                  )
                    return val;
                })
                .map((d) => {
                  return (
                    <Col sm={12} className="my-2">
                      <Card key={d.bookID} border="secondary">
                        <Card.Body>
                          <Card.Title className="text-uppercase">
                            {d.title}
                          </Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            {d.authors}
                          </Card.Subtitle>
                          <Card.Subtitle className="mb-2 text-muted">
                            Publisher: {d.publisher}
                          </Card.Subtitle>
                          <hr></hr>
                          <Row>
                            <Col>ISBN:{d.isbn}</Col>
                            <Col>Language: {d.language_code}</Col>
                            <Col>Rating: {d.ratings_count}</Col>
                            <Col> Publication: {d.publication_date}</Col>
                          </Row>
                          <Button onClick={() => dispatch(show(d))}>
                            Issue
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
            : "jk"}
          <Modals />
        </Row>
      </Container>
    </>
  );
}

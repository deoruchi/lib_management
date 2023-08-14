import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { login } from "../../StateManagement/slice1";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  //login check if the user is present in the database then allow the access to login
  return (
    <>
      <Container
        style={{ width: "18rem" }}
        className="bg-success text-white py-3 rounded-2 my-5"
        fluid
      >
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              //check the email and password
              if (email === "admin@lib.com" && pass === "123")
                dispatch(login());
              else {
                alert("can't login");
              }
            }}
          >
            Submit
          </Button>
        </Form>
        {/* just for login purpose */}
        <Form.Text className="text-warning center">
          enter admin@lib.com and 123 as password
        </Form.Text>
      </Container>
    </>
  );
}

export default Login;

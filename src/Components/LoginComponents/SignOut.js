import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signout } from "../../StateManagement/slice1";

function SignOut() {
  const dispatch = useDispatch();
  return (
    <>
      <Button variant="danger" onClick={() => dispatch(signout())}>
        SignOut
      </Button>
    </>
  );
}

export default SignOut;

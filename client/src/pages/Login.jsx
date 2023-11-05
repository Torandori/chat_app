import { useContext } from "react";
import {Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const {  
    loginInfo,
    loginUser,
    loginError,
    updateLoginInfo,
    isLoginLoading } = useContext(AuthContext)

  return(
    <>
    <Form onSubmit={loginUser}>
      <Row style={{height: "100vh", justifyContent: "center", paddingTop: "10%"}}>
        <Col xs={6}>
          <Stack gap="3">
            <h2>Login</h2>
            <Form.Control type="email" placeholder="Email" onChange={(event) => updateLoginInfo({...loginInfo, email: event.target.value})}/>
            <Form.Control type="password" placeholder="Password" onChange={(event) => updateLoginInfo({...loginInfo, password: event.target.value})} />
            <Button variant="primary" type="submit">
              { isLoginLoading ? 'Getting you in...' : 'Login' }
            </Button>
            { loginError?.error && 
              <Alert variant="danger"><p>{loginError?.message}</p></Alert>
            }
          </Stack>
        </Col>
      </Row>
    </Form>
    </>
  )
}

export default Login;
import React, {useState} from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
import './Login.css'
function Login() {
    const [Email_login ,setEmail_login]=useState(" ");
    const [Password_login,setPass_login]=useState(" ");

    const handleLogin=(e)=>{
        e.preventDefault();
        let Email = localStorage.getItem("Email");
        let Password =localStorage.getItem("Password");
        Email =JSON.parse(Email);
        Password =JSON.parse(Password);
        if(Email_login == Email && Password_login == Password)
        {
            alert("logged in successfully");
        }
        else{
            alert("please enter valid data");
        }
    }
    return (
        <div>
            <div>
                <Container>
                    <div>
                        <Container>
                            <Row>
                                <Col md={6} className="log_form mt-5">
                                <Form onSubmit={handleLogin}>
                                    <Card style={{ width: '100'}}>
                                        <Card.Body>
                                        <i class="fas fa-user-circle"></i>
                                            <Card.Title>Login</Card.Title>
                                            <Card.Text>
                                                <Form.Label className="form_label"><i class="fas fa-envelope"></i> Email/ Username:</Form.Label>
                                                <Form.Control placeholder="Email/Username" type="text" onChange={(e)=>setEmail_login(e.target.value)} />

                                                <Form.Label className="form_label_1 mt-3"><i class="fas fa-lock"></i> Password:</Form.Label>
                                                <Form.Control placeholder="Password" type="Password" onChange={(e)=>setPass_login(e.target.value) }/>
                                            </Card.Text>
                                            <Button variant="primary" type="submit" className="mt-3" href="./Entry">Login</Button>
                                        </Card.Body>
                                    </Card>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Login

import React, {useState} from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
import './Login.css'
function Login() {
    const [Email_login ,setEmail_login]=useState(" ");
    const [Password_login,setPass_login]=useState(" ");

    const handleLogin=(e)=>{
        e.preventDefault();
        let flag1=false;
        const myArray =JSON.parse(localStorage.getItem('Data'));
        myArray.map((elem)=>{
            if( elem.Email == Email_login && elem.Password == Password_login)
            {
                flag1=true;
                // alert("logged in successfully");
            }
    });
    if(flag1 == true)
    {
        alert("form submitted successfully");
        window.location.href="./Entry";
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
                                            <Button variant="primary" type="submit" className="mt-3">Login</Button>
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

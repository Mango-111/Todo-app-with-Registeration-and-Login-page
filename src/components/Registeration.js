import React, { useState } from 'react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import './Register.css'

function Registeration() {
    const [Fname, setUser] = useState(" ");
    const [Lname, setLname] = useState(" ");
    const [Uname, setUname] = useState(" ");
    const [Email, setEmail] = useState(" ");
    const [Pass, setPass] = useState(" ");
    const [Conpass, setConPass] = useState(" ");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    const handleForm = (e) => {
        e.preventDefault();

        if (!Fname || !Lname || !Uname || !Email || !Email || !Pass || !Conpass) {
            setFlag(true);
        }
        else {
        setFlag(false);
        let formData = {
            Email: Email,
            Password:Pass,
        }
        let formArr = [ ];
        let data = localStorage.getItem('Data')
        data = JSON.parse(data);
        console.log("Data",data);
        if(data!==null){
        formArr =[...data];}

        formArr.push(formData);
        let loginData = localStorage.setItem("Data",JSON.stringify(formArr));
        console.log("Data",loginData);
        setLogin(!login)
        }

    }

    const handleClick = (e) => {
        // e.preventDefault();
        if (Fname !== " " && Lname !== " " && Uname !== " " && Email !== " " && Email !== " " && Pass !== " " && Conpass !== " ") {
            setLogin(!login);
            console.log(setLogin);
           window.location.href="./Login"
        }
        else {
            setLogin(login)
            alert("Please fill all the fields")
        }
    }


    return (
        <div>
            <div className="mt-4 bg">
                <Row className="ml-5">
                    <Col md={6} className="bg1">
                        <Form onSubmit={handleForm} className="ml-5 form">
                            <h2 style={{color:"white"}}> Registeration Form</h2>
                            <Card style={{ width: "300" }} className="mt-4 mb-5">
                                <Card.Body className="card">
                                    <Card.Text>
                                        <Form.Label className="label"><i class="fas fa-user-circle"></i> Name:</Form.Label>
                                        <Form.Control type="]text" placeholder="Enter Name" onChange={(e) => setUser(e.target.value)} />

                                        <Form.Label className="label_1"><i class="fas fa-user-circle"></i> Last Name:</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />

                                        <Form.Label className="label_1"><i class="fas fa-user-circle"></i> User Name:</Form.Label>
                                        <Form.Control type="text" placeholder="User Name" onChange={(e) => setUname(e.target.value)} />

                                        <Form.Label className="label_4"><i class="fas fa-envelope"></i> Email:</Form.Label>
                                        <Form.Control placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />

                                        <Form.Label className="label_3"><i class="fas fa-lock"></i> Password:</Form.Label>
                                        <Form.Control placeholder="Password" type="Password" onChange={(e) => setPass(e.target.value)} />

                                        <Form.Label className="label_2"> <i class="fas fa-lock"></i> Confirm Password:</Form.Label>
                                        <Form.Control placeholder="Password" type="Password" onChange={(e) => setConPass(e.target.value)} />

                                        <Button variant="primary" type="submit" className="mt-3" onClick={handleClick}>
                                            Submit
                                        </Button>
                                    </Card.Text>
                                    <a href="./Login">already have an account?Login</a>
                                </Card.Body>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Registeration

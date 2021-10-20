import React from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
function Entry() {
    return (
        <div>
            <div>
                <Container>
                    <div>
                        <Container>
                            <Row>
                                <Col md={6}>

                                    <Card style={{ width: '100'}}>
                                        <Card.Body>
                                            <Card.Title>Add Taks here:</Card.Title>
                                            <Card.Text>
                                                <Form.Label>Enter the task:</Form.Label>
                                                <Form.Control placeholder="New Task" type="text" />

                                                <Form.Label> Priority</Form.Label>
                                                <Form.Control placeholder="Priority" type="number" />
                                            </Card.Text>
                                            <Button variant="primary" type="submit" className="mt-3">Submit</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
            
        </div>
    )
}

export default Entry

import React, { useState } from 'react'
import { Form, Button, Container, Row, Col, Card, Table } from 'react-bootstrap'
import './Entry.css'
function Entry() {
    const [inputData, setInput] = useState();
    const [items, setItems] = useState([]);
    const [Priority, setPriority] = useState();
    const [priorities, setPrior] = useState([]);

    // To add items
    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInput('');
        }
    }

    const addPriority = () => {
        if (!Priority) {
        } else {
            setPrior([...priorities, Priority]);
            setPriority('');
        }
    }

    const deleteItem = (id) => {
        const updateItem = items.filter((elem, ind) => {
            return ind !== id;
        });
        setItems(updateItem);
    }
    return (
        <div >
            <div>
                <Container>
                    <div>
                        <Container className="setBg">
                            <Row>
                                <Col md={6} className="align mt-5">
                                    <Card style={{ width: '100' }}>
                                        <Card.Body>
                                            <Card.Title>Add Taks here:</Card.Title>
                                            <img src="../Images/todo_icon.jpg" alt="Todo list icon" style={{ height: 80, width: 90 }} />
                                            <Card.Text>
                                                <Form.Label className="label1">Enter the task:</Form.Label>
                                                <Form.Control placeholder="New Task" type="text" value={inputData} onChange={(e) => setInput(e.target.value)} />
                                                 
                                                <Button variant="primary" type="submit" className="mt-3 mb-3" onClick={addItem}>Add Task</Button>

                                                <Form.Label className="label2"> Priority:</Form.Label>
                                                <Form.Control placeholder="Priority" type="number" value={Priority} onChange={(e) => setPriority(e.target.value)} />
                                            </Card.Text>
                                            <Button variant="primary" type="submit" className="mt-3" onClick={addPriority}>Add Priority</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <div>
                                {
                                    items.map((elem, ind) => {
                                        return (
                                            <div key={ind}>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Sr.No</th>
                                                            <th>Task Name</th>
                                                            <th>Task done</th>
                                                            <th>Delete Task</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>{elem}</td>
                                                            <td><i class="fas fa-check-square"></i></td>
                                                            <td><i class="fas fa-times-circle" onClick={(e) => deleteItem(ind)}></i></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>)
                                    })
                                }
                            </div>
                            <div>
                                <Row>
                                    <Col md={3}>
                                {
                                    priorities.map((prio, ind1) => {
                                        return (
                                            <div key={ind1}>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Priority</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{prio}</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        )
                                        })
                                    }
                                    </Col>
                                    </Row>
                                 </div>
                        </Container>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Entry

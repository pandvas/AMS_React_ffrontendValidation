import axios from 'axios';
import { React, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const MapEvent = () => {

    const [departmentid, setDepartmentid] = useState();
    const [eventid, setEventId] = useState();

    const history = useHistory();

    const MapEvent = async () => {
        let formField = new FormData();
        formField.append('departmentid', departmentid);
        formField.append('eventid', eventid);

        await axios({
            method: 'POST',
            url: 'http://localhost:8000/api/admin/rollNoMapper/',
            data: formField
        }).then((response) => {
            console.log(response.data)
            history.push('/')
        })
    }

    return (
        <div>
            <Container>
                <Row className="px-5 py-5">
                    <Col>
                        <Form className="p-5">
                            <h1>Map Event</h1>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Department Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Roll No" required name="departmentid" value={departmentid} onChange={(e) => setDepartmentid(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Event Id</Form.Label>
                                    <Form.Control type="number" placeholder="Student Id" required name="eventid" value={eventid} onChange={(e) => setEventId(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3" onClick={MapEvent} >
                                    Map
                                </Button>
                            </Form>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default MapEvent

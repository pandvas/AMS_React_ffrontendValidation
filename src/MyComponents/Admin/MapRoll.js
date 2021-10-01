import axios from 'axios'
import { React, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

const MapRoll = () => {

    const [rollno, setRollno] = useState();
    const [studentid, setStudentid] = useState();

    const history = useHistory();

    const MapRoll = async () => {
        let formField = new FormData();
        formField.append('rollno', rollno);
        formField.append('studentid', studentid);

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
                            <h1>Map Roll No</h1>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Roll No.</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Roll No" required name="rollno" value={rollno} onChange={(e) => setRollno(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Student Id</Form.Label>
                                    <Form.Control type="number" placeholder="Student Id" required name="studentid" value={studentid} onChange={(e) => setStudentid(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3" onClick={MapRoll} >
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

export default MapRoll

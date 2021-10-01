import axios from 'axios';
import { React, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';

const MapDepartment = () => {

    const [departmentid, setDepartmentid] = useState();
    const [universityid, setUniversityid] = useState();
    const [hodid, setHodid] = useState();

    const history = useHistory();

    const MapDepartment = async () => {
        let formField = new FormData();
        formField.append('departmentid', departmentid);
        formField.append('universityid', universityid);
        formField.append('hodid', hodid);

        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/departmentMapper/',
            data: formField
        }).then((response) => {
            console.log(response.data)
            history.push('/')
        })
    }


    return (
        <div>
            <Container>
                <Row className="px-5">
                    <Col>
                        <Form className="p-5">
                            <h1>Map Department</h1>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Department Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Department Id" required name="departmentid" value={departmentid} onChange={(e) => setDepartmentid(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Hod Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Hod Id" required name="hodid" value={hodid} onChange={(e) => setHodid(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Univeristy Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter University Id" name="address" required name="universityid" value={universityid} onChange={(e) => setUniversityid(e.target.value)} />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-3" onClick={MapDepartment}>
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

export default MapDepartment

import axios from 'axios';
import { React, useState } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';

const MapFaculty = () => {

    const [departmentid, setDepartmentid] = useState();
    const [facultyid, setFacultyid] = useState();
    const [universityid, setUniversityid] = useState();

    const history = useHistory();

    const MapFaculty = async () => {
        let formField = new FormData();
        formField.append('departmentid', departmentid);
        formField.append('facultyid', facultyid);
        formField.append('universityid', universityid);

        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/facultyMapper/',
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
                            <h1>Map Faculty</h1>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Department Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Department Id" required name="departmentid" value={departmentid} onChange={(e) => setDepartmentid(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Faculty Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Faculty Id" required name="facultyid" value={facultyid} onChange={(e) => setFacultyid(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Univeristy Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter University Id" name="address" required name="universityid" value={universityid} onChange={(e) => setUniversityid(e.target.value)} />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-3" onClick={MapFaculty}>
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

export default MapFaculty

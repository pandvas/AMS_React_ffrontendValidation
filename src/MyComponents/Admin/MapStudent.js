import axios from 'axios';
import { React, useState } from 'react'
import { Button, Form, Row, Col, Container } from 'react-bootstrap'
import { useHistory } from 'react-router';

const MapStudent = () => {

    const [courseid, setCourseid] = useState();
    const [departmentid, setDepartmentid] = useState();
    const [studentid, setStudentid] = useState();
    const [universityid, setUniversityid] = useState();

    const history = useHistory();

    const MapStudent = async () => {
        let formField = new FormData();
        formField.append('courseid', courseid);
        formField.append('departmentid', departmentid);
        formField.append('studentid', studentid);
        formField.append('universityid', universityid);
        alert(courseid)
        alert(departmentid)
        alert(studentid)
        alert(universityid)
        await axios({
            metod: 'POST',
            url: 'http://127.0.0.1:8000/api/admin/studentMapper/',
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
                            <h1>Map Student</h1>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Department Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Department Id" required name="departmentid" value={departmentid} onChange={(e) => setDepartmentid(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Course Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Course Id" required name="courseid" value={courseid} onChange={(e) => setCourseid(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Univeristy Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter University Id" name="address" required name="universityid" value={universityid} onChange={(e) => setUniversityid(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student Id</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Student Id" name="studentid" required name="studentid" value={studentid} onChange={(e) => setStudentid(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3" onClick={MapStudent}>
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

export default MapStudent

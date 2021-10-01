import axios from 'axios';
import React ,{useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';

const Contact = () => {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [description,setDescription] = useState();

    const history = useHistory();

    const AddDetails = async() => {
        let formField = new FormData();
        formField.append('name',name);
        formField.append('email',email);
        formField.append('description',description);

        alert("Your request is submitted, We will contact you shortly !")

        await axios ({
            method : 'POST',
            url : "http://127.0.0.1:8000/api/contact/",
            data: formField
        }).then((response) =>  {
            console.log(response.data)
            history.push('/')
        })
    }

    return (
        <div id="contact"  >
            <Container style={{ 'margin-top': '40px' }} >
                <Row >
                    <Col xs={12} md={12} className="d-flex align-items-center justify-content-center ">
                        <h1 style={{ 'margin-bottom': '50px' }}>Contact Us</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} >

                        <div >

                            <iframe width="100%" height="400px" className="absolute inset-0 " frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpwh-ILbpDDkRgUCscG_hQSE&key=AIzaSyBikuwwj54VFaSzS-EKWRTlQODKEz_xyso" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4);" }}></iframe>

                        </div>

                    </Col>
                    <Col xs={12} md={6} >
                        <Form >
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" value={name} onChange={(e)=> setName(e.target.value)} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter Message Here" rows={3} name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="pr" onClick={AddDetails}>
                                Request
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container >

        </div>
    )
}

export default Contact

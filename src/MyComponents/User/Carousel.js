import React from 'react'
import { Carousel } from 'react-bootstrap';
import d1 from "./images/slider/DSC_3838.JPG";
import d2 from "./images/slider/DSC_3797.JPG";
import d3 from "./images/slider/DSC_3779.JPG";
import m1 from "../../../src/images/DSC_3911.JPG";

const Carousl = () => {
    return (<Carousel id="home">
        <Carousel.Item interval={1000}>
            <img
                className="d-block w-100"
                src={d1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3 >Alumni Management System</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
                className="d-block w-100"
                src={d2}
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Alumni Management System</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={d3}
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Alumni Management System</h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>)
}

export default Carousl

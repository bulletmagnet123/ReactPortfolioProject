import React from "react";
import { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { MdEmail } from 'react-icons'
import { BsFillEnvelopeFill, BsPhone } from "react-icons/bs";

class Contact extends Component {
    render() {
        return (
            <div className="row">
                <Card className="col-2">
                    <Card.Body>
                        <Card.Title>Nathaniel Phelps Contact info</Card.Title>
                        <Card.Text>
                            <b>Hellow this is The creator of this website, i am currentally looking for employment</b>
                            <p>I am Front End Web and Mobile Development certified and i am skilled in java, javascript, html and css.</p>
                        </Card.Text>
                        <Button variant="primary" href="https://docs.google.com/document/d/1uVD2qPBYWX8QwAJr8MFQNOHA06Bk8iXi7kKGuXw2jLM/edit?usp=sharing">Click me for my resume</Button>
                    </Card.Body>
                </Card>
                <Card className="col-2">
                    <Card.Body>
                        <Card.Title>Here is my various ways to contact me</Card.Title>
                        <Card.Text>
                            <Button variant="info" href="mailto:wildnate@gmail.com"><BsFillEnvelopeFill/> My Email link</Button>
                            <p>Hellow my Email is ( wildnate@gmail.com ) if you wish to contact me you can also text or call me at the phonen number <BsPhone/> 916-502-7638.</p>
                            <h6>I preffer if you email me rather then texting but if its urgent then text and call.</h6>
                        </Card.Text>
                        <Button variant="primary" href="https://docs.google.com/document/d/1uVD2qPBYWX8QwAJr8MFQNOHA06Bk8iXi7kKGuXw2jLM/edit?usp=sharing">Click me for my resume</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default Contact;

import React from 'react'
import { Component } from 'react';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header className="bg-primary text-white"><h3>Facts At a Glance</h3></Card.Header>
                    <Card.Body>
                        <Fade in>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">July 1, 2021</dd>
                                <dt className="col-6"> Creator.</dt>
                                <dd className="col-6">Nate </dd>
                                <dt className="col-6"> Full title </dt>
                                <dd className="col-6"> Nathaniel Anthony Phelps. </dd>
                            </dl>
                        </Fade>
                    </Card.Body>
                    <Card.Footer><h6>About this website </h6> this is my second portfolio project belt in React, with help from react-bootstrap, as kinda a fan site to games and mods for games</Card.Footer>
                </Card>
            </div>
        )
    }
}
export default About;
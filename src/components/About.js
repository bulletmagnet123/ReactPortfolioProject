import React from 'react'
import { Component } from 'react';
import { Fade } from 'react-animation-components';
import { Card } from 'react-bootstrap';

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
                                <dd className="col-6"><h6>Bulletmagnet</h6> real name nate </dd>
                            </dl>
                        </Fade>
                    </Card.Body>
                    <Card.Footer><h6>About this website </h6> this is my second portfolio project belt in React, with help from react-bootstrap, as kinda a fan site to games and mods for games</Card.Footer>
                </Card>

                <h1>Registration Form</h1>
                <hr />
                <h3>Provide your information</h3>
                <label for="Name">Name*</label> <br />
                <input required placeholder="Name" id="Name" name="Name" type="text" />
                <br />
                <label for="email">Email*</label> <br />
                <input id="email" name="email" type="email" placeholder="email" />
                <br />
                <label for="AreaCode">Telephone</label> <br />
                <input
                    type="tel"
                    name="AreaCode"
                    id="phone"
                    maxlength="3"
                    placeholder="555"
                    size="3"
                    min="3"
                />
                -
                <input
                    type="tel"
                    name="middleCode"
                    id="phone"
                    maxlength="3"
                    placeholder="555"
                    size="3"
                    min="3"
                />
                -
                <input
                    type="tel"
                    name="lastCode"
                    id="phone"
                    maxlength="3"
                    placeholder="555"
                    size="3"
                    min="3"
                />
                <br />
                <br />
                <br />
                <label for="DOB">DOB*</label>
                <input id="DOB" name="DOB" type="date" placeholder="mm/dd/yyyy" />
                <br />
                <label for="Gender">Gender</label> <br />
                <input name="gender" id="male" type="radio" />
                <label for="male">Male</label>
                <input name="gender" id="female" type="radio" />
                <label for="female">Female</label>
                <input name="gender" id="other" type="radio" />
                <label for="other">Other</label> <br />

                <br />
                <br />
                <br />
                <label for="HouseholdSize">Household size</label> <br />
                <input
                    type="text"
                    name="HouseholdSize"
                    id="HouseholdSize"
                    size="1"
                    maxlength="3"
                />
                <br />
                <label for="Income">Annual Income</label> <br />
                <select id="Income" name="Income">
                    <option value="50k">50k</option>
                    <option value="100k">100k</option>
                    <option value="200k">200k</option>
                    <option value="1000k">1000k</option>
                </select>
                <br />
                <br />
                <br />
                <br />
                <label for="Message">Message</label> <br />
                <textarea
                    name="Message"
                    id="Message"
                    cols="40"
                    rows="8"
                    placeholder="add message here"
                ></textarea>
                <br />
                <br />
                <br />
                <label for="password">Password*</label><br />
                <input id="password" type="password" placeholder="Password" /> <br />
                <label for="Confirmpassword">Confirm password*</label><br />
                <input
                    id="Confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                />
                <br />
                <br />
                <br />
                <input type="checkbox" name="terms" id="terms" />
                <label for="terms">
                    By signing up, you agree to the
                    <a href="https://google.com"> Terms of Service</a></label
                >
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default { About };
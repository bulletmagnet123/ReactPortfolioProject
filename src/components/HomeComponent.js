import React from "react";
import { Component } from "react";
import Card from "react-bootstrap/Card";
import { Carousel, Button, Media, Container, Row } from "react-bootstrap";
import ffx1 from "../images/ffx1.jpg";
import ffx2 from "../images/ffx2.png";
import ffx3 from "../images/ffx3.jpg";
import icon from "../images/icon.png";
import SideNav from "./SideNav";

class Home extends Component {
    render() {
        return (
            <Container>
                <Media>
                    <div>
                        <Media.Body className="border border-dark">
                            <img className="img-thumbnail" src={icon} />
                            <h3>FFXIV A Realm Reborn</h3>
                            <p>
                                Final Fantasy XIV Online, also known collectively with its
                                initial relaunched title Final Fantasy XIV: A Realm Reborn
                            </p>
                            <h4>For Texture Modding tools Click This</h4>
                        </Media.Body>
                    </div>
                </Media>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ height: "600px" }}
                            className="d-block w-100 img-thumbnail"
                            src={ffx1}
                            alt="First slide"
                        ></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "600px" }}
                            className="d-block w-100 img-thumbnail"
                            src={ffx2}
                            alt="Second slide"
                        ></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "600px" }}
                            className="d-block w-100 img-thumbnail"
                            src={ffx3}
                            alt="Third slide"
                        ></img>
                    </Carousel.Item>
                </Carousel>
                <SideNav />
                <p>
                    FFXIV A Realm reborn is a more easily moddible game than most MMORPGS
                    out there. You would need one tool to do the replacement for various
                    outfits and gear. And even player models.
                </p>
                <div>
                    <Container>
                        <div className="row">
                            <Card className="col-6">
                                <Card.Title>FFXIV MOD ARCHIVE</Card.Title>
                                <Card.Text>
                                    This is where you will find the most amount of mods to change
                                    your gear and outfits and player models In this website you
                                    will find a Tool called FFXIV TexTools. Just click on the
                                    tools button at the top of the page to get to the page for the
                                    tools ill place a button to go there right here.
                                </Card.Text>
                                <Button variant="danger" href="https://www.ffxiv-textools.net/">
                                    Button to textools main website
                                </Button>
                                <Button
                                    variant="primary"
                                    href="https://www.xivmodarchive.com/tools"
                                >
                                    Button to tools section of mod archive
                                </Button>
                            </Card>

                            <Card className="col-6">
                                <Card.Title>Nexus Mods</Card.Title>
                                <Card.Text>
                                    This is nexus mods, it contains ALOT of mods for almost any
                                    game thats moddible. It contain parsers and lighting overhals
                                    and such for FFXIV. So if you want better lighting and such
                                    you should go here. other wise if you just want better looking
                                    outfits go to FFXIV Mod archive
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    href="https://www.nexusmods.com/finalfantasy14"
                                >
                                    {" "}
                                    Button to Nexus mods FXXIV section{" "}
                                </Button>
                            </Card>
                        </div>
                    </Container>
                </div>
            </Container>
        );
    }
}
export default Home;

import React from 'react'
import { Component } from 'react'
import { Carousel, Button, Media, Container, } from 'react-bootstrap'
import ffx1 from '../images/ffx1.jpg'
import ffx2 from '../images/ffx2.png'
import ffx3 from '../images/ffx3.jpg'
import icon from '../images/icon.png'
import SideNav from './SideNav'

class Home extends Component {
    render() {
        return (
            <Container>
                <div>
                    <Media>
                        <div>
                            <Media.Body className="border border-dark">
                                <img className="img-thumbnail" src={icon} />
                                <h3>FFXIV A Realm Reborn</h3>
                                <p>Final Fantasy XIV Online, also known collectively with its initial relaunched title Final
                                    Fantasy XIV: A Realm Reborn</p>
                                <h4>For Texture Modding tools Click This</h4>
                                
                            </Media.Body>
                        </div>
                    </Media>
                    <Carousel>
                        <Carousel.Item >
                            <img className="d-block w-100 img-thumbnail" src={ffx1} alt="First slide"></img>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img style={{ 'height': "600px" }} className="d-block w-100 img-thumbnail" src={ffx2} alt="Second slide"></img>
                        </Carousel.Item >
                        <Carousel.Item >
                            <img className="d-block w-100 img-thumbnail" src={ffx3} alt="Third slide"></img>
                        </Carousel.Item>
                    </Carousel>
                    <SideNav />
                </div>
            </Container>
        )
    }
}
export default Home;
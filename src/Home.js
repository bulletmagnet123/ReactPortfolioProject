import React from 'react'
import { Carousel, Button, Media } from 'react-bootstrap'
import ffx1 from './images/ffx1.jpg'
import ffx2 from './images/ffx2.png'
import ffx3 from './images/ffx3.jpg'
import icon from './images/icon.png'


export const Home = () => (
    <div>
        <Media>
            <div>
                <Media.Body className="block-example border border-dark">
                <img src={icon}/>
                    <h3>FFXIV A Realm Reborn</h3>
                    <p>Final Fantasy XIV Online, also known collectively with its initial relaunched title Final
                        Fantasy XIV: A Realm Reborn</p>
                </Media.Body>
            </div>

        </Media>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100 img-thumbnail" src={ffx1} alt="First slide"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 img-thumbnail" src={ffx2} alt="Second slide"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 img-thumbnail" src={ffx3} alt="Third slide"></img>
            </Carousel.Item>
        </Carousel>
    </div>
)
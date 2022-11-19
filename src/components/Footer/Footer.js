import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Iframe from 'react-iframe'
import './Footer.css';
import solubislogo from '../../images/solubis_logo.svg'


function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row className='main-foot'>
                    <Col className='col col-lg-4 col-md-12 col-12'>
                        <img className='text-lg-start text-md-center text-center mb-lg-0 mb-md-5 mb-2 main-title' src={solubislogo} alt="logosolubis" />
                    </Col>
                    <Col className='col col-lg-2 col-md-3 col-12'>
                        <ul>
                            <li className='list-unstyled'>
                                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>About Us</h5>
                            </li>
                            <li className='list-unstyled mb-2'>
                                <a href="#0">Career</a>
                            </li>
                            <li className='list-unstyled mb-2'>
                                <a href="#0">Register</a>
                            </li>
                            <li className='list-unstyled mb-2'>
                                <a href="#0">Privacy</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className='col col-lg-2 col-md-3 col-12'>
                        <ul>
                            <li className='list-unstyled'>
                                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>Features</h5>
                            </li>
                            <li className='list-unstyled mb-2'>
                                <a href="#0"><i className="bi bi-instagram"></i>Business Insights</a>
                            </li>
                            <li className='list-unstyled mb-2'>
                                <a href="#0"><i className="bi bi-twitter"></i>Application</a>
                            </li>
                            <li className='list-unstyled mb-2'>
                                <a href="#0"><i className="bi bi-facebook"></i>Transaction</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className='col col-lg-3 col-md-6 col-12'>
                        <ul>
                            <li className='list-unstyled'>
                                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>Contact</h5>
                            </li>
                            <li className='list-unstyled mb-2'>
                                <a href="#0"><i className="bi bi-geo-alt-fill"></i>Citta Graha, Jl. Panjang No.26, RT.6/RW.1, Kedoya Sel., Kec. Kb. Jeruk, Jakarta Barat, 11520.</a>
                            </li>
                            <li className='list-unstyled mb-2'>
                                <a href="#0"><i className="bi bi-telephone-fill"></i>(021) - 3006 7971</a>
                            </li>
                            <li className='list-unstyled mb-2'>
                                <a href="#0"><i className="bi bi-envelope-at-fill"></i>cs@solubis.com</a>
                            </li>
                            <li className='list-unstyled'>
                                <div className="map mt-4">
                                    <Iframe className='rounded-3' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.472508344987!2d106.7664704!3d-6.1818369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e778bda11afb5e8!2sSolubis%20(PT%20Solubis%20Sukses%20Gemilang)!5e0!3m2!1sid!2sid!4v1668896333998!5m2!1sid!2sid"
                                        allowfullscreen="" loading="lazy"></Iframe>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='justify-content-lg-between justify-content-md-center justify-content-center mt-5 bott-foot'>
                    <Col className='col-lg-4 col-md-12 col-12 text-lg-start text-md-center text-center'>
                        <p className='copy'>Copyright 2022. All rights reserved</p>
                    </Col>
                    <Col className='col-lg-4 col-md-12 col-12 text-lg-end text-md-center text-center'>
                        <p className='design'>Designed by Naufal</p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}


export default Footer
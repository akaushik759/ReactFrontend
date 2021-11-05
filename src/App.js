import React, {Component, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form, Image, InputGroup } from 'react-bootstrap'

import './App.css';
import Slogan from './Slogan'
import Searchbar from './Searchbar'

import dukaanLogo from'./icons/white.png';
import searchLogo from "./icons/search.png";
import selectLogo from "./icons/select.png";
import standoutLogo from "./icons/standout.png";
import privacyPolicyGeneratorLogo from "./icons/privacy-policy-generator.png";
import tAndCGeneratorLogo from "./icons/t&c-generator.png";
import domainNameGeneratorLogo from "./icons/domain-name-generator.png";
import invoiceGeneratorLogo from "./icons/invoice-generator.png";
import indiaFlag from "./icons/india-flag.png";
import arrowLogo from "./icons/arrow.png"

import './fonts/galanogrotesque-regular.otf';
import './fonts/galanogrotesque-medium.otf';
import './fonts/galanogrotesque-semibold.otf';


class App extends Component {

  componentDidMount(){
    document.title = "Free Slogan Maker"
  }

  render(){
    return (
    <body>
      <Container className="header-container" fluid>
        <Container className="container-child">
            <Row>
              <Col md={2} sm={12} style={{"padding-left":"0px"}}><Image src={dukaanLogo} className="dukaan-logo" /></Col>
              <Col md={7} ></Col>
              <Col md={1} sm={12} className="my-auto text-end"><a href="/" className="link">Sign In</a></Col>
              <Col md={2} sm={12} className="text-end" style={{"padding-right":"0px"}}><Button className="cta-button shadow-none">Dukaan for PC</Button></Col>
            </Row>
        </Container>
      </Container>

      <Container className="content-container">
        <Row>
          <Col md={2}></Col>
          <Col md={8} sm={12}>
            <Row className="content-row">
              <Col md={12} sm={12}>
                <p className="tool-name">Free slogan maker</p>
                <p className="tool-description">Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>

                <p className="tool-input-label">Word for your slogan</p>
                <Searchbar/>
                <Button className="tool-word-submit-button shadow-none">Generate slogans</Button>
              </Col>
            </Row>

            <hr></hr>

            <Row className="slogan-container-header">
              <Col md={8} sm={12} className="my-auto">
                <span className="slogan-generated-title">We have generated 1,023 slogans for "cozy"</span>
              </Col>
              <Col md={4} sm={12} className="my-auto text-end">
                <Button className="download-slogans-button shadow-none">Download all</Button>
              </Col>
            </Row>

            <Row className="slogan-container">
              <Slogan uid="1" text="There is no Sore it will Not Heal, No cool it will not Subdue."/>
              <Slogan uid="2" text="coziness building for tomorrow"/>
            </Row>

            <Row className="slogan-container">
              <Slogan uid="3" text="There is no Sore it will Not Heal, No cool it will not Subdue."/>
              <Slogan uid="4" text="Review the facts cool is the best."/>
            </Row>

            <Row className="slogan-container">
              <Slogan uid="5" text="Review the facts cool is the best."/>
              <Slogan uid="6" text="coziness building for tomorrow"/>
            </Row>

            <Row className="slogan-container">
              <Slogan uid="7" text="There is no Sore it will Not Heal, No cool it will not Subdue."/>
              <Slogan uid="8" text="coziness building for tomorrow"/>
            </Row>

            <Row className="slogan-container">
              <Slogan uid="9" text="There is no Sore it will Not Heal, No cool it will not Subdue."/>
              <Slogan uid="10" text="coziness building for tomorrow"/>
            </Row>

            <Row className="slogan-container">
              <Slogan uid="11" text="There is no Sore it will Not Heal, No cool it will not Subdue."/>
              <Slogan uid="12" text="coziness building for tomorrow"/>
            </Row>

            <Row className="slogan-container">
              <Slogan uid="13" text="There is no Sore it will Not Heal, No cool it will not Subdue."/>
              <Slogan uid="14" text="coziness building for tomorrow"/>
            </Row>

            <Row className="slogan-container">
              <Slogan uid="15" text="There is no Sore it will Not Heal, No cool it will not Subdue."/>
              <Slogan uid="16" text="coziness building for tomorrow"/>
            </Row>

            <Row className="slogan-container">
              <Slogan uid="17" text="There is no Sore it will Not Heal, No cool it will not Subdue."/>
              <Slogan uid="18" text="coziness building for tomorrow"/>
            </Row>


            <hr className="hr-ta"/>

            <Row>
              <Col md={3}></Col>
              <Col md={6} className="text-center">
                <span className="results-number-circle active">1</span>
                <span className="results-number-circle ">2</span>
                <span className="results-number-circle ">3</span>
                <span className="results-number-circle ">...</span>
                <span className="results-number-circle ">21</span>
              </Col>
              <Col md={3} className="text-end">
                <span className="results-next-button">Next <Image src={arrowLogo} className="results-next-logo" /></span>
              </Col>
            </Row>

          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>

      <Container className="info-container" fluid>
      <Container className="container-child">
        <Row className="feature-icon-container">
          <Col md={4} className="text-center">
            <Image src={searchLogo} className="feature-icon" />
          </Col>
          <Col md={4} className="text-center">
            <Image src={selectLogo} className="feature-icon" />
          </Col>
          <Col md={4} className="text-center">
            <Image src={standoutLogo} className="feature-icon" />
          </Col>
        </Row>
        <Row className="feature-heading-container">
          <Col md={4} className="text-center feature-heading">Search</Col>
          <Col md={4} className="text-center feature-heading">Select</Col>
          <Col md={4} className="text-center feature-heading">Stand out</Col>
        </Row>
        <Row className="feature-description-container">
          <Col md={4} className="text-center feature-description">Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</Col>
          <Col md={4} className="text-center feature-description">Choose from thousands of options generated by the slogan maker that fit your needs.</Col>
          <Col md={4} className="text-center feature-description">Congrats on your new slogan. It's time to win the world!</Col>
        </Row>
        </Container>
      </Container>

      <Container className="other-tools-container">
        <Row>
          <Col md={12} className="other-tools-heading">Try our other free products</Col>
        </Row>
        <Row className="other-tools-row">
          <Col md={4}>
            <Image src={privacyPolicyGeneratorLogo} className="other-tools-logo" />
            <p className="other-tools-name">Privacy Policy Generator</p>
            <p className="other-tools-description">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
          </Col>
          <Col md={4}>
            <Image src={tAndCGeneratorLogo} className="other-tools-logo" />
            <p className="other-tools-name">Terms & Conditions Generator</p>
            <p className="other-tools-description">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p></Col>
          <Col md={4}>
            <Image src={domainNameGeneratorLogo} className="other-tools-logo" />
            <p className="other-tools-name">Domain Name Generator</p>
            <p className="other-tools-description">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p></Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image src={invoiceGeneratorLogo} className="other-tools-logo" />
            <p className="other-tools-name">Invoice Generator</p>
            <p className="other-tools-description">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p></Col>
        </Row>
      </Container>

      <Container className="footer-container" fluid>
        <Container className="container-child">
        <Row>
          <Col>
            <Row className="footer-content-container">
              <Col md={4}>
                <Image src={dukaanLogo} className="dukaan-logo" />
              </Col>
              <Col>
                <p className="footer-link">Contact</p>
                <p className="footer-link">FAQ's</p>
              </Col>
              <Col>
                <p className="footer-link">Tutorials</p>
                <p className="footer-link">Blog</p>
              </Col>
              <Col >
                <p className="footer-link">Privacy</p>
                <p className="footer-link">Banned Items</p>
              </Col>
              <Col md>
                <p className="footer-link">About</p>
                <span className="footer-link">Jobs &nbsp;</span>
                <span className="jobs-number-circle">3</span>
              </Col>
              <Col className="flag-class">
                <p className="footer-link">Facebook</p>
                <p className="footer-link">Twitter</p>
                <p className="footer-link">Linkedin</p>
              </Col>
            </Row>

            <hr/>

            <Row>
              <Col md={6}>
              <span className="footer-text">
                Dukaan 2020, All rights reserved.
                </span>
              </Col>
              <Col>
              </Col>
              <Col className="flag-class">
                <span className="footer-text">Made &nbsp;in &nbsp; <Image src={indiaFlag} className="india-flag" /></span>
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>
    </body>
  );
  }
  
}


export default App;

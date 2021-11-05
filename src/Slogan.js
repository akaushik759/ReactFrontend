import React, {Component, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form, Image, InputGroup } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip';

function Slogan(props){
  const [copy, setCopy] = useState(false);

  const copySlogan = ()=>{
    setCopy(true);
  }

  return(
      <Col md={6} onClick={()=>{
          copySlogan();
        }}>
        <Button className="slogan-button shadow-none" data-tip data-for={props.uid} >{props.text}</Button>
        <ReactTooltip id={props.uid} place={props.uid % 2 === 0 ? "right" : "left" } effect="solid" arrowColor="transparent" className="tooltip">
                  {copy ? "Copied!":"Click to copy"}
        </ReactTooltip>
      </Col>
    );
}

export default Slogan;
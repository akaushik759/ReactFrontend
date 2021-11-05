import React, {Component, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form, Image, InputGroup } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip';

function Searchbar(props){
  const [value, setValue] = useState("");

  const inputValue = (val)=>{
    setValue(val);
  }

  const resetValue = ()=>{
    setValue("");
  }

  return(
      <InputGroup className="tool-word-input-group">
        <Form.Control type="text" placeholder="Enter a word" className="tool-word-input" value={value} onChange={(e)=>{inputValue(e.target.value);}}/>
        {value !== "" ? <span className="close-icon" onClick={()=>{resetValue();}}></span>: ""}
      </InputGroup>
    );
}

export default Searchbar;
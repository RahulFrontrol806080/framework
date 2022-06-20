import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

interface ButtonInterFace{
    name:string,
    type?:string,
    callback?:any
}

// Based on type: todo

function ButtonComponent(props:ButtonInterFace) {
    return <Button as="input" value="Click" type="button" onClick={props.callback}/> 
}
  
export default ButtonComponent;

import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';


interface InputInterface{
    type?:string
    value?:any
    label?:any
    onChange?:any
    onBlur?:any
    onFocus?:any
}


// Based on type

function getInputComponent(props:InputInterface){
    switch(props.type){
        case 'dropdown':{
            return (
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                      {dropdownItems(props.value)}
                </Dropdown.Menu>
                </Dropdown>
            )}
        case 'text':{
            return (
                <div>
                    {props.label}  <input type="text" onChange={props.onChange} onBlur={props.onBlur} onFocus={props.onFocus}/>
                </div>
            )
        }    
            default: 
            return null
    }

}

function dropdownItems(values:any){
const dropdownItemsValues=values.map((val:any)=>{return <Dropdown.Item href="#/action-1">{val}</Dropdown.Item>}) 
    return   dropdownItemsValues;
}
function InputComponent(props:InputInterface) {
    // How the forms should look like
    return getInputComponent(props);
}
  
export default InputComponent;
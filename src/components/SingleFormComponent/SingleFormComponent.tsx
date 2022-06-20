import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import InputComponent from '../InputComponent/InputComponent';


function SingleFormComponent(props:any) {
  const values=["india","us"];
  // How the forms should look like

  // Default Component

  // Basic Form Comoponent

  // Advanced Form Component

  // Dropdown Based creation Component

  // rendering will be based on Config
 
  return (
    <div className="App">
        Single Form Component
        <InputComponent  type="text" label="First"/><br/>
        <InputComponent  type="text" label="Last"/><br/>
        <InputComponent  type="text" label="Age"/><br/>
        <InputComponent  type="text" label="Number"/><br/>
        <InputComponent type='drowdown' value={values}/>
    </div>
  );
}

export default SingleFormComponent;

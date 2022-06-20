
import '@grapecity/wijmo.styles/wijmo.css';

//
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { format, SortDescription } from "@grapecity/wijmo";
import { useBaseQuery } from "../../services/baseApi";

function GridComponent(props){
   
    const headers=["id","name"];
    
        return (<div className="container-fluid">
			<FlexGrid  itemsSource={props.source}>
                {
                    headers.map((input)=>{
                        return   <FlexGridColumn header={input.toUpperCase()} binding={input} width="2*"/>
                    })
                }
                
            </FlexGrid>
        </div>)
    }

   

export default GridComponent;
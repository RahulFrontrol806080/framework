import React, { useState } from 'react';
import './App.css';
import { useBaseQuery,useDroppdownQuery,useProjetctdetailQuery } from './services/baseApi';
import GridComponent from './components/GridComponent/GridComponent';


function App1() {
 
  const { data:data1, error:error1, isLoading:isLoading1, isFetching:isFetching1,isSuccess:isSuccess1 } = useDroppdownQuery(null);
  const { data:data2, error:error2, isLoading:isLoading2, isFetching:isFetching2,isSuccess:isSuccess2 } = useProjetctdetailQuery(null);
  
  return (
    <div className="App">
    </div>
  );
}

function App(){
  const { data, error, isLoading, isFetching,isSuccess } = useBaseQuery(null);
  const [show,setShow]=useState(false)
  const showData=()=>{
    setShow(!show)
  }
  return(
  <div>
  <button onClick={showData}>getData</button>
  {show &&   <GridComponent source={data}/>}
  </div>
  )
}


export default App;
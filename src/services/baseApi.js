import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const store=[
    {
       
           "selector":"base",
           "url":"/projectlist",
           "type":"get"
       
    },
    {
       
           "selector":"projetctdetail",
           "url":"/projectdetail",
           "type":"get"
       
    },
    {
       
           "selector":"droppdown",
           "url":"/dropdown",
           "type":"get"
       
    }
]
const queryBuilder=(builder,store)=>createBaseConfigJson(builder,store);

const createBaseConfigJson=(builder,config)=>{
   let  returnedObject={}
   for(let i= 0;i<config.length;i++){
      returnedObject[config[i].selector]=builder.query({
        query: () =>config[i].url
    })
   }
   return returnedObject    
 }

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:6069" }),
    endpoints:(builder) => queryBuilder(builder,store)
})
 
export const { useBaseQuery,useProjetctdetailQuery,useDroppdownQuery } = baseApi;


import { useEffect, useState } from "react";

export default function Activity():JSX.Element{
    const [url,setUrl]= useState('');

   const serviceUrl:string=' https://www.boredapi.com/api/activity';
   
    async function getInfo() {
    const res =  await fetch(serviceUrl);
    const obj = await res.json();
    const {activity} = obj;
    setUrl(activity);

    }
    useEffect(()=>{getInfo()},[]);
    
    return(
        <>
        <h5>Homework 23</h5>
         <p>{url}</p>
        </>
    )
}
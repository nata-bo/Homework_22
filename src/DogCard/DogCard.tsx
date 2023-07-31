import { useEffect, useState } from "react";

export default function DogCard():JSX.Element{

   const [url,setUrl]= useState('');

   const serviceUrl:string='https://dog.ceo/api/breeds/image/random';

   // https://www.boredapi.com/api/activity

   function setImageUrl():void{
    fetch(serviceUrl)
    .then((res:Response)=>res.json())
    .then((resultObj)=>{
        const message = resultObj.message;
        setUrl(message);
    });
    
   }
   //setImageUrl(); зацыкленно вызывается
   useEffect(()=>{setImageUrl()}, []);

    return(
        <>
        <img src={url} alt="Dog" />
        </>
    )
}
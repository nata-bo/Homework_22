

type Props ={id:number; petName:string; additionalInfo:string; displayInfo:boolean};

export default function PetRecord(p:Props):JSX.Element{
    const{id,petName,additionalInfo,displayInfo} = p;

     let moreInfo:string;
     if(displayInfo===true){
        moreInfo=id +", "+ additionalInfo;
     }else{
        moreInfo="";
     }

 return(
    <>
       <h1>{petName}</h1>
       <p>{moreInfo}</p>
    </>
 )



}
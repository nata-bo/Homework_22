import styles from './PetRecord.module.css'
  interface Pet {
   id:number; 
   petName:string; 
   additionalInfo:string; 
   displayInfo:boolean;
   color?:string;
};

export default function PetRecord(props:Pet):JSX.Element{
    const{id,petName,additionalInfo,displayInfo,color} = props;

     let moreInfo:string;
     if(displayInfo===true){
        moreInfo= additionalInfo;
     }else{
        moreInfo="";
     }

 return(
    <div className={styles.container}>
       <h1 style={{backgroundColor:color,fontSize:'30px'}}>{id}. {petName}</h1>
       <p>{moreInfo}</p>
       {/* <p>{(displayInfo)?additionalInfo:""}</p> тернарный опер. */}
        {/* <p>{displayInfo && additionalInfo}</p>  Еще вариант*/}
    </div>
 )



}
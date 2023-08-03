import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import DogCard from "../DogCard/DogCard";
import Pets from "../Pets/Pets";
import Activity from "../Activity/Activity";
import Activity2 from "../Activity2/Activity2";



export default function MyApp():JSX.Element{

    return(
        <Routes>
            <Route path="/" element = {<Layout />} >
                <Route path="pets" element ={<Pets />} />
                <Route path="dogCard" element ={<DogCard />} />
                <Route path="activity" element ={<Activity />} />
                <Route path="activity2" element ={<Activity2 />} />
            </Route>
        </Routes>
    )
}
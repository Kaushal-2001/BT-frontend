import React from "react";
import BrainTumor from "./BrainTumor";
import Alzheimers from "./Alzheimers";
import { Link } from "react-router-dom";
import Card from "./Card";

const Body = () => {
    return (

        /*<div className="">
            <div className="flex justify-between shadow-md p-4 w-full% h-96">
                <h1 className="text-2xl h-9 underline">Brain tumor</h1>
                    <button className=" flex underline text-lg h-7 w-11 rounded-md self-end text-center pl-2"><Link to="/BrainTumor" >Go</Link></button>
                
            </div>
            <div className="flex justify-between shadow-md p-4 w-full% h-96">
                <h1 className="text-2xl h-9 underline">Alzheimers</h1>
                    <button className=" flex underline text-lg h-7 w-11 rounded-md self-end text-center pl-2"><Link to="/Alzheimers" >Go</Link></button>
                
            </div>
        </div>*/
        <div className="d-flex justify-content-center">
            <Card Title="Brain Tumor" Description="This is the place to check your brain MRI and predict Brain Tumor" link="BrainTumor"/> 
            
            <Card Title="Alzheimers" Description="This is the place to check your brain MRI and predict Brain Tumor" link="Alzheimers"/> 
         
        </div>


    );
};


export default Body;
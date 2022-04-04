import React from "react";
import Main from "../src/components/Main"
import Navbar from "../src/components/Navbar"

export default function Render(){
    return (
        <div className="app-container">
            <Navbar />
            <Main />
        </div>
    )
}
import "./form.css"
import { useState } from "react";
import Appbutton from "../../../shared/button.control";
import AppInput from "../../../shared/input.control";
import React from 'react';


export default function CreateForm({
    onCreate,           
    note = {title:""},
}){
    const [state, setState] = useState(note);

    function setProperty(e){
        const newState = {...state}        
        newState.title = e.target.value;
        setState(newState);
        return newState        
    }  
    function clear() {              
        const Note = {...state};
        setState({
            ...state,           
            ...note,
             title : '',
        })
        return Note;
    }     
    return (        
        <div className="create_form">
            <AppInput    
                name={"title"}
                className={"create_title"}
                placeholder={"what I shouldn't forget"}  
                value={state.title} 
                onChange={(e) => setProperty(e)}                         
            ></AppInput>
            <Appbutton 
                className={"create_btn"}
                onClick={() => {
                    onCreate(state)              
                    clear()
                }}>+
            </Appbutton>
        </div>        
    );
}


   

 
   
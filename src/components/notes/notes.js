import "./notes.css"
import { useState, useEffect } from "react";
import CreateForm from "./create_form/form";
import NotesList from "./notes-list/list";
import React from 'react';
import api from "../../shared/utilities/api";


export default function NotesComponent() {
    const initialState = {
        notes:[], 
        noteEmpty: {
            title: 'there is no note',   
        },   
        newNote: null,         
        remoteNote: null, 
    }
    const [state, setState] = useState(initialState)
    
    useEffect(() => {        
        api.get().then((r) => setState({notes: r.data}))  
    }, []);    
    useEffect(() => {
        if(state.newNote) {  
        api.post('',state.newNote).then((r) => 
             setState({
                 ...state, 
                 notes: [...state.notes,r.data],                   
                 newNote: null,
             }))
        }    
    }, [state.newNote]);   
    useEffect(() => {
        if(state.remoteNote) {  
        api.delete('' + state.remoteNote).then(() => 
             setState({
                 ...state, 
                 notes: [...state.notes]
                 .filter(n => n.id !== state.remoteNote), 
                 remoteNote: null,
             }))
        }    
    });  
    const onNewNoteCreate = (note) => {         
        note.title = note.title ? note.title : initialState.noteEmpty.title;
        note.id = Date.now();
        setState({...state, newNote: note})                    
    }
                
    const onNoteDelete = (id) => {         
        setState({
            ...state,
            remoteNote: id,            
        })
    }
    const onNoteEdite = (value, id) => {    
        const newNote = {id, title:value};
        api.put(''+ id, newNote).then((r) => 
        setState({
            ...state,
            notes: [...state.notes
                .map(note => note.id === id ? r.data : note
                   
                 
                   
                   
                   
               
            )
        ]})         
        
             
    )
      
                
        
        
        
        
        
        
        
        
        
        
    }  
      
    return (
        <div className="notes_container">
            <CreateForm 
                onCreate={onNewNoteCreate}>                
            </CreateForm>
            <NotesList 
                notes = {state.notes}                                
                onNoteEdite = {onNoteEdite}
                onNoteDelete={onNoteDelete}>
            </NotesList>
        </div>
    )
} 


import "./list.css"
import Note from "../note/note"
import React from 'react';


export default function NotesList({notes, onNoteEdite, onNoteDelete}){    
    return (
        <>
            <div className="notes_list">
            {notes.map((note) => (
                <Note                    
                    onNoteEdite = {(value) => onNoteEdite(value, note.id)}   
                    onNoteDelete = {() => onNoteDelete(note.id)} 
                    key = {note.id} 
                    note = {note}                                  
                    ></Note>
            ))}                
            </div>
        </>
    );
}












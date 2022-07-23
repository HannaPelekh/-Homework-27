import "./note.css";
import AppInput from "../../../shared/input.control";
import { useState } from "react";
import React from "react";
import Appbutton from "../../../shared/button.control";
import api from "../../../shared/utilities/api";

export default function Note({ onNoteEdite, onNoteDelete, note }) {
  const initialState = {
    note,
    isEditMode: false,
    noteEmpty: {
        title: 'there is no note',
    },
  };
  const [state, setState] = useState(initialState);   
  function renderNoteContent(note) {
    return state.isEditMode ? (<div className="title">
        <AppInput
          name={"note_input"}
          className={"note_input"}
          placeholder={""}          
          value={state.note.title === state.noteEmpty.title ? '' : state.note.title }
          onChange={(e) => {
            setState({
              ...state,
              note: { ...state.note, title: e.target.value },
            });
          }}
          onBlur={(e) => {
            onAddText(e);
          }}
        ></AppInput>
      </div>
    ) : (
      <div className="title" onClick={onActivateEdite}>
        {note.title}
      </div>
    );
  }

  function onActivateEdite() {
    const newState = { ...state, isEditMode: true};
    setState(newState);
  }
  function onAddText(e) {
    onNoteEdite(state.note.title);
    setState({...state, isEditMode: false})
  }
  return (
    <>
      <div className="note_items">
        <Appbutton className={"delete_btn"} onClick={onNoteDelete}>
          +
        </Appbutton>
        {renderNoteContent(note)}
      </div>
    </>
  );
}

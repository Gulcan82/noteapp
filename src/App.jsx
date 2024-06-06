import React, { useState } from 'react';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddNote = () => {
        if (editMode) {
            const updatedNotes = notes.map((note, index) =>
                index === editIndex ? noteText : note
            );
            setNotes(updatedNotes);
            setEditMode(false);
            setEditIndex(null);
        } else {
            setNotes([...notes, noteText]);
        }
        setNoteText('');
    };

    const handleEditNote = (index) => {
        setEditMode(true);
        setEditIndex(index);
        setNoteText(notes[index]);
    };

    const handleDeleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>NoteApp</h1>
            <div className="note-form">
                <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Enter your note..."
                />
                <button onClick={handleAddNote}>
                    {editMode ? 'Update Note' : 'Add Note'}
                </button>
            </div>
            <div className="notes-list">
                {notes.map((note, index) => (
                    <div className="note" key={index}>
                        <div className="note-content">{note}</div>
                        <div className="note-actions">
                            <button onClick={() => handleEditNote(index)}>Edit</button>
                            <button onClick={() => handleDeleteNote(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

import React, { useEffect, useState } from 'react'
import Editor from './Editor'
import Note from './Note'
import { deleteNote, getNotes } from './../api/services'

type Props = {}

type NoteType = {
    id: number,
    title: string,
    description: string,
    updated_at: string,
    created_at: string,
}

const Notes = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [noteId, setNoteId] = useState<number>(0);
    const [notes, setNotes] = useState<NoteType[]>();

    const closeEditor = () => {
        setIsOpen(false);
        setNoteId(0);
        location.reload();

    }


    const openEditor = (id: number) => {
        setIsOpen(true);
        setNoteId(id);
    }

    const noteDelete = (id: number) => {
        deleteNote(id).then(
            result => {
                console.log(result);
                getNotes().then(
                    result => setNotes(result)
                )
            }
        )
    }

    useEffect(() => {
        getNotes().then(
            result => {
                setNotes(result)
            }
        )

        console.log(notes);
        
    }, [])


    return (
        <>
            <div className='py-2 px-4 flex flex-col gap-4'>
                {
                    notes ?
                    notes.map((note : NoteType) => (
                        <Note note={note} key={note.id} openEditor={openEditor} noteDelete={noteDelete} />
                    )) :
                    null
                }
                <div className='w-full flex items-center justify-center'>
                    <button className='w-full bg-blue-400 p-2 rounded-md text-white font-bold text-lg shadow-md'>Create Note</button>
                </div>
            </div>
            {
                isOpen && (
                    <Editor noteId={noteId} closeEditor={closeEditor} />
                )
            }
        </>
    )
}

export default Notes
import React, { useEffect, useState } from 'react'
import Editor from './Editor'
import Note from './Note'
import { createNote, deleteNote, getNotes } from './../api/services'

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
        document.body.style.overflow = "auto"

    }


    const openEditor = (id: number) => {
        window.scrollTo({
            top: 0
        })
        document.body.style.overflow = "hidden"
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

    const noteCreate = () => {
        let noteNumber: number = Number(notes?.length) + 1
        const title = "Note " + noteNumber
        createNote(title).then(
            result => {
                console.log(result);
                openEditor(result.id)
            }
        )
    }

    useEffect(() => {
        getNotes().then(
            result => {
                setNotes(result);
            }
        )

        console.log(notes);

    }, [isOpen])


    return (
        <>
            <div className='py-2 px-4 flex flex-col gap-4'>
                {
                    notes?.length != 0 ?
                        notes?.map((note: NoteType) => (
                            <Note note={note} key={note.id} openEditor={openEditor} noteDelete={noteDelete} />
                        )) :
                        <div className='bg-white shadow-lg flex flex-col gap-5 rounded-md w-full items-center justify-center p-10'>
                            <p className='text-8xl'>📝</p>
                            <h2 className='text-gray-500'>Create Notes</h2>
                        </div>
                }
                <div className='w-full flex items-center justify-center'>
                    <button className='w-full bg-blue-400 p-2 rounded-md text-white font-bold text-lg shadow-md' onClick={noteCreate}>Create Note</button>
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
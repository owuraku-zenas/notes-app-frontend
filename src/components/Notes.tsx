import React, { useEffect, useState } from 'react'
import Note from './Note'
import { getNotes } from './../api/services'

type Props = {}

type NoteType = {
    id: number,
    title: string,
    description: string,
    updated_at: string,
    created_at: string,
}

const Notes = (props: Props) => {
    const [noteId, setNoteId] = useState<number>();
    const [notes, setNotes] = useState<NoteType[]>();

    useEffect(() => {
        const response = getNotes().then(
            result => {
                setNotes(result)
            }
        )

        console.log(notes);
        
    }, [])


    return (
        <>
            <div className='py-2 px-4 flex flex-col gap-4'>
                {/* <Note /> */}
                {        
                    notes ?
                    notes.map((note : NoteType) => (
                        <Note note={note} key={note.id} />
                    )) :
                    null
                }
                <div className='w-full flex items-center justify-center'>
                    <button className='w-full bg-blue-400 p-2 rounded-md text-white font-bold text-lg shadow-md'>Create Note</button>
                </div>
            </div>

        </>
    )
}

export default Notes
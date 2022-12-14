import React from 'react'
import { deleteNote } from '../api/services'

    type NoteType = {
    id: number,
    title: string,
    description: string,
    updated_at: string,
    created_at: string,
}


type Props = {
    note: NoteType,
    openEditor: Function,
    noteDelete: Function
}

const Note = (props: Props) => {
  return (
    <div className='bg-white shadow-lg flex flex-col gap-2 rounded-md'>
                <div className='w-full px-4 py-3 flex items-center justify-between rounded-t-md bg-blue-200'>
                    <h2 className='text-2xl text-gray-800 font-semibold'>{props.note.title}</h2>
                </div>
                <p className='p-2'> {props.note.description}</p>
                <div className='w-full flex flex-col items-end p-2 text-gray-400 font-medium'>
                    {/* FIXME: Better date conversion */}
                    <p>
                        Created: {props.note.created_at}
                    </p>
                    <p>
                        Editted: {props.note.updated_at}
                    </p>
                </div>
                <div className='px-2 pb-2 flex flex-col gap-2 justify-between md:flex-row'>
                    <button className='px-6 py-2 bg-blue-400 rounded-sm text-gray-50 font-semibold' onClick={() => props.openEditor(props.note.id)} >Edit</button>
                    <button className='px-6 py-2 bg-red-500 rounded-sm text-gray-50 font-semibold' onClick={() => {props.noteDelete(props.note.id)}} >Delete</button>
                </div>
            </div>
  )
}

export default Note
import React from 'react'
import Note from './Note'

type Props = {}

const Notes = (props: Props) => {
    return (
        <div className='py-2 px-4 flex flex-col gap-4'>
            <Note />
            <div className='w-full flex items-center justify-center'>
                <button className='w-full bg-blue-400 p-2 rounded-md text-white font-bold text-lg shadow-md'>Create Note</button>
            </div>
        </div>
    )
}

export default Notes
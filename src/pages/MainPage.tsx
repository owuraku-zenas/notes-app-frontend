import React from 'react'
import Notes from '../components/Notes'

type Props = {}

const MainPage = (props: Props) => {
    return (
        <div className='w-full'>
            <div className='min-h-[calc(100vh-56px)] m-auto max-w-[1240px]'>
                <Notes />
            </div>
        </div>
    )
}

export default MainPage
import React from 'react'

type Props = {}

const Editor = (props: Props) => {
    return (
        <div className='absolute flex items-center justify-center top-0 right-0 h-screen w-screen bg-black/60 md:p-4'>
            <div className='bg-white w-full max-w-[1000px] h-full md:h-[600px]  md:rounded-md'>
                <header className=' px-4 py-1 flex items-center justify-between bg-blue-200 md:rounded-t-md'>
                    <h2 className='text-xl font-semibold'>Editor</h2>
                    <span className='flex justify-center items-center p-2 font-semibold text-2xl text-red-600'>
                        x
                    </span>
                </header>
                <form className='py-4 px-2 w-full h-[calc(100%-60px)] flex flex-col items-center gap-4'>
                    <input
                        required
                        className='border-2 w-full text-lg p-3 rounded-lg'
                        type="text"
                        placeholder='Title'
                    />
                    <textarea className='border-2 w-full text-md p-3 rounded-lg md:h-[400px] h-[600px]' placeholder='Take Notes...'>
                    </textarea>
                {/* <p className='px-2 text-gray-500 font-bold'>Saving . . .</p> */}
                <p className='px-4 text-gray-500 font-bold'>Saved</p>
                </form>
            </div>
        </div>
    )
}

export default Editor
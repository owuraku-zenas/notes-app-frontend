import React, { useEffect, useState } from 'react'
import { getNote, updateNote } from '../api/services'
import useDebounce from '../hooks/useDebounce'

type Props = {
    noteId: number,
    closeEditor: Function
}

type NoteType = {
    id: number,
    title: string,
    description: string,
    updated_at: string,
    created_at: string,
}

const Editor = (props: Props) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string | undefined>();
    const [response, setResponse] = useState<string | null>();
    const [isSaving, setIsSaving] = useState<boolean>(false)

    const debouncedTitle = useDebounce(title, 1000);
    const debouncedDescription = useDebounce(description, 1000)

    useEffect(() => {
        getNote(props.noteId).then(
            result => {
                if (result.description === null) {
                    setDescription(undefined)
                } else {
                    setDescription(result.description);
                }
                setTitle(result.title);
            }
        )

    }, [])

    useEffect(() => {
        if (title === "") {
            return () => {
                setResponse("Title can not be empty")
            }
        }
        setResponse("Saving...")
        setIsSaving(true)
        updateNote(props.noteId, debouncedTitle, debouncedDescription).then(
            result => {
                if (result?.status === 400) {
                    setResponse("Title already exists")
                } else
                    setResponse("Saved")
                setIsSaving(false)
            }
        )


    }, [debouncedTitle, debouncedDescription])

    return (
        <div className='absolute flex items-center justify-center top-0 right-0 h-screen w-screen bg-black/60 md:p-4'>
            <div className='bg-white w-full max-w-[1000px] h-full md:h-[600px]  md:rounded-md'>
                <header className=' px-4 py-1 flex items-center justify-between bg-blue-200 md:rounded-t-md'>
                    <h2 className='text-xl font-semibold'>Editor</h2>
                    <button className='cursor-pointer flex justify-center items-center p-2 font-semibold text-2xl text-red-600' disabled={isSaving} onClick={() => props.closeEditor()}>
                        x
                    </button>
                </header>
                <div className='py-4 px-2 w-full h-[calc(100%-60px)] flex flex-col items-center gap-4'>
                    <input
                        required
                        className='border-2 w-full text-lg p-3 rounded-lg'
                        type="text"
                        placeholder='Note Title'
                        value={title}
                        onChange={(event) => setTitle(event.target.value.trimStart())}
                    />
                    <textarea className='border-2 w-full text-md p-3 rounded-lg md:h-[400px] h-[600px]' value={description} placeholder='Important Notes' onChange={(event) => setDescription(event.target.value)} />
                    {/* <p className='px-2 text-gray-500 font-bold'>Saving . . .</p> */}
                    <p className='px-4 text-gray-500 font-bold'>{response}</p>
                </div>
            </div>
        </div>
    )
}

export default Editor
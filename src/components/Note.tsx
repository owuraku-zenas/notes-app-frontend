import React from 'react'

type Props = {}

const Note = (props: Props) => {
  return (
    <div className='bg-white shadow-lg flex flex-col gap-2 rounded-md'>
                <div className='w-full px-4 py-3 flex items-center justify-between rounded-t-md bg-blue-200'>
                    <h2 className='text-2xl text-gray-800 font-semibold'>Title</h2>
                </div>
                <p className='p-2'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, blanditiis vitae modi praesentium sed voluptatibus vel molestias qui suscipit fugiat corrupti. Similique culpa explicabo reprehenderit quod dignissimos, tempore expedita eum.
                    Cum corrupti laudantium fugit vel sunt ullam quia eligendi aperiam quas delectus aut enim velit temporibus, alias hic doloribus ipsum mollitia eos quo quos commodi nemo officiis explicabo possimus! Sint.
                    Aliquam labore eum laudantium expedita aliquid, vitae, cum corrupti ea inventore quae praesentium dicta? Facilis voluptatum ut saepe assumenda! Culpa dolores quod, amet sed molestiae fugit aut natus consequatur distinctio? </p>
                <div className='w-full flex justify-between p-2'>
                    <p>
                        Created: 22/12/1999
                    </p>
                    <p>
                        Editted: 22/12/1999
                    </p>
                </div>
                <div className='px-2 pb-2 flex justify-between'>
                    <button className='px-6 py-2 bg-blue-400 rounded-sm text-gray-50 font-semibold'>Edit</button>
                    <button className='px-6 py-2 bg-red-500 rounded-sm text-gray-50 font-semibold'>Delete</button>
                </div>
            </div>
  )
}

export default Note
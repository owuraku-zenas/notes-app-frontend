import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='bg-blue-400 h-14 border-b shadow-lg'>
        <div className='text-white flex flex-row justify-between max-w-[1240px] m-auto h-full p-1'>
          <div className='flex items-center justify-center w-full font-bold text-3xl'>
            NOTES
          </div>
        </div>
      </header>
    )
}

export default Header
import React, { useEffect, useState } from 'react'

type Props = {
    value: any,
    delay: number
}

const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    
      return () => {
        clearTimeout(handler);
      }
    }, [value, delay])
    
    return debouncedValue
}

export default useDebounce
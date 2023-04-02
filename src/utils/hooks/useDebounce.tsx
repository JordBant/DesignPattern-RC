import {useState, useEffect} from 'react'

export const useDebounce = (inputValue: string) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(inputValue)

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(inputValue), 2500)
        return () => clearTimeout(handler)
    }, [inputValue])        

    return debouncedValue
}

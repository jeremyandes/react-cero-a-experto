import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
        console.log('Message Mounted')

        return () => {
            console.log('Message Unmounted');
        }
    }, [])


    return (
        <>
            <h3 className="mt-5 text-center">Usuario ya existe</h3>
        </>
    )
}
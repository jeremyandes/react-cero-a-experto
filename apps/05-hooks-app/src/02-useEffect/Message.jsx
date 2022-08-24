import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            console.log({ x, y });
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            // Siempre hay que limpiar los listeners/observables para evitar fugas de memoria
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])


    return (
        <>
            <h3 className="mt-5 text-center">Usuario ya existe</h3>
            <p className="text-center">Coords:
                <span className="pl-3">{JSON.stringify(coords)}</span>
            </p>
        </>
    )
}
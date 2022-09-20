import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

    // const user = {
    //     hola: 'Mundo',
    //     user: {
    //         id: 123,
    //         name: 'Jeremy Andes',
    //         email: 'jeremy@andes.com'
    //     }
    // }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

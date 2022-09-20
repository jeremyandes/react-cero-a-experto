import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
    const user = {
        id: 123,
        name: 'Jeremy Andes',
        email: 'jeremy@andes.com'
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

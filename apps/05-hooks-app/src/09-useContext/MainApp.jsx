import { NavBar } from './components';
import { AboutPage, HomePage, LoginPage } from './pages';
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/user/UserProvider';

export const MainApp = () => {
    return (
        <UserProvider>
            <section className="container">
                <h1>MainApp</h1>
                <NavBar />
                <hr />


                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='about' element={<AboutPage />} />

                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </section>
        </UserProvider>
    )
}
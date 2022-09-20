import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components';
import { AboutPage, HomePage, LoginPage } from './pages';

export const MainApp = () => {
    return (
        <section className="container">
            <h1>MainApp</h1>
            <NavBar />
            <hr />


            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/about' element={<AboutPage />} />

                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </section>
    )
}
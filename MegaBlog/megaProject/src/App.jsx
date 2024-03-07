import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Correct import statement
import authService from './appWrite/auth';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components/index';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch(); // Corrected useDispatch() function

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [dispatch]); // Added dispatch to the dependency array to prevent warning

    return !loading ? (
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
            <div className="w-full block">
                <Header />
                <main>
                    {/* <h1>Hello</h1> */}
                    {/* TODO:<Outlet /> */}
                    {/* Assuming you have routing logic here */}
                </main>
                <Footer />
            </div>
        </div>
    ) : null;
}

export default App;

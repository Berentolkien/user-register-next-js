'use client';

import React from "react";
import RegisterCard from '../components/RegisterCard';
import NavBar from '../components/NavBar';

function RegisterPage() {
    const bodyGradientStartColor = 'gray-900';
    const bodyGradientEndColor = 'gray-600';
    const shadowColor = 'white';

    return (
        <main>
            <NavBar />
            <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-600'>
                <h1 className='text-4xl font-bold mb-4 text-white'></h1>
                <p className='text-lg text-gray-300'>Recupera tu contraseña aqui:</p><br></br>
                <RegisterCard 
                    gradientStartColor={bodyGradientStartColor} 
                    gradientEndColor={bodyGradientEndColor}
                    shadowColor={shadowColor}
                />
            </div>
        </main>
    );
}

export default RegisterPage;


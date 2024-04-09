import React from 'react';
import LoginCard from '../components/LoginCard';
import NavBar from '../components/NavBar';

function RegisterPage() {
    const bodyGradientStartColor: string = 'gray-900';
    const bodyGradientEndColor: string = 'gray-600';
    const shadowColor: string = 'white';

    return (
        <main>
            <NavBar />
            <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-600'>
                <h1 className='text-4xl font-bold mb-4 text-white'>Log in</h1>
                <p className='text-lg text-gray-300'>Recupera tu contraseña aquí:</p><br />
                <LoginCard
                    gradientStartColor={bodyGradientStartColor} 
                    gradientEndColor={bodyGradientEndColor}
                    shadowColor= {shadowColor}
                />
            </div>
        </main>
    );
}

export default RegisterPage;

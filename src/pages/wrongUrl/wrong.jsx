import React from 'react';
import ParticlesComponentDark from '../Layout/components/particlesdark';

export const Wrong = () => {
    return (
        <>
            <div className="h-[100vh] absolute w-[100%] flex items-center justify-center text-white z-10 text-[50px] font-[briem-bold] ">
                <h1>You've Lost the road , go back home</h1>
            </div>
            <ParticlesComponentDark />
        </>
    );
};


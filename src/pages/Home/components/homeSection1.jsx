import './section1.sass'

import { Header } from '../../../layouts/Header';
import { useContext } from 'react';
import { MyContext } from '../../../utils/ContextProvider';
import ParticlesComponentDark from './particlesdark';
import ParticlesComponentlight from './particleslight';
export const Home = () => {
    const [dark , toggleBoolean] = useContext(MyContext)
    return (
        <>
            <div className="App">
                {dark? <ParticlesComponentDark id="particles" className="transition duration-1000 ease-in-out" /> : <ParticlesComponentlight id="particles" className="transition duration-1000 ease-in-out" />}
                
                <div className="w-[100%] h-[100vh] ">
                    <Header/>
                    {/* <span className='w-[100%] bg-red-600 h-[20vh] flex items-center justify-center font-mono '>
                        <h1 className='text-white text-[60px]'>Yahya's Portfolio</h1>
                    </span> */}
                </div>
            </div>
        </>
    );
}

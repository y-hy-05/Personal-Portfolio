import './section1.sass'
import ParticleesComponent from "./particles"
import { Header } from '../../../layouts/Header';
export const Home = () => {
    return (
        <>
            <div className="App">
                <ParticleesComponent id="particles" />
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

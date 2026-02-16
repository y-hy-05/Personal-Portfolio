
import { useContext } from 'react';
import { MyContext } from '../../utils/ContextProvider';
import ParticlesComponentDark from './components/particlesdark';
import ParticlesComponentlight from './components/particleslight';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../layouts/Header';
export const Layout = () => {
    const [dark , toggleBoolean] = useContext(MyContext)
    return (
        <>
            <div className="App">
                <Header/>
                {dark?  <ParticlesComponentlight id="particles"  />:<ParticlesComponentDark id="particles" className="transition duration-1000 ease-in-out" /> }
            </div>
        </>
    );
}

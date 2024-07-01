
import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './utils/ContextProvider';
import { About } from './pages/About/about';import { Home } from './pages/Home/home';
import Skills from './pages/skills/skills';
import { Contact } from './pages/contact/contact';
import { OnePage, Test } from './pages/OnePage/onePage';
import { Wrong } from './pages/wrongUrl/wrong';
function App() {
  return (
    <MyProvider>
      <Routes >
        <Route path='/' element={<OnePage/>} />
        <Route path='*' element={<Wrong/>} />
      </Routes >
    </MyProvider>

  );
}
export default App;

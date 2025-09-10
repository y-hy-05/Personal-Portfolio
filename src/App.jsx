
import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './utils/ContextProvider';
import { OnePage } from './pages/OnePage/onePage';
import { Wrong } from './pages/wrongUrl/wrong';
import { Project } from './pages/Projects/project';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <MyProvider>
      <ScrollToTop />
      <Routes >
        <Route path='/' element={<OnePage/>} />
        <Route path='/project/:id' element={<Project/>} />
        <Route path='*' element={<Wrong/>} />
      </Routes >
    </MyProvider>

  );
}
export default App;

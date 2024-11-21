
import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './utils/ContextProvider';
import { OnePage } from './pages/OnePage/onePage';
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

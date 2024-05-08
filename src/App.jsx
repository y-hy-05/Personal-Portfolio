
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { MyProvider } from './utils/ContextProvider';
function App() {
  return (
    <MyProvider>
      <Routes >
        <Route path='/' element={<HomePage />} />
      </Routes >
    </MyProvider>

  );
}
export default App;

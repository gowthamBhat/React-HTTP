
import './App.css';
import View from './components/view';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <View />
    </div>
  );
}

export default App;

import './App.css';
import {postPlaylist, getPlaylist} from './apiCalls';
import Tester from './components/tester';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex">
      <SideBar />
    </div>
  );
}

export default App;

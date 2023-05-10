import styles from "./styles";
import { Sidebar, BottomRow, Banner } from "./components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => (
  <div className="text-gray-100">
    {/* Sidebar */}
    <div>
        <Sidebar />
    </div>

    {/* Main Content */}
    <main>
      <div className="relative botton-neg-300 ml-80 mt-7" style={{ marginRight: "65px"}}>
        <Banner />
      </div>
    </main>

    {/* Bottom Player (prev, start/pause, next) */}
    <div> 
      <BottomRow />
    </div>
    
  </div>
);

export default App;
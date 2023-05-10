import { Sidebar, BottomRow, FrontBanner, Playlist, Home, AddPlaylist } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <div className="text-gray-100">
    {/* Sidebar */}
    <div>
        <Sidebar />
    </div>

    {/* Main Content */}
    <main>
      <div className="relative botton-neg-300 ml-80 mt-7" style={{ marginRight: "65px"}}>
        <FrontBanner />

        <BrowserRouter>
          <Routes>
            <Route path="/" Component={ Home } />
            <Route path="/playlist" Component={ Playlist } />
            <Route path="/addPlaylist" Component={ AddPlaylist } />
          </Routes>
        </BrowserRouter>
       
      </div>
    </main>

    {/* Bottom Player (prev, start/pause, next) */}
    <div> 
      <BottomRow />
    </div>
    
  </div>
);

export default App;
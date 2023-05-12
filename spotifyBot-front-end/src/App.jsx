import { Sidebar, BottomRow, FrontBanner, Playlist, Home, AddPlaylist, 
  Tester, SidePlayer, MusicPlayer } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <div className="text-gray-100">
    {/* Dynamic Content */}
    <main>
      <div className="relative botton-neg-300 ml-80 mt-7" style={{ marginRight: "65px"}}>
        <FrontBanner />

        <BrowserRouter>
          <Routes>
            <Route path="/" Component={ Home } />
            <Route path="/playlist" Component={ Playlist } />
            <Route path="/addPlaylist" Component={ AddPlaylist } />
            <Route path="/test" Component={ Tester } />
          </Routes>
        </BrowserRouter>
       
      </div>
    </main>

    {/* Base Content */}
    <Sidebar />
    <SidePlayer />
    <MusicPlayer />
    <BottomRow />

    
  </div>
);

export default App;
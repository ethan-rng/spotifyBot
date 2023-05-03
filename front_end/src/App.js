import "./App.css";
import NavBar from "./components/NavBar";
import PlayerBar from "./components/PlayerBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <h1>Welcome to Jankify</h1>
        <PlayerBar />
      </main>
    </div>
  );
}

export default App;

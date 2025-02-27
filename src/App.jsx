import SearchBar from "./SearchBar";
import "./styles/App.css";
import sounds from "../public/sounds.json"
import Button from "./components/Button";

function App() {

  return (
    <>
      <header>
        <h1>WalleMix</h1>
        <SearchBar />
      </header>

      <main className="main-container">
      { sounds.map((sound, index) => (
        <Button key={index} btnName={sound.name} src={sound.src}/>
      ))}
      </main>

    </>
  )
}

export default App
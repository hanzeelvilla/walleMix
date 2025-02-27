import SearchBar from "./SearchBar"
import "./styles/App.css"
import Button from "./components/Button.jsx"

function App() {

  return (
    <>
      <header>
        <h1>WalleMix</h1>
        <SearchBar />
      </header>

      <main className="main-container">
      <Button btnName="Risa gato"/>
      <Button btnName="Risa gato"/>
      <Button btnName="Risa gato"/>
      <Button btnName="Risa gato"/>
      <Button btnName="Risa gato"/>
      <Button btnName="Risa gato"/>
      <Button btnName="Risa gato"/>
      <Button btnName="Risa gato"/>
      <Button btnName="Risa gato"/>
      <Button btnName="Risa gato"/>
      </main>

    </>
  )
}

export default App
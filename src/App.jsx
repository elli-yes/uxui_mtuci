import AppNavigation from "./components/AppNavigation"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppNavigation/>
      <Outlet/>
    </div>
  )
}

export default App

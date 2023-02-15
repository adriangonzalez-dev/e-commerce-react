import { RouterApp } from "./routes/RouterApp";
import {useTheme} from "./hooks";
import './app.css'
const App = () => {
  const {theme} = useTheme()
  return (
    <>
      <RouterApp/>
      
    </>
  );

}

export default App

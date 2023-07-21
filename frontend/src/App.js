import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Homepage from './components/homepage';
import Allusers from './components/displayuser'
const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Homepage/>} />
        <Route path ='/alluser' element={<Allusers/>} />
      </Routes>
    </Router>
  )
}

export default App;

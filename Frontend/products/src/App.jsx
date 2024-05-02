import {BrowserRouter} from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import Able from './Pages/test'
import DataTable from './Pages/MuiGrid'
import Homepage from './Pages/Homepage'
function App() {

  return (
    <div>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/table" element={<Able></Able>}></Route>
        <Route path="/grid" element={<DataTable></DataTable>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './component/list';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './component/Update';
import AddList from './component/addList';

function App() {
  return (
    <div className="App">
 
    <BrowserRouter> 
    
    <Routes>
    <Route path="/" element={<List/>} />        
    <Route path="/update-todo/:id" element={<Update />} />
       <Route path="/add-todo" element={<AddList/>} />     
          </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;

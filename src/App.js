import Header from './component/header';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import AddEmployee from './component/AddEmployee';
import SignupForm from './component/AddUser';
import AddEmployee from './component/AddEmployee';
import EmployeeRecords from './component/EmployeeRecords';

function App() {
  return (
    <div className='App'>
     {/* <BrowserRouter>
      <Header />
      <Routes>
      
          <Route path="/" element={<AddEmployee />} />
          <Route path="/employeeRecords" element={<EmployeeRecords />} />
         
            
 
      </Routes>
    </BrowserRouter> */}

    <Header />
    <AddEmployee />
    </div>
  );
}

export default App;

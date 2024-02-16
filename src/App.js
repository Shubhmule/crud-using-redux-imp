import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";
import EditItemForm from "./components/EditItemForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
       <ToastContainer />
      <BrowserRouter>
      <Routes>
     
          <Route index element={ <AddItemForm />} />
          <Route path="view" element={<ItemList />} />
          <Route path="edit" element={<EditItemForm/>} ></Route>
          
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

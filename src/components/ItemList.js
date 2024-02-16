import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, fetchItems } from "../thunks/thunks";
import { Button } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ItemList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items);
  const navgiation = useNavigate();
 

 const deletehandler=async(id)=>{
let confirmbox=window.confirm("Are you sure you want delete record?")
if(confirmbox){
  toast.error("Record is Deleted!", {
    autoClose: 600,
  }); 
   await dispatch(deleteItem(id));
   await dispatch(fetchItems());
} 

 return
  }

 const editHandler=async(item)=>{
 window.localStorage.setItem('item',JSON.stringify(item))
 navgiation('/edit')
  }

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className=" m-5 ">
      <Table responsive="md">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Dob</th>
            <th>Phone</th>
            <th>State</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,key) => (
            <tr key={key}>
              <td>
                <img
                  src={item.image}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                ></img>
              </td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.dob}</td>
              <td>{item.phone}</td>
              <td>{item.state}</td>
              <td>{item.city}</td>
              <td>{item.pincode}</td>
              <td>{item.country}</td>
              <td>
                <Button
                  variant="success"
                  className="m-2"
                  onClick={() => navgiation("/")}
                >
                  Add
                </Button>
                <Button variant="primary" onClick={()=>editHandler(item)} className="m-1">
                  Edit
                </Button>
                <Button variant="danger" onClick={()=>{deletehandler(item.id)}} className="m-2">
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    
    </div>
  );
}

export default ItemList;

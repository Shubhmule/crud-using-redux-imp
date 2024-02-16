import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../thunks/thunks";
import "./AddItemForm.css";
import { useFormik } from "formik";
import validationSchema from "./schema";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AddItemForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      gender: "Male",
      dob: "",
      phone: "",
      state: "",
      city: "",
      pincode: "",
      image: "",
      file: "",
      country: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addItem(values));
      toast.success("New Record Creared!", {
        autoClose: 500,
      });
      resetForm();
    },
  });

  const [file, setFile] = useState();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgurl = URL.createObjectURL(file);
      formik.setFieldValue("image", imgurl);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

 
  const handleInputChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
    
      <section className="container mt-2">
        <header> Form   <Button
        variant="success"
        onClick={() => navigation("/view")}
        className="custbtn"
      >
        View All Records
      </Button></header>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="input-box">
            <label className="req"> Name</label>
            <input
              type="text"
              onChange={(e) => {
                formik.handleChange(e);
                handleInputChange("name", e.target.value);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter full name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="required">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="column">
            <div className="input-box">
              <label className="req">Phone Number</label>
              <input
                type="number"
                onChange={(e) => {
                  formik.handleChange(e);
                  handleInputChange("phone", e.target.value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="Enter phone number"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="required">{formik.errors.phone}</div>
              ) : null}
            </div>
            <div className="input-box">
              <label className="req">Birth Date</label>
              <input
                type="date"
                value={formik.values.dob}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleInputChange("dob", e.target.value);
                }}
                onBlur={formik.handleBlur}
                placeholder="Enter birth date"
              />
              {formik.touched.dob && formik.errors.dob ? (
                <div className="required">{formik.errors.dob}</div>
              ) : null}
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="myfile">Select a file</label>
            <input
              type="file"
              className="p-2"
              onChange={handleFileChange}
              name="myfile"
            ></input>
          </div>
          {file && <div></div>}

          <div className="input-box">
            <label htmlFor="myfile" className="req">
              Upload Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              onBlur={formik.handleBlur}
              accept="image/*"
              className="p-2"
              name="myfile"
            ></input>
            {formik.touched.image && formik.errors.image ? (
              <div className="required">{formik.errors.image}</div>
            ) : formik?.values?.image ? (
              <div>
                <p>Selected Image:</p>
                <img
                  src={formik?.values?.image}
                  alt="Selected"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              </div>
            ) : null}
          </div>

          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  value="Male"
                  checked={formik.values.gender === "Male"}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("gender", e.target.value);
                  }}
                  name="gender"
                />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-female"
                  value="Female"
                  checked={formik.values.gender === "Female"}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("gender", e.target.value);
                  }}
                  name="gender"
                />
                <label htmlFor="check-female">Female</label>
              </div>
            </div>
          </div>

          <div className="input-box address">
            <label className="req">Address</label>
            <input
              type="text"
              onBlur={formik.handleBlur}
              value={formik.values.address}
              onChange={(e) => {
                formik.handleChange(e);
                handleInputChange("address", e.target.value);
              }}
              placeholder="Enter street address"
            />

            {formik.touched.address && formik.errors.address ? (
              <div className="required">{formik.errors.address}</div>
            ) : null}

            <div className="column">
              <div className="input-box">
                <div className="select-box">
                  <select
                    value={formik.values.country}
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleInputChange("country", e.target.value);
                    }}
                  >
                    <option hidden>Country</option>
                    <option>America</option>
                    <option>Japan</option>
                    <option>India</option>
                    <option>Nepal</option>
                  </select>
                </div>
                {formik.touched.country && formik.errors.country ? (
                  <div className="required ">{formik.errors.country}</div>
                ) : null}
              </div>

              <div className="input-box">
                <input
                  type="text"
                  value={formik.values.city}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("city", e.target.value);
                  }}
                  placeholder="Enter your city"
                />
                {formik.touched.city && formik.errors.city ? (
                  <p className="required ">{formik.errors.city}</p>
                ) : null}
              </div>
            </div>

            <div className="column ">
              <div className="input-box">
                <input
                  type="text"
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("state", e.target.value);
                  }}
                  placeholder="Enter your state"
                />
                {formik.touched.state && formik.errors.state ? (
                  <div className="required">{formik.errors.state} </div>
                ) : null}
              </div>

              <div className="input-box">
                <input
                  type="number"
                  value={formik.values.pincode}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("pincode", e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  placeholder="Enter postal code"
                />{" "}
                {formik.touched.pincode && formik.errors.pincode ? (
                  <p className="required ">{formik.errors.pincode}</p>
                ) : null}
              </div>
            </div>
          </div>

          <button type="sumbit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default AddItemForm;

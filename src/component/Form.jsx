import React, { useState } from "react";

const Form = () => {
  let [myForm, setForm] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  const InputChange = (property, value) => {
    setForm((prevForm) => ({ ...prevForm, [property]: value }));
  };
  const FormSubmit = (e) => {
    e.preventDefault();
    //console.log(myForm);
    alert(JSON.stringify(myForm));
  };
  return (
    <div className="container">
      <form onSubmit={FormSubmit}>
        <input
          onChange={(e) => {
            InputChange("fName", e.target.value);
          }}
          value={myForm.fName}
          type="text"
          placeholder="First Name"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            InputChange("lName", e.target.value);
          }}
          value={myForm.lName}
          t
          type="text"
          placeholder="Last Name"
        />{" "}
        <br />
        <select
          onChange={(e) => {
            InputChange("city", e.target.value);
          }}
          value={myForm.city}
        >
          <option value="">Choose a city</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rajshahi">Rajshahi</option>
        </select>{" "}
        <br />
        <input
          onChange={(e) => {
            InputChange("gender", "Male");
          }}
          checked={myForm.gender == "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={(e) => {
            InputChange("gender", "Female");
          }}
          checked={myForm.gender == "Female"}
          type="radio"
          name="gender"
        />
        Female <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

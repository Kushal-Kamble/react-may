



// 1st commond instalation  npm install @mui/material @emotion/react @emotion/styled

//  2nd instalation  npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";

import SendIcon from "@mui/icons-material/Send";

import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";

import { useState } from "react";

import Fields from "./Fields";

const Usestateprojectnewthree = () => {
  // define useState

  const [form, setForm] = useState({}); // useState me value store krega
 
  const [data, setData] = useState([]); // ye ek array of object hoga

  const addData = () => {
    // setData({name, email
    //      studentname: name,
    //      studentsemail: email

    // })

    setData([...data, form]); // spread operator hota hai array ke liye aur string ke liye
    // setForm(form);
    setForm({ name: "", email: "" });


    
    

    
  };


  

  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <h1>Record</h1>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <Stack direction="row" spacing={2}>
            <div className="col-md-3">
              <TextField
                value={form.name}
                onChange={(event) => setForm({...form, name: event.target.value})} // ye function return krega jo input field me datails fill ki hai o aur use hum setName           ki help se set krenge
                id="outlined-basic"
                label="name"
                variant="outlined"
              />
            </div>
            <div className="col-md-3 col-sm-3">
              <TextField
                value={form.email}
                onChange={(event) => setForm({...form, email: event.target.value})}
                id="outlined-basic"
                label="email"
                variant="outlined"
              />
            </div>
            <div className="col-md-2 col-sm-2">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                color="success"
                onClick={addData}
              >
                <AddIcon />
                Add
              </Button>
            </div>
            <div className="col-md-1 col-sm-1">
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                color="error"
              >
                Delete
              </Button>
            </div>
          </Stack>
        </div>
      </div>

      {/* data show */}

      <div className="container">
        <div className="row">
          <div className="heroK">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Email</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>

            

            {data.map((element, index) => {
              return (
              
                <Fields name={element.name} email={element.email} index={element.index} data={data} setData={setData}/>

              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usestateprojectnewthree;


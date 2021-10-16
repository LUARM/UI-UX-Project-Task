import React from 'react'
import MapContainer from './Map';
import { useState } from "react";
import './FilterMenu.css';

function FilterMenu() {

const [inputs, setInputs] = useState([]);
const [rerender, setRerender] = useState(false);
   
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}

 return (
  <div className="mainPage">  
    <MapContainer userInput={inputs}></MapContainer>
    <div className="inputListBox">
      <div className="inputList">
        <form  className="inputList">   
          <select className='dropdown'  name="city"  value={inputs.city || ""}  onChange={handleChange}>
            <option value="">City</option>
            <option value="Beaverton">Beaverton</option>
            <option value="Hillsboro">Hillsboro</option>
            <option value="Lake Oswego">Lake Oswego</option>
            <option value="Milwaukie">Milwaukie</option>
            <option value="Portland">Portland</option>
            <option value="Tualatin">Tualatin</option>
            <option value="Woodstock">Woodstock</option>   
          </select>
          <div className="loanRow">
            <input 
              className='loanInput'
              type="text" 
              name="minLoanInput" 
              placeholder="Min Loan $"
              value={inputs.minLoanInput || ""} 
              onChange={handleChange}
            /> 
            <div className = "dash">
              <h2> _ </h2>
            </div>
            <input
              className='loanInput'
              type="text" 
              name="maxLoanInput" 
              placeholder="Max Loan $"
              value={inputs.maxLoanInput|| ""} 
              onChange={handleChange}
            /> 
          </div>
          <input 
            className='input'
            type="text" 
            name="accountNum" 
            placeholder="Account Number"
            value={inputs.accountNum || ""} 
            onChange={handleChange}
          /> 
          <input 
            className='input'
            type="text" 
            name="zipCode" 
            placeholder="Zip Code"
            value={inputs.zipCode || ""} 
            onChange={handleChange}
          /> 
          <input  className='submitButton' type="submit" value="Reset Map Prefrences" onClick={() => setRerender(!rerender)}/>
        </form>
      </div>
    </div>
  </div>
  )
}

export default FilterMenu
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './Maps.css'

const MapContainer = (userInput) => {

const [ selected, setSelected ] = useState({});
const [data, setDataSource] = useState([]);
let newData = testWork()

const mapStyles = {        
  height: "100vh",
  width: "80%"
};

const defaultCenter = {
  lng: -122.6901, lat: 45.5135
}

const onSelect = item => {
  setSelected(item);
}

//gets the GEOJSON data
async function fetchJSON() {
const response = await fetch('https://raw.githubusercontent.com/aspencapital/candidate-project-ui-ux/master/data/coordinates.geojson')
const responseJson = await response.json();
setDataSource(responseJson);

}

useEffect(()=>{
fetchJSON()
},[])

//filters the data based on user inputs
function testWork() {
  let data1 = filterCityInput()
  let data2 = filterAccounNum(data1)
  let data3 = filterZipInput(data2)
  let data4 = filterLoanInput(data3)
  return data4
 }


function filterCityInput() {
  if (userInput.userInput.city === undefined || userInput.userInput.city == '')
  {
   return data.features
  }
  return  data.features && data.features.
  filter(number => number.properties.city.toLowerCase() == userInput.userInput.city.toLowerCase())
}


function filterAccounNum(data) {
  if (userInput.userInput.accountNum  === undefined || userInput.userInput.accountNum === '')
  {
    return data
  }
  return  data && data.
  filter(number => number.properties.account == userInput.userInput.accountNum)
}

function filterZipInput(data) {
  if (userInput.userInput.zipCode  === undefined || userInput.userInput.zipCode === '')
  {
    return data
  }
  return  data && data.
  filter(number => number.properties.zipCode == userInput.userInput.zipCode)  
}


function filterLoanInput(data) {
  console.log(userInput.userInput.maxLoanInput)
  console.log(userInput.userInput.minLoanInput)
  if ((userInput.userInput.minLoanInput  === undefined || userInput.userInput.minLoanInput === '')
  && (userInput.userInput.maxLoanInput  === undefined || userInput.userInput.maxLoanInput === ''  ))
  {
    return data
  }
  if ((userInput.userInput.minLoanInput  === undefined || userInput.userInput.minLoanInput === '')
  && (userInput.userInput.maxLoanInput  !== undefined || userInput.userInput.maxLoanInput !== ''))
  {    
    return  data && data.filter(number =>  number.properties.loanAmount.
    replace(/[^0-9\.-]+/g,"") < Number(userInput.userInput.maxLoanInput))
  }

  if ((userInput.userInput.minLoanInput  !== undefined || userInput.userInput.minLoanInput !== '')
  && (userInput.userInput.maxLoanInput  === undefined || userInput.userInput.maxLoanInput === ''))
  {      
    return  data && data.filter(number =>  number.properties.loanAmount.
    replace(/[^0-9\.-]+/g,"") > Number(userInput.userInput.minLoanInput))
  }
  return  data && data.filter(number => number.properties.loanAmount.
  replace(/[^0-9\.-]+/g,"") > Number(userInput.userInput.minLoanInput) 
  && number.properties.loanAmount.replace(/[^0-9\.-]+/g,"") < Number(userInput.userInput.maxLoanInput))
}




  return (
    <LoadScript
      googleMapsApiKey='AIzaSyA_6EaJtevMLeg78MeQHvHPgYWKkTRT_qQ'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={11}
        center={defaultCenter}>
        {
        newData && newData.map
        (
        item => 
          {
            return (
              <Marker 
                key={item.properties.name} 
                position={{ lat: item.geometry.coordinates[1], lng: item.geometry.coordinates[0]}}  
                onClick={() => onSelect(item)}
                icon={
                  {
                    path:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
                    fillColor: '#035434',
                    fillOpacity: 1.0,
                    strokeWeight: 0,
                    scale: 2.5
                  }
                }  
              />
            )
          }
        )
        }
        {
        selected.properties && 
          (
            <InfoWindow
              position={{ lat: selected.geometry.coordinates[1], lng: selected.geometry.coordinates[0]}}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
            <div className="Map">
              <h1 className="heading">{"Name: "  }</h1>
              <h2>{selected.properties.name }</h2>
              <h1 className="heading">{"Adress: "  }</h1>
              <h2>{ selected.properties.address}</h2>
              <h2>{selected.properties.city +", " + selected.properties.state  + " " + selected.properties.zipCode}</h2>
              <h1 className="heading">{"Loan Amount: "  }</h1>
              <h2>{selected.properties.loanAmount}</h2>
              <h1 className="heading">{"Account #: "  }</h1>
              <h2>{selected.properties.account}</h2>
            </div>
            </InfoWindow>
          )
        }
      </GoogleMap>
    </LoadScript>
  )
}


export default MapContainer;
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';
import videoBg from './assets/videoBg.mp4'
function App() {


  const apiKey = "ec39bdf1a8121e4ea263dc49e8f1cce9"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


  return (
    <div className="col-md-12 " >
      
      <div className="weatherBg" >
        <h1 className="heading">Weather App!</h1>
          <video src={videoBg} autoPlay muted loop style={{position:"fixed"}}></video>
        
           
        <div className="d-grid gap-3 col-4 mt-4 c">
        <h1 className="heading">Weather App!</h1>
           <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
           <button className="btn btn-primary" type="button"
            onClick={handleSearch}
           >Search</button>
         </div>
         {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center  mt-5">

           <div className="shadow rounded weatherResultBox">
            <img className="weatherIcon"
              src="https://purepng.com/public/uploads/large/purepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png" />

            <h5 className="weatherCity">
              {data?.name}
            </h5>
            <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
           </div>
       </div>
      }
      </div>

      
      
    </div>
  );
}

export default App;
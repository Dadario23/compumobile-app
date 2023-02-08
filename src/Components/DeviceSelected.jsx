import { data } from './data'

const DeviceSelected = ({ handleChangeDevice }) => {
    const devices = Object.keys(data.devices);

  return (
    <>
    <select onChange={handleChangeDevice}> 
      <option value="" >SELECCIONE UN DISPOSITIVO</option>     
        {
          devices.map((item,idx)=> <option key={idx}>{item.toUpperCase()}</option>)   
        }
      </select>
    </>
  )
}

export default DeviceSelected
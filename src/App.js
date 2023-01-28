import { useState } from "react";
import './index.css'
import Probando from "./Probando";

function App() {
  const [device, setDevice] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');


  const handleDevice = (e) =>{
    let device = e.target.value;

    setDevice(device)
  }

  const handleMarca = (e) =>{
    console.log('selec de marca activado');
    /* let marcaSel = e.target.value;
    setMarca(marcaSel) */
  }

  const handleModelo = (e) =>{
    let modeloSel = e.target.value;
    setModelo(modeloSel)
  }

  const equipos = [{
    id: 0,
    equipo: 'CELULAR'
  },
  {
    id: 1,
    equipo: 'TABLET'
  },
  {
    id: 2,
    equipo: 'NOTEBOOK'
  },
  {
    id: 3,
    equipo: 'PC ESCRITORIO'
  }
]

  const marcasEquipos = [{
    id: 0,
    equipo: 'CELULAR',
    marcas: [{ marca: 'SAMSUNG'},{marca: 'MOTOROLA'},{marca: 'IPHONE'},{marca: 'LG'},{marca: 'ALCATEL'},{marca: 'XIAOMI'},{marca: 'NOBLEX'},{marca: 'BGH'},{marca: 'PCBOX'}]
  },
  {
    id: 1,
    equipo: 'TABLET',
    marcas: ['SAMSUNG','ADMIRAL','LENOVO','PCBOX','ENOVA','AMAZON','INNJOO','AIWA','PHILCO','IPAD']
  },
  {
    id: 2,
    equipo: 'NOTEBOOK',
    marcas: ['SAMSUNG','LENOVO','ASUS','DELL','ORIX','ENOVA','PCBOX','GADNIC','HP','EXO','BANGHO','ACER']
  },
  {
    id: 3,
    equipo: 'PC ESCRITORIO',
    marcas: ['GENERICA']
  }
  

]

const modelosCelular = [{
  id: 1,
  marca: 'SAMSUNG',
  modelos: [{
    id: 1,
    modelo: 'J1'
  },
  {
    id: 2,
    modelo: 'J2'
  },
  {
    id: 3,
    modelo: 'J4'
  },
  {
    id: 4,
    modelo: 'J5'
  },
  {
    id: 5,
    modelo: 'J7'
  }] 
},
{
  id: 2,
  marca: 'MOTOROLA',
  modelos: [{
    id: 1,
    modelo: 'G5'
  },
  {
    id: 2,
    modelo: 'G7'
  },
  {
    id: 3,
    modelo: 'G8'
  },
  {
    id: 4,
    modelo: 'G9'
  },
  {
    id: 5,
    modelo: 'G200'
  }]
}]


  return (
    <div className='container'>

      <select name="equipos" id='' onClick={handleDevice}>
        <option value="">EQUIPO A REPARAR</option>
        {marcasEquipos.map((item)=>
          <option key={item.id} value={item.equipo}>{item.equipo}</option>
        )}
      </select>






    {
        equipo ? (
        <select name="marcas" id='' onClick={handleMarca}>
        <option value="">MARCA</option>
        {
          marcasEquipos.filter((item)=> item.equipo === equipo).map(item => item.marcas).filter((item, indice) => indice === 2 ).map(item => console.log(item))
        }
        </select>
      ) : null
    }





      
      <select name="marcas" id='' onClick={handleModelo}>
        {<option value="">MODELO</option>}
        {modelosCelular.map((item)=>
          <option key={item.id} value={item.marca}>{item.marca}</option>
          )}
      </select>
      {/* <Probando/> */}
     {/*  <span>{modelo}</span> */}
    </div>
  );
}

export default App;

/* 
.map((item)=>
<option key={item.id} value={item.marca}>{item.marca}</option>
)
*/

/* console.log('item:',item)
console.log('Marcas:',item.marcas)  */
/* item.marcas.map(item => {
  console.log(item.marca)
  
}); */
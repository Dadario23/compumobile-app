import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import '../App.css'

export default function DeviceFailure({ resetForm,failureName, setFailureName,deviceSelected, brandSelected, modelSelected }) {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
        PaperProps: {
            style: {maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250,},
        },
    };

    const failureArray = [
        'SE MOJÓ',
        'SE GOLPEÓ',
        'DEJÓ DE ENCENDER',
        'NO CARGA',
        'DEJO DE ANDAR EL TACTIL',
        'PANTALLA ROTA',
        'NO DURA LA BATERIA',
        'SE APAGA Y/O SE REINICIA',
        'PRENDE PERO NO SE VE IMAGEN',
        'NO ME ESCUCHAN CUANDO HABLO',
        'NO ESCUCHO CUANDO ME HABLAN',
        'FALLA EN EL AURICULAR',
        'FALLA EL BOTON VOL(+)',
        'FALLA EL BOTON VOL(-)',
        'FALLA EL BOTON ENCEN/BLOQUEO',
        'NO LEVANTA SEÑAL',
        'NO LEE LA MEMORIA MICRO SD',
        'NO RECUERDO EL PATRON',
        'NO RECUERDO LA CUENTA',
        'SE QUEDE EN EL LOGO'
      ];

      /* const [failureName, setFailureName] = React.useState([]); */

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFailureName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const onSubmit = (data) => {
    
  }

  const url = `https://api.whatsapp.com/send?phone=1135664895&       text=Hola%20*COMPUMOBILE*%20tengo%20un%20*${deviceSelected}*%20*${brandSelected}*%20*${modelSelected}*%20el%20cual%20*${failureName}*%20y%20necesito%20que%20lo%20revisen%20y%20presupuesten%20cuanto%20antes,%20muchisimas%20gracias.`
  

  return (
    <div>
      <FormControl fullWidth onSubmit={onSubmit} >
        <InputLabel id="demo-multiple-checkbox-label">Falla</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={failureName}
          onChange={handleChange}
          input={<OutlinedInput label="Falla" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {
            deviceSelected ? (failureArray.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={failureName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>))) : null
          }
        </Select>
        <span>*Puedes elegir una o mas opciones</span>
        <br/>
         <br/>                         
        <div >
          {
            failureName.length !== 0 ? (
            <a onClick={resetForm} className='fcc-btn' href={url} rel="noreferrer" target="_blank">Enviar por Whatsapp</a>
            ) : null
          }          
        </div>
          
      </FormControl>
    </div>
  )
}


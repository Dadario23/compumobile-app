import React from "react";

export default function Probando(){
    const marcas = ['SAMSUNG','MOTOROLA','IPHONE','LG','ALCATEL','XIAOMI','NOBLEX','BGH','PCBOX']
return (
    <div>
        <select name="marcas" id=''>
            <option value="">Seleccione</option>
            {marcas.map((item)=><option key={item} value={item}>{item}</option>)}
        </select>
    </div>
)
}



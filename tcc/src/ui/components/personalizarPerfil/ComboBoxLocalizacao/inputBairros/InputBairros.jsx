import React, { useEffect, useState } from 'react'
import { fetchBairroPorCidade } from '../ApiEndereco'
import '../styleComboBoxLocalizacao.css'

const InputBairros = ({city, onChange = () => {}}) => {

  const [bairros, setBairros] = useState([])
  
  useEffect(() => {
    if(city != undefined){
      fetchBairroPorCidade(city)
      .then((data) => {
          setBairros(data)
    })
    }
  }, [city])

  return (
    <>
        <select id="neighborhoods" name='neighborhood' onChange={onChange} className='inputList'>
            <option value="">Selecione um bairro...</option>
            {
              
                bairros.map((item) => (
                     <option key={item.id} value={item.id}>
                         {item.nome}
                     </option>
                ))
            }
        </select>
    </>
  )
}

export default InputBairros
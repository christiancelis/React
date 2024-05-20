import React , {useState} from 'react'
import PropTypes from 'prop-types'

function Greeting({name}=props) {

    const [count , setCount] = useState(0);

   let ModificarNumero = ()=>{
        setCount(count + 1)
    }

  return (
    <>
        <div>Greeting ,{name}</div>
        <button onClick={ModificarNumero}></button>
        <p>{count}</p>
    </>
  )
}

Greeting.PropTypes = {
    
}

export default Greeting

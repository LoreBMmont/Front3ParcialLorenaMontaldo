import React, { useState } from 'react'
import Card from './Card';
import style from '../style.module.css'


export default function Formulario() {

    const [nombre , setNombre] = useState('');
    const [pelicula , setPelicula] = useState('');
    const [mensaje, setMensaje] = useState(false)

    const onChangeinput = (event)=>{
        setNombre(event.target.value)
    }

    const onChangePelicula = (event)=>{
        setPelicula(event.target.value)
    }

    const onSubmitForm = (event)=>{

        event.preventDefault();
        const nombreValido = nombre.trim();
        const peliculaValida = pelicula.trim()

        if(nombreValido.length > 3 && peliculaValida.length > 6){
            setMensaje(true)
        }
        else{
            setMensaje(false)
            alert('Corrobore que la informacion sea correcta')
        }
    }
  return (
    <>
    <h1>Mi formulario</h1>
    <form className={style.form} onSubmit={onSubmitForm}>
        <input type="text" placeholder='ingrese su nombre' onChange={onChangeinput} value={nombre}/>
        <input type="text" placeholder='cual es su pelicula favorita'onChange={onChangePelicula} value={pelicula}/>
        <button>Enviar</button>
    </form>

    {mensaje ? <Card userName={nombre} peli={pelicula} /> : null}
    </>

  )
}

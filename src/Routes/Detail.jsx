import { useContext, useEffect } from "react"
import { ContextGlobal, url } from "../Components/utils/global.context"
import axios from "axios"
import { useParams } from "react-router-dom"

const Detail = () => {
  const { state, dispatch } = useContext( ContextGlobal )
  const { odontologoData } = state
  const params = useParams()
  
  useEffect(() => {
    axios(`${url}/${params.id}`)
      .then( res => dispatch({ type: 'GET_ODONTOLOGO', payload: res.data }) )
  }, [])

  return (
    <div className="section">
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Sitio Web</th>
        </thead>
        <tbody>
          <td>{ odontologoData.name }</td>
          <td>{ odontologoData.email }</td>
          <td>{ odontologoData.phone }</td>
          <td>{ odontologoData.website }</td>
        </tbody>
      </table>
    </div>
  )
}

export default Detail
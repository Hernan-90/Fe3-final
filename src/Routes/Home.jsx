import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const { state } = useContext( ContextGlobal )
  const { odontologosList } = state

  return (
    <main className="section" >
      <h1>Home</h1>
      <div className='card-grid'>
        { odontologosList.map( odontologo => (
          <Card key={odontologo.id} { ...odontologo }/>
        ) ) }
      </div>
    </main>
  )
}

export default Home
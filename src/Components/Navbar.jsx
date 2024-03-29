import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext( ContextGlobal )

  return (
    <nav>
      <div className='nav-logo'>
        <img src="/assets/images/DH.ico" alt="Digital House logo" className="logo"/>
        <span>DH Odontología</span>
      </div>

      <div className='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'contacto'}>Contacto</Link>
        <Link to={'favoritos'}>Favoritos</Link>
      </div>

      <button className='btn-theme' onClick={ () => dispatch( state.theme === 'light' ? { type: 'THEME_DARK' } : { type: 'THEME_LIGHT' } ) }>
        <span className='btn-visible'>{ state.theme === 'light' ? `🌞` : `🌙` }</span>
        <span className='btn-invisible'>{ state.theme === 'light' ? `🌙` : `🌞` }</span>
      </button>
    </nav>
  )
}

export default Navbar
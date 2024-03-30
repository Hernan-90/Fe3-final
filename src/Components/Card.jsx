import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id, email, website, phone }) => {

  const { state, dispatch } = useContext( ContextGlobal )

  const addToFavorites = ( id, name, username ) => {
    dispatch({ type: 'ADD_FAV', payload: { id, name, username } })
    alert(`Se agrego correctamente al odontólogo ${ name } a favoritos.`)
  }

  const deleteAndRefresh = (id) => {
    dispatch({ type: 'DELETE_FAV', payload: id });
    const updatedFavs = state.favs.filter( odontologo => odontologo.id !== id);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
    alert(`Se elimino a ${ name } de favoritos.`)
  };

  return (
    <div className="card">
      <Link to={`/odontologo/${ id }`}>
        <img src="./images/doctor.jpg" alt="Imagen de odontologo" />

        <h3 className="card-name"> { name } </h3>
        <div className="dentist-details">
          <p className="detail"> { username } </p>
        </div>
      </Link>

      {
        location.pathname === '/' 
        ? <button onClick={ () => addToFavorites( id, name, username ) } className="favButton">Add fav</button>
        : <button onClick={ () => deleteAndRefresh( id ) } className="favButton">Remove fav</button>
      }
    </div>
  );
};

export default Card;

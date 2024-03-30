import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id, email, website, phone }) => {

  const { state, dispatch } = useContext( ContextGlobal )

  const deleteAndRefresh = (id) => {
    dispatch({ type: 'DELETE_FAV', payload: id });
    const updatedFavs = state.favs.filter( odontologo => odontologo.id !== id);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
  };

  return (
    <div className="card">
      <Link to={`/odontologo/${ id }`}>
        <img src="./images/doctor.jpg" alt="Imagen de odontologo" />

        <h3> { name } </h3>
        <div className="dentist-details">
          <p className="detail"> { phone } </p>
          <p className="detail"> { email } </p>
        </div>
      </Link>

      {
        location.pathname === '/' 
        ? <button onClick={ () => dispatch({ type: 'ADD_FAV', payload: { id, name, username } }) } className="favButton">Add fav</button>
        : <button onClick={ () => deleteAndRefresh( id ) } className="favButton">Remove fav</button>
      }
    </div>
  );
};

export default Card;

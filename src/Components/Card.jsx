import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id, email, website, phone }) => {

  const { dispatch } = useContext( ContextGlobal )

  return (
    <div className="card">
      <Link to={`/odontologo/${ id }`}>
        <img src="/assets/images/doctor.jpg" alt="" />

        <h3> { name } </h3>
        <div className="dentist-details">
          <p className="detail"> { phone } </p>
          <p className="detail"> { email } </p>
        </div>
      </Link>

      {
        location.pathname === '/' 
        ? <button onClick={ () => dispatch({ type: 'ADD_FAV', payload: { id, name, username } }) } className="favButton">Add fav</button>
        : <button onClick={ () => { dispatch({ type: 'DELETE_FAV', payload: id }), location.reload() } } className="favButton">Remove fav</button>
      }
    </div>
  );
};

export default Card;

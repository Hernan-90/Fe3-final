import Card from "../Components/Card";

const Favs = () => {

  const favoritos = JSON.parse(localStorage.getItem('favs')) || []

  return (
    <div className="section">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          favoritos.length === 0 ?
          <p>No hay ningún odontologo guardado en favoritos</p>
          : favoritos.map( fav => ( <Card key={fav.id} { ...fav }/> ) )
        }
      </div>
    </div>
  );
};

export default Favs;

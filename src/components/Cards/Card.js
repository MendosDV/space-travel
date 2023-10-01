import '../../styles/Card.scss';

function Card ( { name, id, image, type, diameter, distance, price }) {
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className="planete-content">
        <h5>PLANETE</h5>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Card;

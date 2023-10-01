import '../../styles/ListCards.scss';
import { planeteList } from '../../datas/planeteList';
import Card from './Card';

function ListCards () {

  return (
    <div className='list-planetes'>
      {planeteList.map (({ name, id, image, type, diameter, distance, price }) =>
        <div className="planete" key={id}>
          <Card
            name={name}
            id={id}
            image={image}
            type={type}
            diameter={diameter}
            distance={distance}
            price={price}
          />
        </div>
      )}
    </div>
  )
}

export default ListCards;

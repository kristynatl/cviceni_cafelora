import './style.css';
import { Layer } from '../Layer';

export const Drink = ({ name, ordered, image, layers }) => {
  const orderBtnText = ordered ? 'Zrušit' : 'Objednat';
  const orderBtnClass = ordered ? 'order-btn order-btn--ordered' : 'order-btn';
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer, id) => (
            <Layer key={id} id={id} color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0"></input>
        <button className={orderBtnClass}>{orderBtnText}</button>
      </form>
    </div>
  );
};

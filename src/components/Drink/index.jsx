import './style.css';
import { Layer } from '../Layer';

export const Drink = ({ name, ordered, image, layers }) => {
  const orderBtnText = ordered ? 'Zrušit' : 'Objednat';
  const orderBtnClass = ordered ? 'order-btn order-btn--ordered' : 'order-btn';
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer, id) => (
            <Layer key={id} id={id} color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>
      <div className="drink__controls">
        <button className={orderBtnClass}>{orderBtnText}</button>
      </div>
    </div>
  );
};

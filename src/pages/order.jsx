import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Order } from '../components/Order';

const items = await fetch(
  'http://localhost:4000/api//drinks?filter=ordered:eq:true&select=id,name,image',
);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      <Order items={items} />
      <Footer />
    </div>
  </div>,
);

console.log(items);

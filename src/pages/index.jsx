import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const responseDrinksData = await fetch('http://localhost:4000/api/drinks');
const drinksDataJson = await responseDrinksData.json();
const drinksData = drinksDataJson.result;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header id="home" showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={drinksData} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const rolloutNav = document.querySelector('.rollout-nav');

document.querySelector('.nav-btn').addEventListener('click', () => {
  rolloutNav.classList.toggle('nav-closed');
});

rolloutNav.addEventListener('click', () => {
  rolloutNav.classList.toggle('nav-closed');
});

// ZATÍM NEFUNKČNÍ OBJEDNÁVÁNÍ NÁPOJŮ
document.querySelectorAll('.drink_form').forEach((item) => {
  item.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formElement = e.target;
    const id = formElement.querySelector('input').value;
    await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: true }]),
    });
    window.location.reload();
  });
});

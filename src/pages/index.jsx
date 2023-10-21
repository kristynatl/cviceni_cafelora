import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks');
const responseJson = await response.json();
const drinks = responseJson.result;

console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header id="home" />
    <main>
      <Banner />
      <Menu drinks={drinks} />
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

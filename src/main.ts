import App from "./components/app/app";
import './style.css';

const root = document.querySelector('#app');
const shadowRoot = root?.shadowRoot ?? root?.attachShadow({mode: 'open'});

shadowRoot && App(shadowRoot);

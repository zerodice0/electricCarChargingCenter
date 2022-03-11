import App from "./components/app/app";
import appendKakaoMap from "./components/kakaoMap/kakaoMap";
import './style.css';

declare global {
  interface Window {
    kakao: any
  }
}

const root = document.querySelector('#app');
const map = document.querySelector('#kakaoMap');
const shadowRoot = root?.shadowRoot ?? root?.attachShadow({mode: 'open'});

shadowRoot && App(shadowRoot);
map && appendKakaoMap(map);

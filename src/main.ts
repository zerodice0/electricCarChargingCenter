import App from "./components/app/app";
import './style.css';

const root = document.querySelector('#app');
const map = document.querySelector('#kakaoMap');
const shadowRoot = root?.shadowRoot ?? root?.attachShadow({mode: 'open'});

new window.kakao.maps.Map(map, {
  center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3
});

shadowRoot && App(shadowRoot);
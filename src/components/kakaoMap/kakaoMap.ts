interface KakaoMapStatus {
  latitude: number,
  longitude: number,
}

const appendKakaoMap = (target: Element) => {
  let status: KakaoMapStatus = {
    latitude: 37.5666102,
    longitude: 126.9783881,
  };

  const setState = (_state: KakaoMapStatus) => {
    status = {...status};
    render();
  };

  const render = () => {
    const map = new window.kakao.maps.Map(target, {
      center: new window.kakao.maps.LatLng(
        status.latitude,
        status.longitude
      ),
      level: 3
    });

    return map;
  }

  return render();
}

export default appendKakaoMap;
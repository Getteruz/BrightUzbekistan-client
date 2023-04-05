import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";

const Map = () => (
  <YMaps>
    <div>
      <YMap defaultState={{ center: [41.302074, 69.241488], zoom: 9 }}>
      <Placemark
         geometry={[41.302074, 69.241488]}
         options={{ draggable: true }}
        //  onClick={handlePointClick}
       />
      </YMap>
    </div>
  </YMaps>
);

export default Map
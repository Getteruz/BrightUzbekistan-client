import { YMaps, Map, Placemark } from "react-yandex-maps";

const ContactMap = () => (
  <div style={{width: '100%'}}>
    <YMaps>
      <div>
        <Map width={'100%'} height='270px' defaultState={{ center: [41.3186267, 69.2957157], zoom: 15 }}>
          <Placemark
            geometry={[41.3186267, 69.2957157]}
            modules={["geoObject.addon.balloon"]}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/pin.svg",
              iconImageSize: [25, 30],
              iconImageOffset: [0, 0],
            }}
          >
          </Placemark>
        </Map>
      </div>
    </YMaps>
  </div>
);

export default ContactMap
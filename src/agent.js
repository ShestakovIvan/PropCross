
const agent ={
  getLocation: (placeName) => getLocationsApi(placeName),
  getRealtysList: (search, numPage) => getRealtysLists(search, numPage),
  getCoords: () => getCoordsBrowsers(),
  getMyLocations: (place) => getMyLocationsApi(place)
};

const getLocationsApi = placeName => {
  const url = `http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${placeName}`;
  return fetch(url).then(response => response.json())
};
const getRealtysLists = (search, numPage) => {
  const url = `http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=${numPage +1}&place_name=${search}`;
  return fetch(url).then(response => response.json())
};

const getMyLocationsApi = (place) => {
  const url = `http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&${place}`;
  return fetch(url).then(response => response.json())
};

const  getCoordsBrowsers = () => (
  new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          const coordinates = `${latitude},${longitude}`; 
           /* const coordinates = `${51.684183},${-3.431481}`;  */
          resolve(coordinates);
      }, reject);
  }))

export default agent;
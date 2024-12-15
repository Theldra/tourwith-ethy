const geoip = require('geoip-lite');

const getLocationFromIP = (ip) => {
  const geo = geoip.lookup(ip);
  return {
    country: geo?.country,
    region: geo?.region,
    city: geo?.city,
    ll: geo?.ll // latitude and longitude
  };
}; 
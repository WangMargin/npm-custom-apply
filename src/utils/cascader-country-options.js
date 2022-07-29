import country_list from './country.json';
import provinceAndCityOptions from './address-options';
// import { new_countryOptions } from './cascader-country-options';
const countryOptions = [];
Object.values(country_list).forEach(country => {
  if (country === '中国') {
    countryOptions.push({
      value: country,
      label: country,
      children: provinceAndCityOptions,
    });
  } else {
    countryOptions.push({ label: country, value: country, children: [] });
  }
});

/** 剔除 中国 港澳台地区 */
const new_countryOptions = [];
const new_test = new RegExp(/中国|台湾|香港|澳门/);
Object.values(country_list).forEach(country => {
  if (!new_test.test(country)) {
    new_countryOptions.push({ label: country, value: country, children: [] });
  }
});
export { new_countryOptions };

const countryOnlyOptions = [];
Object.values(country_list).forEach(country => {
  countryOnlyOptions.push(country);
});
export { countryOnlyOptions };
export default countryOptions;

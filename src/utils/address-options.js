import provinceCities from './pc.json';
import { new_countryOptions } from './cascader-country-options';
const l = [
  {
    value: '港澳台地区',
    label: '港澳台地区',
    children: [
      {
        value: '香港特别行政区',
        label: '香港特别行政区',
      },
      {
        value: '澳门特别行政区',
        label: '澳门特别行政区',
      },
      {
        value: '台湾省',
        label: '台湾省',
      },
    ],
  },
  {
    value: '海外',
    label: '海外',
    children: new_countryOptions,
  },
];

const provinceAndCityOptions = [];
Object.keys(provinceCities).forEach(province => {
  const cities = [];
  Object.values(provinceCities[province]).forEach(city => {
    cities.push({
      value: city,
      label: city,
    });
  });
  provinceAndCityOptions.push({
    value: province,
    label: province,
    children: cities,
  });
});

provinceAndCityOptions.concat(l);

export default provinceAndCityOptions;

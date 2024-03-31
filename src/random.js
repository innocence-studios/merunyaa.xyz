import fetch from 'node-fetch';
import { load } from 'cheerio';

const invalid = [
  'hiyiahhh', 'merubutton', 'fanartbutton', 'otherbutton', 'animatedbutton', 'RANDOM-BUTTON', 'best-BUTTON', 'bean', 'preloader'
];

/**
 * @description Gets a random image from `merunyaa.xyz`
 * @function
 * @returns {Promise}
 */
export default () => {
  return new Promise((resolve, reject) => {
    fetch(`https://merunyaa.xyz/?redirect_to=random`)
      .then(response => response.text())
      .then(data => {
        let $ = load(data);
        let values = [];
        $('img').each((index, element) => {
          for (let attr of element.attributes) {
            let valid = true;
            for (let v of invalid) { if (attr.value.includes(v)) valid = false; };
            if (attr.name == 'src' && valid) values.push(attr.value);
          };
        });
        resolve(values);
      })
      .catch(error => {
        reject(error);
      });
  });
};

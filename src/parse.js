import fetch from 'node-fetch';
import { load } from 'cheerio';

const invalid = [
  'hiyiahhh', 'merubutton', 'fanartbutton', 'otherbutton', 'animatedbutton', 'RANDOM-BUTTON', 'best-BUTTON', 'bean', 'preloader'
];

/**
 * @description Parses an image from `merunyaa.xyz`
 * @function
 * @param {String} id The ID to parse
 * @returns {Promise}
 */
export default (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://merunyaa.xyz/archives/${id}`)
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

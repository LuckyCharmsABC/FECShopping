const _ = require('underscore');

module.exports = {
  relLeftScroll() {
    const left = document.querySelector('.scroll-related-items');
    left.scrollBy(-200, 0);
  },
  relRightScroll() {
    const right = document.querySelector('.scroll-related-items');
    right.scrollBy(200, 0);
  },
  fitLeftScroll() {
    const left = document.querySelector('.scroll-outfit-items');
    left.scrollBy(-200, 0);
  },
  fitRightScroll() {
    const right = document.querySelector('.scroll-outfit-items');
    right.scrollBy(200, 0);
  },
  addToOutfit(item, callback) {
    if (!!localStorage.getItem(item.id)) {
      alert('Cannot add to outfit twice!');
    } else {
      localStorage.setItem(item.id, item.name);
      callback(Object.keys(localStorage));
    }
  },
  removeFromOutfit(e, item, callback) {
    e.stopPropagation();
    localStorage.removeItem(item.id);
    callback(Object.keys(localStorage));
  },
  updateDetail(item, callback) {
    event.preventDefault();
    callback(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  toggleModal(event, value, callback) {
    event.stopPropagation();
    callback(!value);
  },
  getFeatures(item1, item2) {
    const array1 = item1.features?.map((item) => item.feature);
    const array2 = item2.features?.map((item) => item.feature);

    const featureArray = _.uniq(array1.concat(array2));
    return featureArray;
  },
  findValues(target, item) {
    for (let i = 0; i < item.features.length; i += 1) {
      if (item.features[i].feature === target) {
        if (item.features[i].value === true) {
          return '&#10004';
        }
        return item.features[i].value;
      }
    }
    return '';
  },
};

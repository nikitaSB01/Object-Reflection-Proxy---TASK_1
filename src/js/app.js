const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

function orderByProps(object, arr) {
  const output = [];
  for (const prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop) && !arr.includes(prop)) {
      output.push({ key: prop, value: object[prop] });
    }
  }
  output.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (Object.prototype.hasOwnProperty.call(object, arr[i])) {
      output.unshift({
        key: arr[i],
        value: object[arr[i]],
      });
    }
  }
  return output;
}

orderByProps(obj, ['name', 'level']);

export default orderByProps;

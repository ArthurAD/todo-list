function generateIdObject(arr = []) {
  return arr.reduce((o, item) => {
    const id = item.id;
    delete item.id;
    o[id] = item;
    return o;
  }, {});
}

export { generateIdObject };

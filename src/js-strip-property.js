const stripProperty = (obj, prop) => {
  // Implemente seu código aqui

  Object.entries(obj).map(p => {
    if (prop == p[0]) {
      delete obj[prop];
    }
  })

  return obj;
};

module.exports = stripProperty;

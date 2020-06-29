const stripProperty = (obj, prop) => {
  /**
   * Laço para mapear o objeto como array
   */
  Object.entries(obj).map((p) => {
    // Verificar se a propriedade inputada bate com alguma propriedade do objeto
    if (prop == p[0]) {
      // Remove a proriedade solicitada do objeto
      delete obj[prop];
    }
  });

  // Retorna o objeto com as propriedades excluidas
  return obj;
};

module.exports = stripProperty;

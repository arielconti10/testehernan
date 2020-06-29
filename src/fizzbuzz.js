const generateFizzBuzz = (n) => {
  // implemente seu código aqui

  // Verificação de tipo da variavel recebida, se for string irá retornar erro
  if (typeof n === "string") {
    return "erro";
  }

  // Inicia vetor de resposta
  const response = [];

  // Laço para percorrer o número inputado
  for (var i = 1; i <= n; i++) {
    /**
     * Verificações e substituições dos valores, se for divisivel por 3 e 5, retornará FizzBuzz
     * Se for divisivel por 3 e 5, retorna FizzBuzz
     * Se for divisivel por 3, retorna Fizz,
     * Se for divisivel por 5, retorna Buzz.
     */
    if (i % 3 == 0 && i % 5 == 0) {
      response.push("FizzBuzz");
    } else if (i % 3 == 0) {
      response.push("Fizz");
    } else if (i % 5 == 0) {
      response.push("Buzz");
    } else {
      response.push(i);
    }
  }

  // Retorna o vetor de resposta com as devidas substituições
  return response;
};

module.exports = generateFizzBuzz;

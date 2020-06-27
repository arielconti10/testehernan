const generateFizzBuzz = n => {
  // implemente seu código aqui

  if (typeof n === 'string') {
    return 'erro';
  }

  const response = [];

  for (var i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      response.push('FizzBuzz');
    }
    else if (i % 3 == 0) {
      response.push('Fizz');
    }
    else if (i % 5 == 0) {
      response.push('Buzz');
    }
    else {
      response.push(i);
    }
  }
  return response;

};


module.exports = generateFizzBuzz;

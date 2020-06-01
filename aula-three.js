const isValidBRZip = zip => {
  const pattern = /^[0-9]{5}-[0-9]{3}$/;
  return pattern.test(zip);
}
const cep = isValidBRZip('83050-020');
console.log(cep);
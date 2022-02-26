function camelCase(input) {
  return input
    .split(" ")
    .map((s,i) => i==0 ?s.toLowerCase()  :s[0].toUpperCase() + s.slice(1).toLowerCase() )
    .join("");
}
function snakeCase(input) {
  return input
    .split(" ")
    .map((s) => s.toUpperCase())
    .join("_");
}
function pascalCase(input) {
  return input
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join("");
}
module.exports={camelCase,snakeCase,pascalCase}
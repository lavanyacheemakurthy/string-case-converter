function camelCase(input) {
  return input
    .split(" ")
    .map((s, i) =>
      i == 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()
    )
    .join("");
}
function snakeCase(input, { allLower = false }={}) {
  return input
    .split(" ")
    .map((s) => (allLower ?  s.toLowerCase(): s.toUpperCase() ))
    .join("_");
}
function pascalCase(input) {
  return input
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join("");
}
function kebabCase(input) {
  return input
    .split(" ")
    .map((s) => s.toLowerCase())
    .join("-");
}
console.log(snakeCase('Test me for SNAKE case'));
module.exports = { camelCase, snakeCase, pascalCase,kebabCase };

module.exports = "Exportando módulo";

export function getFlag(text) {
  const index = process.argv.indexOf(text) + 1;
  return process.argv(index);
}

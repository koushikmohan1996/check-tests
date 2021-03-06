function hasStringArgument(path) {
  if (!path.arguments) return false;
  if (!path.arguments.length) return false;
  return path.arguments[0].type === 'StringLiteral';
}

function hasTemplateArgument(path) {
  if (!path.arguments) return false;
  if (!path.arguments.length) return false;
  return path.arguments[0].type === 'TemplateLiteral';
}

function hasTemplateQuasi(path) {
  if (!path.quasi) return false;
  if (!path.quasi.quasis.length) return false;
  return path.quasi.quasis[0].type === 'TemplateElement';
}

function getQuasiArgument(path) {
  let quasiValue = '';
  for (const quasi of path.arguments[0].quasis) {
    quasiValue += quasi.value.raw;
  }

  return quasiValue;
}

function getLineNumber(path) {
  let line = null;
  if (path.container && path.container.loc && path.container.loc.start) {
    line = path.container.loc.start.line;
  }
  return line;
}


function getEndLineNumber(path) {
  let line = null;
  if (path.container && path.container.loc && path.container.loc.end) {
    line = path.container.loc.end.line;
  }
  return line;
}

function getCode(source, start, end) {
  if (!start || !end || !source) return '';
  let lines = source.split('\n');
  return lines.slice(start-1, end).join('\n');
}

module.exports = { hasStringArgument, hasTemplateQuasi, getLineNumber, getEndLineNumber, getCode, hasTemplateArgument, getQuasiArgument }

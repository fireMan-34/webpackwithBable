module.exports = function(babel) {
  const { types: t } =babel;
  return {
    visitor: {
      FunctionDeclaration(path) {
        if (path.node.id.type === "Identifier" && path.node.id.name === "add" && path.node.params.length.toString() === '2'){
          path.replaceWith(
            t.functionDeclaration(
              path.node.id,
              [ ...path.node.params,t.identifier('c') ],
              path.node.body,
              false,
              false,
            )
          )
        }
      }
    }
  }
}
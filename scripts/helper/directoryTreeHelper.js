const DIRECTORY_SEPARATOR = '/'
const PENULTIMATE = [-2, -1]

const getFilename = file => {
  return file.name.substring(0, file.name.indexOf(file.extension))
}

const getFilepaths = tree => {
  return (!hasChildren(tree))
    ? !isDirectoryFile(tree) ? [tree.path] : []
    : new Array().concat(...tree.children.map(child => getFilepaths(child)))
}

const getParentFolderName = file => {
  return file.path
    .split(DIRECTORY_SEPARATOR)
    .slice(...PENULTIMATE)
    .reduce((_, file) => file)
}

const hasChildren = tree => {
  return tree.children && tree.children.length > 0
}

const isDirectoryFile = file => {
  return getParentFolderName(file) === getFilename(file)
}

module.exports = {
  getFilepaths
}

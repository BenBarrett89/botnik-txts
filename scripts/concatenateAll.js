const directoryTree = require('directory-tree')
const mergeFiles = require('merge-files')
const path = require('path')

const getFilepaths = require('./helper/directoryTreeHelper').getFilepaths

const PARENT_FOLDER = '..'
const TXT_FOLDER = [PARENT_FOLDER, 'txt']

console.log('Starting concatenateAll script')

const tree = directoryTree('txt', {extensions: /\.txt/})

const inputPathList = getFilepaths(tree).map(filepath => path.resolve(__dirname, PARENT_FOLDER, filepath))
console.log(`Found ${inputPathList.length} files to concatenate:`)
inputPathList.forEach(inputPath => console.log(inputPath))

const outputPath = path.resolve(__dirname, ...TXT_FOLDER, 'txt.txt')
mergeFiles(inputPathList, outputPath).then((status) => {
  console.log('Merge attempted')
  if (status === true) console.log('Merge successful')
  else {
    console.log(`Issue with merge:\n${status}`)
  }
})

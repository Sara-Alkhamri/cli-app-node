const minimist = require('minimist')

module.exports = () => {

  //The reason we remove the first two arguments with .slice(2) is because the first arg will always be the interpreter followed by
  // the name of the file being interpreted. We only care about the arguments after that.  
  const args = minimist(process.argv.slice(2))
  console.log(args)
}
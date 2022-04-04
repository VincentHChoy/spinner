const spinner = function(){
  let x = 100
  const spinStates = ['\r|   ','\r/   ','\r--   ','\r\\   ']
  for (const states of spinStates) {
    setTimeout(() => {
      process.stdout.write(states)
    }, x)
    x += 200
  }
  setTimeout(() => {
    console.log('\n')
  }, x)
}
spinner()





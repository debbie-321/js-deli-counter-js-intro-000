function takeANumber(line, name){
  line.push(name);
  return(`Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`)
}
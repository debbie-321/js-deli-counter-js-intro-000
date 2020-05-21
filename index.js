function takeANumber(line, name){
  line.push(name);
  return(`Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line) {

  var newLine = [];

  for (i = 0; i < line.length; i++) {
    newLine.push(` ${[i + 1]}. ${line[i]}`);
  }

  if (line.length === 0) {
    return ("The line is currently empty.");
  }
  else {
    return (`The line is currently:${newLine}`);
    }
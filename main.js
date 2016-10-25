function toHTML(text) {
    var p = document.createElement("P");
    var t = document.createTextNode(text);
    p.appendChild(t);
    document.getElementById("box").appendChild(p)
}

//function findRow(){
  var row = 800; //document.getElementById('value').value-1;
  document.getElementById('box').innerHTML = "";
  lastLine = [1];
  for (var t = 0; t <= row; t++) {
    var line = [];
    line[0] = 1;
    for (var i = 0; i < lastLine.length; i++) {
      if(isNaN(lastLine[i] + lastLine[i+1]))
        break;
        line[i+1] = lastLine[i] + lastLine[i+1];
      }
      line[line.length]=1;
      toHTML(line)
      console.log(line);
      lastLine = line;
  }
  return line;
//}

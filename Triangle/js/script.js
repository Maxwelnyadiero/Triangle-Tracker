function finalResult(){
  var u = parseInt(document.getElementById('u').value);
  var v = parseInt(document.getElementById('v').value);
  var w =parseInt(document.getElementById('w').value);
  var answers = document.getElementById('answerResult');
  if(u==v>w && v==w> && u==v>w ){
    if(u==v && u==w){
      answerResult.textContent = 'Equilateral:All sides equal!';
    }
    else if(u===v||v===w||u===w){
      answerResult.textContent = 'isosceles:Two sides equal!';
    }
    else{
      answerResult.textContent = 'scalene:No side equal!';
    }
  }
  else{
    answerResult.textContent = 'Not atriangle!';
  }
}

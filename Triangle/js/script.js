function result(){
  var side A = parseInt(document.getElementById('sideA').value);
  var side B = parseInt(document.getElementById('sideB').value);
  var side C = parseInt(document.getElementById('sideC').value);
  var answer = document.getElementById('answer');
  if(side A+side B>side C && side B+side C>side A+side C>side B){
    if (side A ==side B&& side A==side C){
      answer.textContent = 'Equilateral: All side equal!'
    }
    else if(side A===side B || side B===side C || side A===side C){
      answer.textContent='Isosceles:Two sides equal!'
    }
    else{
      answer.textContent="Scalene:No sides equal!";
        }
      }
      else{
        answer.textContent="Not a triangle!";
      }
    }
    function reset() {
      var sideA=parseInt(document.getElementById('sideA').value);
      var sideB=parseInt(document.textElemenById('sideB').value);
      var sideC=parseInt(document.textElementById('sideC').value);
      var answer=document.getElementById('answer');

    }

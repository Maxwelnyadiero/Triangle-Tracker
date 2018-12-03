    function result() {
      var sideA = parseInt(document.getElementById('pointA').value);
      var sideB = parseInt(document.getElementById('pointB').value);
      var sideC = parseInt(document.getElementById('pointC').value);
       if (sideA === sideB && sideB === sideC) {
        alert("equilateral triangle.");
      }
       else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        alert("isosceles Triangle");
      }
       else if (sideA +sideB > sideC || sideB + sideC >= sideA || sideA + sideC <= sideB) {
        alert("scalene Triangle");
      }
       else {
        alert("Not a triangle");
      }
    }
    alert(result());

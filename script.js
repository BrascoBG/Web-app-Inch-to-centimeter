function calculateInch(){
  let inch = document.getElementById('inch').value;
  let centimeter = inch * 2.35;
  document.getElementById('demo').innerHTML = 'The result is ' + centimeter;
}


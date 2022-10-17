function Obtenercuadrado(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    
  
    var area = ((la)*la);
    var perimetro=(4*la);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
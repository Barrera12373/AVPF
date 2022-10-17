function Obtenercuadrado(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    
  
    var area = ((la)*la);
    var perimetro=(4*la);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }

  function Obtenertriangulo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var b = parseInt(document.getElementById("base").value);
    var h = parseInt(document.getElementById("altura").value);
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    var lc = parseInt(document.getElementById("ladoc").value);
    
  
    var area = (b * h) / 2;
    var perimetro=(la+lb+lc);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }

  function Obtenerrectangulo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    
  
    var area = (la * lb);
    var perimetro=2*(lb+la);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenerparalelogramo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    var h = parseInt(document.getElementById("altura").value);
  
    var area = (lb*h);
    var perimetro=2*(lb+la);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenerrombo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var ld = parseInt(document.getElementById("ladod").value);
    var d = parseInt(document.getElementById("diametro").value);
  
    var area = (d*ld)/2;
    var perimetro=(4*la);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenercometa(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    var ld = parseInt(document.getElementById("ladod").value);
    var d = parseInt(document.getElementById("diametro").value);
  
    var area = (d*ld)/2;
    var perimetro=2*(la+lb);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenertrapecio(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    var lc = parseInt(document.getElementById("ladoc").value);
    var B = parseInt(document.getElementById("base").value);
    var h = parseInt(document.getElementById("altura").value);
  
    var area = ((lb*B)*h)/2;
    var perimetro=(la+lb+lc+B);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
  function Obtenercirculo(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var r = parseInt(document.getElementById("radio").value);
  
    var area = (Math.PI*r)**2;
    var perimetro=(2*Math.PI *r);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
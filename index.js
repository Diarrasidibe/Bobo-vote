function wakati(){
    var a1=0;
    var a2=0;
    var a3=0;
    var a4=0;
    var a5=0;
    var a6=0;

    var c1= document.getElementById("choix1");
    var c2= document.getElementById("choix2");
    var c3= document.getElementById("choix3");
    var c4= document.getElementById("choix4");
    var c5= document.getElementById("choix5");
    var c6= document.getElementById("choix6");

    if (c1.checked) a1++;
    else if (c2.checked) a2++;
    else if (c3.checked) a3++;
    else if (c4.checked) a4++;
    else if (c5.checked) a5++;
    else if (c6.checked) a6++;
    

   document.getElementById("nombre1").innerHTML= a1;
   document.getElementById("nombre2").innerHTML= a2;
   document.getElementById("nombre3").innerHTML= a3;
   document.getElementById("nombre4").innerHTML= a4;
   document.getElementById("nombre5").innerHTML= a5;
   document.getElementById("nombre6").innerHTML= a6;
   v
   }
   
   setInterval(wakati,1000);
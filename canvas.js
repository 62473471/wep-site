var kullanici=document.getElementById("kullanici");
var gor =kullanici.getContext("2d");
var en=kullanici.width;
var boy=kullanici.height;
var x=en/2;
var y=boy/2;
var xx=2;
var yy=2;
var a=en/2;
var b=boy/2;
var aa=3;
var bb=3;
var resim=new Image();
resim.src="canvas.jpg";

  function kullanici_adi(){
     temizle();
     gor.beginPath();
     gor.fillStyle="#FFFF00";
     gor.fillRect(a,b,a+10,b+20);
     gor.closePath();
     gor.beginPath();
     gor.fillStyle="#0000ff";
     gor.fillRect(a,b,10-a,b+10);
     gor.closePath();
     a+=aa;
     b+=bb;
     gor.fill();
     if (a>en-100|| a<0)
       aa=-1*aa;
     if (b>boy-100||b<0)
       bb=-1*bb;
       
        gor.beginPath();
        gor.fillStyle="#ff0078";
        gor.font="60px Bold ";
        gor.fillText("YASIN YALCIN ",x-200,y);
        gor.fillText("PAYTHON DILI EGITIM SETI",x-350,y+70);
        gor.closePath();
        y=y+yy;
        gor.fill();
        if (y>boy+25)
          y=-1*70;
   
  }
   function temizle(){
     gor.beginPath();
     gor.drawImage(resim,0,0,en,boy);
     gor.closePath();
  }
setInterval(kullanici_adi,30);
// JavaScript Document
document.getElementById("qwe1").innerHTML = '<div class="header"> <div class="page-header"> <a href="../index.html" class="logo">CoDM Database</a> <div class="header-right"> <a href="../index.html">Stats</a> <a href="../MP.html">MP</a> <a href="../BR.html">BR</a> <a href="../Stuff.html">Stuff</a> <a href="../Contact.html">Contact</a> <a href="../About.html">About</a> </div> </div> </div>';
var aa1 = '<div class="row" id="asd"style="padding-top: 40px;display: none;"><div id="asd1" class="column a1"></div> <div id="asdf" class="column row" style="width: 400px;"><div id="asd2" class="column a2"></div> <div id="asd3" class="column a3"></div></div></div> <div id="zxc3"> <p id="ex" style="padding-left:20px"></p> <table cellspacing="0" border="0"> <colgroup width="142"></colgroup> <colgroup span="2" width="135"></colgroup> <tr> <td height="22" align="center" valign="bottom"><font color="#000000"><br></font></td> <td style="border-bottom: 1px solid #000000" align="center" valign="bottom"><font color="#000000">No attachments</font></td> <td style="border-bottom: 1px solid #000000" align="center" valign="bottom"><font color="#000000">Your build</font></td> </tr> <tr> <td style="border-right: 1px solid #000000" height="21" align="right" valign="bottom"><font color="#000000">Ads Time&nbsp;</font></td> <td style="border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><span id ="ftas"></span> s</font></td> <td style="border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><span id ="as"></span> s</font></td> </tr> <tr> <td style="border-right: 1px solid #000000" height="20" align="right" valign="bottom"><font color="#000000">Ads Movement Speed&nbsp;</font></td> <td style="border-top: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><span id ="ftams">&nbsp;</span> m/s</font></td> <td style="border-top: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><span id ="ams">&nbsp;</span> m/s</font></td> </tr> <tr> <td style="border-right: 1px solid #000000" height="20" align="right" valign="bottom"><font color="#000000">Movement Speed&nbsp;</font></td> <td style="border-top: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><span id ="ftms">&nbsp;</span> m/s</font></td> <td style="border-top: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><span id ="ms">&nbsp;</span> m/s</font></td> </tr> <tr> <td style="border-right: 1px solid #000000" height="20" align="right" valign="bottom"><font color="#000000">Sprint to Fire Speed&nbsp;</font></td> <td style="border-top: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000">Under Investigation</font></td> <td style=" border-top: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000">Under Investigation</font></td> </tr> <tr> <td style="border-right: 1px solid #000000" height="20" align="right" valign="bottom"><font color="#000000">Ammo Count&nbsp;</font></td> <td style="border-bottom: 1px solid #000000; border-top: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" sdval="30" sdnum="1033;"><font color="#000000"><span id ="ftac"></span></font></td> <td style="border-bottom: 1px solid #000000; border-top: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom" sdval="30" sdnum="1033;"><font color="#000000"><span id ="ac">&nbsp;</span></font></td> </tr> <tr> <td style="border-right: 1px solid #000000" height="21" align="right" valign="bottom"><font color="#000000">Reload Time&nbsp;</font></td> <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><span id ="ftrs">&nbsp;</span> s</font></td> <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="center" valign="bottom"><font color="#000000"><span id ="rs">&nbsp;</span> s</font></td> </tr> </table> <br> <div> <p style="padding-left:15px">Time between shots: <span id="Timebs"></span> ms</p> <p style="padding-left:15px">Rounds per minute: <span id="RPM"></span></p> <p style="padding-left:15px">Time to fire <span id="HMB"></span> shots: <span id="TFYS"></span> s</p> <br> <p style="padding-left:25px">Your build section and advantages-disadvantages section is based on data provided by "path.exe".</p> </div> </div> <br> <h2 style="padding-left:15px">Select distance</h2> <div class="slidecontainer" style="padding-left:15px; padding-right:15px"> <input type="range" min="1" max="100" value="6" class="slider" id="myRange"> <p>Distance: <span id="demo">6</span>m</p> </div> <br> <div style="padding-left:25px"> <div><input type="checkbox" id="Check1" value="Value10" onclick="selectOnlyThis(this.id)" checked/> Damage</div> <div><input type="checkbox" id="Check2" value="Value10" onclick="selectOnlyThis(this.id)" /> Time to Kill</div> <div><input type="checkbox" id="Check3" value="Value10" onclick="selectOnlyThis(this.id)" /> Shots to Kill</div> </div> <br> <br> <div style="padding-left:35px;"> <div><input type="checkbox" id="MpBr1" value="Value3" onclick="selectOnlyThis11(this.id)" checked/> MP&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <input type="checkbox" id="MpBr2" value="Value3" onclick="selectOnlyThis11(this.id)" /> BR</div> </div> <br> <br> <div style="padding-left:45px;" id="mpmode"> <div><input type="checkbox" id="MpHp1" value="100" onclick="hp = 100;selectOnlyThis12(this.id);" checked/> 100</div> <div><input type="checkbox" id="MpHp2" value="30"  onclick="hp = 30;selectOnlyThis12(this.id);"/> 30</div> <div><input type="checkbox" id="MpHp3" value="Value4" onclick="hp = document.getElementById("myRange2").value;selectOnlyThis12(this.id);" /> Select HP</div> </div> <div style="padding-left:35px;display: none;" class="row" id="brmode"> <span class="column left"> <div><input type="checkbox" id="BrHp1" value="100" onclick="hp = 100;selectOnlyThis13(this.id);" checked/> 100</div> <div><input type="checkbox" id="BrHp2" value="150"  onclick="hp = 150;selectOnlyThis13(this.id);"/> 150</div> <div><input type="checkbox" id="BrHp3" value="Value1" onclick="hp = document.getElementById("myRange2").value;selectOnlyThis13(this.id);" /> Select HP</div> </span> <span class="column right"> <div><input type="checkbox" id="Vest0" value="1" onclick="Vest = 1;Helmet = 1;selectOnlyThis14(this.id);" checked/> No Vest</div> <div><input type="checkbox" id="Vest1" value="1.25"  onclick="Vest = 0.75;Helmet = 1;selectOnlyThis14(this.id);"/> Vest Level 1</div> <div><input type="checkbox" id="Vest2" value="1.35" onclick="Vest = 0.65;Helmet = 1;selectOnlyThis14(this.id);" /> Vest Level 2</div> <div><input type="checkbox" id="Vest3" value="1.45" onclick="Vest = 0.55;Helmet = 0.55;selectOnlyThis14(this.id);" /> Vest Level 3</div> </span> </div> <p>&nbsp;</p> <!--<div class="slidecontainer" style="padding-left:20px;padding-right:20px;display: none;" id="HPBar"> <input type="range" min="1" max="100" value="100" class="slider" id="myRange2"> <p style="padding-left:13px">HP: <span id="demo2">100</span></p> </div> --> <div class="slidecontainer" style="padding-left:20px;padding-right:20px;display: none;" id="HPBar"> <input type="range" min="1" max="100" value="100" class="slider" id="myRange2"> <p style="padding-left:13px">HP: <span id="demo2"></span></p> </div> <br> <div style="padding-left:30px"> <button onclick="myResult()" class="btn info">Generate Result</button> <button onclick="cleanattach()" class="btn danger">Clear All Attachments</button> <button id="myBtn"class="btn success">Help/Guide</button> </div> <!-- The Modal --> <div id="myModal" class="modal"> <!-- Modal content --> <div class="modal-content" style="width:90%; height:98%;"> <div class="modal-header"> <span class="close">&times;</span> <h2>Explainations</h2> </div> <object style="width:100%; height:85%;" type="text/html" data="../Help.html" ></object> </div> </div> <div> <p style="color:green; padding-left:20px;" id="A1"></p> <p style="color:green; padding-left:20px;" id="A2"></p> <p style="color:green; padding-left:20px;" id="A3"></p> <p style="color:green; padding-left:20px;" id="A4"></p> <p style="color:green; padding-left:20px;" id="A5"></p> <p style="color:green; padding-left:20px;" id="A6"></p> <p style="color:green; padding-left:20px;" id="A7"></p> <p style="color:green; padding-left:20px;" id="A8"></p> <p style="color:green; padding-left:20px;" id="A9"></p> <p style="color:green; padding-left:20px;" id="A10"></p> <br> <p style="color:red; padding-left:20px;" id="B1"></p> <p style="color:red; padding-left:20px;" id="B2"></p> <p style="color:red; padding-left:20px;" id="B3"></p> <p style="color:red; padding-left:20px;" id="B4"></p> <p style="color:red; padding-left:20px;" id="B5"></p> <p style="color:red; padding-left:20px;" id="B6"></p> <p style="color:red; padding-left:20px;" id="B7"></p> <p style="color:red; padding-left:20px;" id="B8"></p> <p style="color:red; padding-left:20px;" id="B9"></p> <p style="color:red; padding-left:20px;" id="B10"></p> <p style="color:blue;" id="Q"></p> <p style="color:blue;" id="QQ"></p> </div>  <div style="padding-left:35px;display: none;" class="row" id="jj"> <div><input type="checkbox" id="rt1" value="1" onclick="selectOnlyThis15(this.id);" checked /> Recoil</div> <div><input type="checkbox" id="rt2" value="1" onclick="selectOnlyThis15(this.id);" /> Aim Shake</div> <div><input type="checkbox" id="rt3" value="1" onclick="selectOnlyThis15(this.id);" /> Aim Shake+Recoil</div> <div><input type="checkbox" id="rt4" value="1" onclick="selectOnlyThis15(this.id);" /> Every 3 bullets Recoil</div> </div> <div id="zxc2"> <div style="position: relative; left: 0; top: 0;"> <img src="../Frame.png" width="555" height="578" class="fishes" alt="" id="frame"/> <img src="../Dummy.png" width="239" height="469" alt="" class="fish" id="dummy"/> <img src="Reekoil.png" alt="" class="fis" id="reekoil"/> </div> <p id="rexv" style="padding-left:20px"></p> <p id="rexl" style="padding-left:20px"></p> </div> <div id="zxc1"> <div class="row"> <div class="container"> <img src="../H.png" id ="Himg" style="width:34%" alt="Head"/> <div id="Head" class="centered">27</div> </div> <div class="container"> <img src="../AC.png" id ="ACimg" style="width:34%" alt="Arms and Chest"/> <div id="Arms" class="top-left" style="left: 35%">23</div> <div id="Chest" class="centered">23</div> </div> <div class="container"> <img src="../S.png" id ="Simg" style="width:34%" alt="Stomach"/> <div id="Stomach" class="centered">23</div> </div> <div class="container"> <img src="../L.png" id ="Limg" style="width:34%" alt="Legs"/> <div id="Legs" class="top-center">23</div> </div> </div> <p style="padding-left:15px">*Damage range changes due to attachments is NOT yet represented in this image</p> <p id="b"></p> <p id="e"></p> </div> <div id="dialog" title="Error!"> <p id="alarttxt"></p> </div>';
document.getElementById("qwe3").innerHTML = aa1;
var l=document.getElementById("zxc3").innerHTML;
var m=document.getElementById("zxc2").innerHTML;
var n=document.getElementById("zxc1").innerHTML;
function myResize(){
  var w = window.innerWidth;
  if (w>=1130){
    //document.getElementById("asd2").style.width=((window.innerWidth-600)/2)+"px";
    //document.getElementById("asd3").style.width=((window.innerWidth-600)/2)+"px";
    document.getElementById("qwe2").innerHTML = aa1;
    document.getElementById("qwe3").innerHTML = "";
    document.getElementById("asd").style.display = "block";
    document.getElementById("asdf").style.width=(window.innerWidth-600)+"px";
    document.getElementById("asd1").innerHTML=m;
    document.getElementById("asd2").innerHTML=l;
    document.getElementById("asd3").innerHTML=n;
    document.getElementById("zxc1").innerHTML="";
    document.getElementById("zxc2").innerHTML="";
    document.getElementById("zxc3").innerHTML="";
  }
  else{
    document.getElementById("qwe3").innerHTML = aa1;
    document.getElementById("qwe2").innerHTML = "";
	document.getElementById("zxc3").innerHTML=l;
    document.getElementById("zxc2").innerHTML=m;
    document.getElementById("zxc1").innerHTML=n;
      document.getElementById("Himg").style.width="80%";
      document.getElementById("ACimg").style.width="80%";
      document.getElementById("Simg").style.width="80%";
      document.getElementById("Limg").style.width="80%";
      document.getElementById("Arms").style.left="15%";
  }
}
myResize();
$(function() {
  // this initializes the dialog (and uses some common options that I do)
  $("#dialog").dialog({
    autoOpen : false, modal : true, show : "blind", hide : "blind",
  dialogClass: "no-close",
  buttons: [
    {
      text: "OK",
      click: function() {
        $( this ).dialog( "close" );
      }
    }
  ]
  });
});
	//var o = 1
	//if (o=1){
	//changedummy();
	//o=2;
	//}
	var Helmet=1;
	var Vest=1;
	var hp=100;
	var kw;
	var kh;
	var kt;
	var kl;
	var fw=555;
	var fh=578;
	var ft=0;
	var fl=0;
	var dw=239;
	var dh=119;
	var dt=109;
	var dl=158;
	var amo = 0;
	var weapon = 11;
	var gun = 1;
	var as;
	var ms;
	var rs;
	var ac;
	var s2f;
	var ams;
	var pas;
	var pms;
	var prs;
	var pac;
	var pv;
	var pl;
	var pbsa;
	var ps2f;
	var pams;
	var mas;
	var mms;
	var mrs;
	var mac;
	var mv;
	var ml;
	var mbsa;
	var ms2f;
	var mams;
  var rh;
  var ra;
  var rc;
  var rs;
  var rl;
  var C1 = 0;
  var C2 = 0;
  var C3 = 0;
  var C4 = 0;
  var C5 = 0;
  var C6 = 0;
  var C7 = 0;
  var C8 = 0;
  var C9 = 0;
  var C;
	
	
	
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
		  
	
var slider1 = document.getElementById("myRange");
var output1 = document.getElementById("demo");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
	mag();
	changedummy();
	if (slider1.value == 100) {
output1.innerHTML = "99+ ";
}
	else{
output1.innerHTML = slider1.value;
}
}
slider1.onmouseup = function() {
	mag();
	changedummy();
	if (slider1.value == 100) {
output1.innerHTML = "99+ ";
}
	else{
output1.innerHTML = slider1.value;
}
}
slider1.ontouchend = function() {
	mag();
	changedummy();
	if (slider1.value == 100) {
output1.innerHTML = "99+ ";
}
	else{
output1.innerHTML = slider1.value;
}
}
document.getElementById("demo2").innerHTML = 100;

document.getElementById("myRange2").oninput = function (){
	document.getElementById("demo2").innerHTML = document.getElementById("myRange2").value;
	hp = document.getElementById("myRange2").value;
	
myvalue();
}
function shhpbar(){
	if (document.getElementById("MpHp3").checked == true && document.getElementById("MpBr1").checked == true){
		document.getElementById("HPBar").style.display = "block";
	}
	else if (document.getElementById("BrHp3").checked == true && document.getElementById("MpBr2").checked == true){
		document.getElementById("HPBar").style.display = "block";
	}
	else{
		document.getElementById("HPBar").style.display = "none";
	}
}
function myvalue(){
						
	if (document.getElementById("MpBr1").checked == true){
	if (document.getElementById("Check1").checked==true){
		document.getElementById("Head").innerHTML = rh;
		document.getElementById("Arms").innerHTML = ra;
		document.getElementById("Chest").innerHTML = rc;
		document.getElementById("Stomach").innerHTML = rs;		
		document.getElementById("Legs").innerHTML = rl;
	}
	else if (document.getElementById("Check3").checked==true){
		document.getElementById("Head").innerHTML = Math.ceil(hp/rh);
		document.getElementById("Arms").innerHTML = Math.ceil(hp/ra);
		document.getElementById("Chest").innerHTML = Math.ceil(hp/rc);
		document.getElementById("Stomach").innerHTML = Math.ceil(hp/rs);	
		document.getElementById("Legs").innerHTML = Math.ceil(hp/rl);
	}
	else if (document.getElementById("Check2").checked==true){
		document.getElementById("Head").innerHTML = parseFloat((Math.ceil((hp/rh)-1)*tbs).toFixed(2));
		document.getElementById("Arms").innerHTML = parseFloat((Math.ceil((hp/ra)-1)*tbs).toFixed(2));
		document.getElementById("Chest").innerHTML = parseFloat((Math.ceil((hp/rc)-1)*tbs).toFixed(2));
		document.getElementById("Stomach").innerHTML = parseFloat((Math.ceil((hp/rs)-1)*tbs).toFixed(2));	
		document.getElementById("Legs").innerHTML = parseFloat((Math.ceil((hp/rl)-1)*tbs).toFixed(2));
}
		}
		else if (document.getElementById("MpBr2").checked == true){
	if (document.getElementById("Check1").checked==true){
		document.getElementById("Head").innerHTML = parseFloat((rh*Helmet).toFixed(2));
		document.getElementById("Arms").innerHTML = parseFloat((ra*Vest).toFixed(2));
		document.getElementById("Chest").innerHTML = parseFloat((rc*Vest).toFixed(2));
		document.getElementById("Stomach").innerHTML = parseFloat((rs*Vest).toFixed(2));		
		document.getElementById("Legs").innerHTML = parseFloat((rl*Vest).toFixed(2));
	}
	else if (document.getElementById("Check3").checked==true){
		document.getElementById("Head").innerHTML = Math.ceil(hp/(rh*Helmet));
		document.getElementById("Arms").innerHTML = Math.ceil(hp/(ra*Vest));
		document.getElementById("Chest").innerHTML = Math.ceil(hp/(rc*Vest));
		document.getElementById("Stomach").innerHTML = Math.ceil(hp/(rs*Vest));	
		document.getElementById("Legs").innerHTML = Math.ceil(hp/(rl*Vest));
	}
	else if (document.getElementById("Check2").checked==true){
		document.getElementById("Head").innerHTML = parseFloat((Math.ceil((hp/(rh*Helmet))-1)*tbs).toFixed(2));
		document.getElementById("Arms").innerHTML = parseFloat((Math.ceil((hp/(ra*Vest))-1)*tbs).toFixed(2));
		document.getElementById("Chest").innerHTML = parseFloat((Math.ceil((hp/(rc*Vest))-1)*tbs).toFixed(2));
		document.getElementById("Stomach").innerHTML = parseFloat((Math.ceil((hp/(rs*Vest))-1)*tbs).toFixed(2));
		document.getElementById("Legs").innerHTML = parseFloat((Math.ceil((hp/(rl*Vest))-1)*tbs).toFixed(2));
	}
}
}
function myError(){	
  document.getElementById("alarttxt").innerHTML = "Error!!! This should never happen. If you know how to recreate this please contact the developer at atulpurna@gmail.com";
    $("#dialog").dialog("open");
output1.innerHTML = "Error ";
		document.getElementById("Head").innerHTML = "Error!!!";
		document.getElementById("Arms").innerHTML = "Error!!!";
		document.getElementById("Chest").innerHTML = "Error!!!";
		document.getElementById("Stomach").innerHTML = "Error!!!";		
		document.getElementById("Legs").innerHTML = "Error!!!";
$(function() {
  // this initializes the dialog (and uses some common options that I do)
  $("#dialog").dialog({
    autoOpen : false, modal : true, show : "blind", hide : "blind",
  dialogClass: "no-close",
  buttons: [
    {
      text: "Reload",
      click: function() {
        $( this ).dialog( "close" );
		  location.reload();
      }
    },     {
      text: "OK",
      click: function() {
        $( this ).dialog( "close" );
      }
    }
  ]
  });
});
}
var muzzle;
var barrel;
var scope;
var stock;
var laser;
var underbarrel;
var reargrip;
var ammunition;
var perk;
function integralsupp(){
	if (document.getElementById("Barrel5").checked == true){
		selectOnlyThis1("Muzzle1");
	}
}
function cliintegralsupp(){
	if (document.getElementById("Barrel5").checked == true && document.getElementById("Muzzle1").checked == false){
		selectOnlyThis1("Muzzle1");
  document.getElementById("alarttxt").innerHTML = 'Unable to equip a muzzle when "YKM Integral Suppressor" is equipped! Click "None" or choose any other barrel under the "Choose Barrels" Section to equip a muzzle.';
    $("#dialog").dialog("open");
	}
}
function selectOnlyThis(id) {
for (var i = 1;i <= 3; i++)
    {
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
	myvalue();
}	
function selectOnlyThis1(id) {
    for (var i = 1;i <= 16; i++)
    {
		if (document.getElementById("Muzzle" + i) != null) {  
        document.getElementById("Muzzle" + i).checked = false;
		}
    }
    document.getElementById(id).checked = true;
	if (document.getElementById("Muzzle1").checked == true){
		C1=0;
	}
	else if (document.getElementById("Muzzle1").checked == false) {
		C1=1;	
	}
	cliintegralsupp();
}
function selectOnlyThis2(id) {
    for (var i = 1;i <= 44; i++)
    {
		if (document.getElementById("Barrel" + i) != null) {  
        document.getElementById("Barrel" + i).checked = false;
		}
    }
    document.getElementById(id).checked = true;
	if (document.getElementById("Barrel1").checked == true){
		C2=0;
	}
	else if (document.getElementById("Barrel1").checked == false){
		C2=1;
	}
	integralsupp();
}
function selectOnlyThis3(id) {
    for (var i = 1;i <= 7; i++)
    {
        if (document.getElementById("Scope" + i) != null) {  
        document.getElementById("Scope" + i).checked = false;
		}
    }
    document.getElementById(id).checked = true;
	if (document.getElementById("Scope1").checked == true){
		C3=0;
	}
	else if (document.getElementById("Scope1").checked == false){
		C3=1;
	}
}
function selectOnlyThis4(id) {
    for (var i = 1;i <= 10; i++)
    {
        if (document.getElementById("Stock" + i) != null) {  
        document.getElementById("Stock" + i).checked = false;
		}
    }
    document.getElementById(id).checked = true;
	if (document.getElementById("Stock1").checked == true){
		C4=0;
	}
	else if (document.getElementById("Stock1").checked == false){
		C4=1;
	}
}
function selectOnlyThis5(id) {
    for (var i = 1;i <= 6; i++)
    {
        if (document.getElementById("Laser" + i) != null) {  
        document.getElementById("Laser" + i).checked = false;
		}
    }
    document.getElementById(id).checked = true;
	if (document.getElementById("Laser1").checked == true){
		C5=0;
	}
	else if (document.getElementById("Laser1").checked == false){
		C5=1;
	}
}
function selectOnlyThis6(id) {
    for (var i = 1;i <= 13; i++)
    {
        if (document.getElementById("Underbarrel" + i) != null) {  
        document.getElementById("Underbarrel" + i).checked = false;
		}
    }
    document.getElementById(id).checked = true;
	if (document.getElementById("Underbarrel1").checked == true){
		C6=0;
	}
	else if (document.getElementById("Underbarrel1").checked == false){
		C6=1;
	}
}
function selectOnlyThis7(id) {
    for (var i = 1;i <= 4; i++)
    {
        if (document.getElementById("RearGrip" + i) != null) {  
        document.getElementById("RearGrip" + i).checked = false;
		}
    }
    document.getElementById(id).checked = true;
	if (document.getElementById("RearGrip1").checked == true){
		C7=0;
	}
	else if (document.getElementById("RearGrip1").checked == false){
		C7=1;
	}
}
function selectOnlyThis9(id) {
    for (var i = 1;i <= 20; i++)
    {
        if (document.getElementById("Perk" + i) != null) {  
        document.getElementById("Perk" + i).checked = false;
		}
    }
    document.getElementById(id).checked = true;
	if (document.getElementById("Perk1").checked == true){
		C9=0;
	}
	else if (document.getElementById("Perk1").checked == false){
		C9=1;
	}
}
function selectOnlyThis10(id) {
    for (var i = 1;i <= 23; i++)
    {
        if (document.getElementById("Mod" + i) != null) {  
        document.getElementById("Mod" + i).checked = false;
		}
    }
    document.getElementById(id).checked = true;
}
function selectOnlyThis11(id) {
    for (var i = 1;i <= 2; i++)
    {
        document.getElementById("MpBr" + i).checked = false;
    }
    document.getElementById(id).checked = true;		
		if (document.getElementById("MpBr1").checked == true){
			document.getElementById("mpmode").style.display = "block";
			document.getElementById("brmode").style.display = "none";
			document.getElementById("Mods").style.display = "none";
			document.getElementById("myRange2").max = 100;
			if (document.getElementById("myRange2").value>100){
				document.getElementById("myRange2").value=100;
			}
			if (hp>100){
				hp=100;
			}
			for (var i = 1;i <= 2; i++){
				if (document.getElementById("MpHp" + i).checked == true){
					selectOnlyThis2("MpHp" + i);
					hp=document.getElementById("MpHp" + i).value;
				}
    		}
				if (document.getElementById("MpHp3").checked == true){
					selectOnlyThis2("MpHp3");
					hp = document.getElementById('myRange2').value;
				}		
		}
		else if (document.getElementById("MpBr2").checked == true){
			document.getElementById("mpmode").style.display = "none";
			document.getElementById("brmode").style.display = "block";
			document.getElementById("Mods").style.display = "block";
			document.getElementById("myRange2").max = 150;
			if (document.getElementById("myRange2").value==100){
				document.getElementById("myRange2").value=150;
			}
			for (var i = 1;i <= 2; i++){
				if (document.getElementById("BrHp" + i).checked == true){
					selectOnlyThis3("BrHp" + i);
					hp=document.getElementById("BrHp" + i).value;
				}
    		}
				if (document.getElementById("BrHp3").checked == true){
					selectOnlyThis2("BrHp3");
					hp = document.getElementById('myRange2').value;
				}	
		}
			document.getElementById("demo2").innerHTML = document.getElementById("myRange2").value;
		myvalue();
	shhpbar();
}
	function selectOnlyThis12(id) {
    for (var i = 1;i <= 3; i++)
    {
        document.getElementById("MpHp" + i).checked = false;
    }
    document.getElementById(id).checked = true;
	shhpbar();
		myvalue();
}
	function selectOnlyThis13(id) {
    for (var i = 1;i <= 3; i++)
    {
        document.getElementById("BrHp" + i).checked = false;
    }
    document.getElementById(id).checked = true;
	shhpbar();
		myvalue();
}
	function selectOnlyThis14(id) {
    for (var i = 0;i <= 3; i++)
    {
        document.getElementById("Vest" + i).checked = false;
    }
    document.getElementById(id).checked = true;
		myvalue();
}
	function selectOnlyThis15(id) {
    for (var i = 0;i <= 3; i++)
    {
        document.getElementById("rt" + i).checked = false;
    }
    document.getElementById(id).checked = true;
		myvalue();
}
function myResult(){
C=C1+C2+C3+C4+C5+C6+C7+C8+C9;
	if (C<6){
		
	as=as1;
	ms=ms1;
	rs=rs1;
	ac=ac1;
	ams=ams1;
		  
	kw=kw1;
	kh=kh1;		
		
	pas=0;
	pms=0;
	prs=0;
	pac=0;
	pv=0;
	pl=0;
	pbsa=0;
	ps2f=0;
	pams=0;
	mas=0;
	mms=0;
	mrs=0;
	mac=0;
	mv=0;
	ml=0;
	mbsa=0;
	ms2f=0;
	mams=0;
	document.getElementById("ex").innerHTML="";
		
  myMuzzle();
  myBarrel();
  myScope();
  myStock();
  myLaser();
  myUnderbarrel();
  myRearGrip();
  myAmmunition();
  myPerk();
  myMod();
		
  ams=parseFloat(ams.toFixed(4));
  document.getElementById("ams").innerHTML=ams;
  ms=parseFloat(ms.toFixed(4));
  document.getElementById("ms").innerHTML=ms;
  as=parseFloat(as.toFixed(4));
  document.getElementById("as").innerHTML=as;
  ac=parseFloat(ac.toFixed(0));
  document.getElementById("ac").innerHTML=ac;
  rs=parseFloat(rs.toFixed(2));
  document.getElementById("rs").innerHTML=rs;
			document.getElementById("ex").innerHTML="";
			document.getElementById("rexl").innerHTML="";
			document.getElementById("rexv").innerHTML="";
		
		pmas();
		pmams();
		pmms();
		pmrs();
		pmrk();
		
		changereekoil();
		
		shots();
		
		mag();
		
}
	else{
  document.getElementById("alarttxt").innerHTML = "Please select only a maximum of 5 attachments at a time! Click None to disselect attachment or click the clean all attachment to disselect all attachments!";
$(function() {
  // this initializes the dialog (and uses some common options that I do)
  $("#dialog").dialog({
    autoOpen : false, modal : true, show : "blind", hide : "blind",
  dialogClass: "no-close",
  buttons: [
    {
      text: "Clear ALL Attachments",
      click: function() {
        $( this ).dialog( "close" );
		  cleanattach();
      }
    },     {
      text: "OK",
      click: function() {
        $( this ).dialog( "close" );
      }
    }
  ]
  });
});
    $("#dialog").dialog("open");
	}
}
	
	function pmas(){
		if (pas==1){
			document.getElementById("as").innerHTML=document.getElementById("as").innerHTML+"+x";
			document.getElementById("ex").innerHTML="+x or -x means there is a missing variable. Sorry for the incovenience! It will be fixed soon";
		}
		if (mas==1){
			document.getElementById("as").innerHTML=document.getElementById("as").innerHTML+"-x";
			document.getElementById("ex").innerHTML="+x or -x means there is a missing variable. Sorry for the incovenience! It will be fixed soon";
		}
	}
	function pmams(){
		if (pams==1){
			document.getElementById("ams").innerHTML=document.getElementById("ams").innerHTML+"+x";
			document.getElementById("ex").innerHTML="+x or -x means there is a missing variable. Sorry for the incovenience! It will be fixed soon";
		}
		if (mams==1){
			document.getElementById("ams").innerHTML=document.getElementById("ams").innerHTML+"-x";
			document.getElementById("ex").innerHTML="+x or -x means there is a missing variable. Sorry for the incovenience! It will be fixed soon";
		}
	}
	function pmms(){
		if (pms==1){
			document.getElementById("ms").innerHTML=document.getElementById("ms").innerHTML+"+x";
			document.getElementById("ex").innerHTML="+x or -x means there is a missing variable. Sorry for the incovenience! It will be fixed soon";
		}
		if (mms==1){
			document.getElementById("ms").innerHTML=document.getElementById("ms").innerHTML+"-x";
			document.getElementById("ex").innerHTML="+x or -x means there is a missing variable. Sorry for the incovenience! It will be fixed soon";
		}
	}
	function pmrs(){
		if (prs==1){
			document.getElementById("rs").innerHTML=document.getElementById("rs").innerHTML+"+x";
			document.getElementById("ex").innerHTML="+x or -x means there is a missing variable. Sorry for the incovenience! It will be fixed soon";
		}
		if (mrs==1){
			document.getElementById("rs").innerHTML=document.getElementById("rs").innerHTML+"-x";
			document.getElementById("ex").innerHTML="+x or -x means there is a missing variable. Sorry for the incovenience! It will be fixed soon";
		}
	}
	function pmrk(){
		if (pl==1||ml==1||pv==1||mv==1){
		if (pl==1||ml==1){
			document.getElementById("rexv").innerHTML='A piece of vertical recoil data is missing and is not shown in the above image. Sorry for the incovenience! It will be fixed soon.';
		}
		else{
			document.getElementById("rexv").innerHTML="";
		}
		if (pv==1||mv==1){
			document.getElementById("rexl").innerHTML='A piece of horizontal recoil data is missing and is not shown in the above image. Sorry for the incovenience! It will be fixed soon.';
		}
		else{
			document.getElementById("rexl").innerHTML="";
		}
		}
		if (pl==1||ml==1){
			document.getElementById("rexv").innerHTML="A piece of recoil data is missing and is not shown in the above image.";
			document.getElementById("rexl").innerHTML="Sorry for the incovenience! It will be fixed soon.";
		}
	}
function myMuzzle(){
		if (document.getElementById("Muzzle1").checked == true){
  document.getElementById("A1").innerHTML = "";
  document.getElementById("B1").innerHTML = "";
  muzzle=0;
	}
     else if (document.getElementById("Muzzle2") != null&&document.getElementById("Muzzle2").checked == true){
  document.getElementById("A1").innerHTML = "+Silenced <br> +Muzzle Flash Hidden";
  document.getElementById("B1").innerHTML = "-20% Damage Range";
  muzzle=2;
	}
     else if (document.getElementById("Muzzle3") != null&&document.getElementById("Muzzle3").checked == true){
  document.getElementById("A1").innerHTML = "-7% Vertical Recoil <br> -7% Horizontal Recoil";
  document.getElementById("B1").innerHTML = "+Ads Time <br> +Aim Shake";
		 kw=(kw*93)/100;
		 kh=(kh*93)/100;
	pas=1;
	pbsa=1;
  muzzle=3;
	}
     else if (document.getElementById("Muzzle4") != null&&document.getElementById("Muzzle4").checked == true){
  document.getElementById("A1").innerHTML = "-10% Horizontal Recoil <br> -4% Vertical Recoil";
  document.getElementById("B1").innerHTML = "+Ads Time <br> +Aim Shake";
		 kw=(kw*90)/100;
		 kh=(kh*96)/100;
	pas=1;
	pbsa=1;
  muzzle=4;
	}
     else if (document.getElementById("Muzzle5") != null&&document.getElementById("Muzzle5").checked == true){
  document.getElementById("A1").innerHTML = "+Silenced <br> +Muzzle Flash Hidden";
  document.getElementById("B1").innerHTML = "+16.6 ms Ads Time <br> -Ads Movement Speed";
  muzzle=5;
  as=as+0.0166;
	mams=1;
	}
     else if (document.getElementById("Muzzle6") != null&&document.getElementById("Muzzle6").checked == true){
  document.getElementById("A1").innerHTML = "+Muzzle Flash Hidden <br> -Aim Shake <br> -8.5% Hipfire Spread";
  document.getElementById("B1").innerHTML = "+16.6 ms Ads Time <br> -Ads Movement Speed";
  muzzle=6;
  as=as+0.0166;
	mams=1;
	mbsa=1;
	}
     else if (document.getElementById("Muzzle7") != null&&document.getElementById("Muzzle7").checked == true){
  document.getElementById("A1").innerHTML = "+Silenced <br> +Muzzle Flash Hidden <br> +Damage Range";
  document.getElementById("B1").innerHTML = "+33.3 ms Ads Time <br> +Aim Shake <br> -1.5% Ads movement Speed";
  as=as+0.0333;
  ams=(ams*101.5)/100;
  muzzle=7;
	mbsa=1;
	 }
     else if (document.getElementById("Muzzle8") != null&&document.getElementById("Muzzle8").checked == true){
  document.getElementById("A1").innerHTML = "+Melee speed";
  document.getElementById("B1").innerHTML = "+Ads Time";
	pas=1;
  muzzle=8;
	}
     else if (document.getElementById("Muzzle9") != null&&document.getElementById("Muzzle9").checked == true){
  document.getElementById("A1").innerHTML = "+Silenced <br> +Muzzle Flash Hidden <br> +Damage Range <br> -Vertical Recoil";
  document.getElementById("B1").innerHTML = "+Ads Time <br> -Ads Movement Speed";
	pas=1;
	mams=1;	
  muzzle=9;
mv=1;
  as=as+0.0166;
	}
     else if (document.getElementById("Muzzle10") != null&&document.getElementById("Muzzle10").checked == true){
  document.getElementById("A1").innerHTML = "-Horizontal Recoil <br> -Vertical Recoil";
  document.getElementById("B1").innerHTML = "+Ads Time <br> +Aim Shake";
	pas=1;
	pbsa=1;
mv=1;
ml=1;
  muzzle=10;
  as=as+0.0166;
	}
     else if (document.getElementById("Muzzle11") != null&&document.getElementById("Muzzle11").checked == true){
  document.getElementById("A1").innerHTML = "+Muzzle Flash Hidden <br> -Aim Shake <br> -Hipfire Spread";
  document.getElementById("B1").innerHTML = "-Damage Range";
mbsa=1;
  muzzle=11;
	}
     else if (document.getElementById("Muzzle12") != null&&document.getElementById("Muzzle12").checked == true){
  document.getElementById("A1").innerHTML = "+Muzzle Flash Hidden <br> -Aim Shake <br> -Hipfire Spread";
  document.getElementById("B1").innerHTML = "-Damage Range";
mbsa=1;
  muzzle=12;
	}
  	 else if (document.getElementById("Muzzle13") != null&&document.getElementById("Muzzle13").checked == true){
  document.getElementById("A1").innerHTML = "+Damage Range <br> -Pellet Spread";
  document.getElementById("B1").innerHTML = "-Movement Speed <br> -Sprint to Fire Speed";
ms2f=1;
mms=1;
  muzzle=13;
	}
     else if (document.getElementById("Muzzle14") != null&&document.getElementById("Muzzle14").checked == true){
  document.getElementById("A1").innerHTML = "+Muzzle Flash Hidden <br> +Silenced <br> +Damage Range <br> -Pellet Spread";
  document.getElementById("B1").innerHTML = "+Ads Time <br> +Aim Shake while moving";
  muzzle=14;
pas=1;
	pbsa=1;
	}
     else if (document.getElementById("Muzzle15") != null&&document.getElementById("Muzzle15").checked == true){
  document.getElementById("A1").innerHTML = "-Aim Shake <br> -Horizontal Recoil";
  document.getElementById("B1").innerHTML = "+Ads Time <br> +Vertical Recoil";
  muzzle=15;
	mbsa=1;
	ml=1;
	pas=1;
	pv=1;
	}
     else if (document.getElementById("Muzzle16") != null&&document.getElementById("Muzzle16").checked == true){
  document.getElementById("A1").innerHTML = "-Aim Shake <br> -Horizontal Recoil";
  document.getElementById("B1").innerHTML = "+Ads Time <br> +Vertical Recoil";
  muzzle=16;
	mbsa=1;
	ml=1;
	pas=1;
	pv=1;
	}
}
function myBarrel(){
		if (document.getElementById("Barrel1") != null&&document.getElementById("Barrel1").checked == true){
  document.getElementById("A2").innerHTML = "";
  document.getElementById("B2").innerHTML = "";
  barrel=0;
	}
     else if (document.getElementById("Barrel2") != null&&document.getElementById("Barrel2").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	mas=1;
	pms=1;
	pbsa=1;
	pv=1;
  barrel=2;
	}
     else if (document.getElementById("Barrel3") != null&&document.getElementById("Barrel3").checked == true){
  document.getElementById("A2").innerHTML = "-Aim Shake <br> +Damage Range";
  document.getElementById("B2").innerHTML = "+Ads Time";
	mbsa=1;
	pas=1;
  barrel=3;
	}
     else if (document.getElementById("Barrel4") != null&&document.getElementById("Barrel4").checked == true){
  document.getElementById("A2").innerHTML = "-Aim Shake <br> +Damage Range <br> -Horizontal Recoil";
  document.getElementById("B2").innerHTML = "-Movement Speed <br> +Ads Time";
	mbsa=1;
	mms=1;
	pas=1;
	ml=1;
  barrel=4;
	}
     else if (document.getElementById("Barrel5") != null&&document.getElementById("Barrel5").checked == true){
  document.getElementById("A2").innerHTML = "+Silenced <br> +Hidden Muzzle Flash <br> -Aim Shake";
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Can't equip Muzzle";
	mbsa=1;
	pas=1;
  barrel=5;
	}
     else if (document.getElementById("Barrel6") != null&&document.getElementById("Barrel6").checked == true){
  document.getElementById("A2").innerHTML = "-Aim Shake <br> +Damage Range <br> -Vertical Recoil";
  document.getElementById("B2").innerHTML = "-Movement Speed <br> +Ads Time";
  barrel=6;
	mbsa=1;
	pas=1;
	mv=1;
	mms=1;
	}
     else if (document.getElementById("Barrel7") != null&&document.getElementById("Barrel7").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time";
  document.getElementById("B2").innerHTML = "+Aim Shake";
  barrel=7;
	mas=1;
	pbsa=1;
	}
     else if (document.getElementById("Barrel8") != null&&document.getElementById("Barrel8").checked == true){
  document.getElementById("A2").innerHTML = "+Silenced <br> +Hidden Muzzle Flash <br> -Aim Shake <br> -Horizontal Recoil";
  document.getElementById("B2").innerHTML = "+Ads Time";
	mbsa=1;
	ml=1;
	pas=1;
  barrel=8;
	}
     else if (document.getElementById("Barrel9") != null&&document.getElementById("Barrel9").checked == true){
  document.getElementById("A2").innerHTML = "-Aim Shake <br> +Damage Range";
  document.getElementById("B2").innerHTML = "+Ads Time";
	mbsa=1;
	pas=1;
  barrel=9;
	}
     else if (document.getElementById("Barrel10") != null&&document.getElementById("Barrel10").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	mas=1;
	pbsa=1;
pms=1;
pv=1;
  barrel=10;
	}
     else if (document.getElementById("Barrel11") != null&&document.getElementById("Barrel11").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake <br> -Vertical Recoil";
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Movement Speed";
	mbsa=1;
	pas=1;
	mms=1;
	mv=1;
  barrel=11;
	}
     else if (document.getElementById("Barrel12") != null&&document.getElementById("Barrel12").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
	pms=1;
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	pbsa=1;
	pv=1;
	mas=1;
  barrel=12;
	}
     else if (document.getElementById("Barrel13") != null&&document.getElementById("Barrel13").checked == true){
  document.getElementById("A2").innerHTML = "-Aim Shake <br> +Damage Range";
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time";
	pas=1;
  barrel=13;
	}
     else if (document.getElementById("Barrel14") != null&&document.getElementById("Barrel14").checked == true){
  document.getElementById("A2").innerHTML = "-Aim Shake <br> +Damage Range <br> -Horizontal Recoil";
	ml=1;
	mbsa=1;
  document.getElementById("B2").innerHTML = "-Movement Speed <br> +Ads Time";
	mms=1;
	pas=1;
  barrel=14;
	}
     else if (document.getElementById("Barrel15") != null&&document.getElementById("Barrel15").checked == true){
  document.getElementById("A2").innerHTML = "+Silenced <br> +Hidden Muzzle Flash <br> -Aim Shake";
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time";
	pas=1;
  barrel=15;
	}
     else if (document.getElementById("Barrel16") != null&&document.getElementById("Barrel16").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time";
  document.getElementById("B2").innerHTML = "+Aim Shake";
	pbsa=1;
	mas=1;
  barrel=16;
	}
     else if (document.getElementById("Barrel17") != null&&document.getElementById("Barrel17").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake <br> -Vertical Recoil";
	mbsa=1;
	mv=1;
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Movement Speed";
	mms=1;
	pas=1;
  barrel=17;
	}
     else if (document.getElementById("Barrel18") != null&&document.getElementById("Barrel18").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake <br> -Vertical Recoil";
	mbsa=1;
	mv=1;
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Movement Speed";
	mms=1;
	pas=1;
  barrel=18;
	}
     else if (document.getElementById("Barrel19") != null&&document.getElementById("Barrel19").checked == true){
  document.getElementById("A2").innerHTML = "-Aim Shake <br> +Damage Range <br> -Horizontal Recoil";
	ml=1;
	mbsa=1;
  document.getElementById("B2").innerHTML = "-Movement Speed <br> +Ads Time";
	mms=1;
	pas=1;
  barrel=19;
	}
     else if (document.getElementById("Barrel20") != null&&document.getElementById("Barrel20").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
	pms=1;
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	pbsa=1;
	pv=1;
	mas=1;
  barrel=20;
	}
     else if (document.getElementById("Barrel21") != null&&document.getElementById("Barrel21").checked == true){
  document.getElementById("A2").innerHTML = "-Aim Shake <br> +Damage Range";
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time";
	pas=1;
  barrel=21;
	}
     else if (document.getElementById("Barrel22") != null&&document.getElementById("Barrel22").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake <br> -Vertical Recoil";
	mbsa=1;
	mv=1;
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Movement Speed";
	mms=1;
	pas=1;
  barrel=22;
	}
     else if (document.getElementById("Barrel23") != null&&document.getElementById("Barrel23").checked == true){
  document.getElementById("A2").innerHTML = "+Silenced <br> +Hidden Muzzle Flash <br> -Ads Time";
	mas=1;
  document.getElementById("B2").innerHTML = "+Aim Shake";
	pbsa=1;
  barrel=23;
	}
     else if (document.getElementById("Barrel24") != null&&document.getElementById("Barrel24").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	pms=1;
	pbsa=1;
	pv=1;
	mas=1;
  barrel=24;
	}
     else if (document.getElementById("Barrel25") != null&&document.getElementById("Barrel25").checked == true){
  document.getElementById("A2").innerHTML = "-Aim Shake <br> +Damage Range";
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time";
	pas=1;
  barrel=25;
	}
     else if (document.getElementById("Barrel26") != null&&document.getElementById("Barrel26").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	pbsa=1;
	pv=1;
	mas=1;
  barrel=26;
	}
     else if (document.getElementById("Barrel27") != null&&document.getElementById("Barrel27").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time";
  document.getElementById("B2").innerHTML = "-Damage Range";
	mas=1;
  barrel=27;
	}
     else if (document.getElementById("Barrel28") != null&&document.getElementById("Barrel28").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	pbsa=1;
	pv=1;
	mas=1;
  barrel=28;
	}
     else if (document.getElementById("Barrel29") != null&&document.getElementById("Barrel29").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time";
  document.getElementById("B2").innerHTML = "-Damage Range";
	mas=1;
  barrel=29;
	}
     else if (document.getElementById("Barrel30") != null&&document.getElementById("Barrel30").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake <br> -Horizontal Recoil";
	ml=1;
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Movement Speed";
	mms=1;
	pas=1;
  barrel=30;
	}
     else if (document.getElementById("Barrel31") != null&&document.getElementById("Barrel31").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time";
	mas=1;
  document.getElementById("B2").innerHTML = "+Aim Shake";
	pbsa=1;
  barrel=31;
	}
     else if (document.getElementById("Barrel32") != null&&document.getElementById("Barrel32").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake <br> -Vertical Recoil";
	mbsa=1;
	mv=1;
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Movement Speed";
	mms=1;
	pas=1;
  barrel=32;
	}
     else if (document.getElementById("Barrel33") != null&&document.getElementById("Barrel33").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake <br> -Horizontal Recoil";
	ml=1;
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Movement Speed";
	mms=1;
	pas=1;
  barrel=33;
	}
     else if (document.getElementById("Barrel34") != null&&document.getElementById("Barrel34").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
	pms=1;
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	pbsa=1;
	pv=1;
	mas=1;
  barrel=34;
	}
     else if (document.getElementById("Barrel35") != null&&document.getElementById("Barrel35").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time";
	mas=1;
  document.getElementById("B2").innerHTML = "-Damage Range";
  barrel=35;
	}
     else if (document.getElementById("Barrel36") != null&&document.getElementById("Barrel36").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake";
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time";
	pas=1;
  barrel=36;
	}
     else if (document.getElementById("Barrel37") != null&&document.getElementById("Barrel37").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time";
  document.getElementById("B2").innerHTML = "+Aim Shake";
	pbsa=1;
	mas=1;
  barrel=37;
	}
     else if (document.getElementById("Barrel38") != null&&document.getElementById("Barrel38").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake <br> -Horizontal Recoil";
	ml=1;
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Movement Speed";
	mms=1;
	pas=1;
  barrel=38;
	}
     else if (document.getElementById("Barrel39") != null&&document.getElementById("Barrel39").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake <br> -Vertical Recoil";
	mbsa=1;
	mv=1;
  document.getElementById("B2").innerHTML = "+Ads Time <br> -Movement Speed";
	mms=1;
	pas=1;
  barrel=39;
	}
     else if (document.getElementById("Barrel40") != null&&document.getElementById("Barrel40").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
	pms=1;
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	pbsa=1;
	pv=1;
	mas=1;
  barrel=40;
	}
     else if (document.getElementById("Barrel41") != null&&document.getElementById("Barrel41").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake";
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time";
	pas=1;
  barrel=41;
	}
     else if (document.getElementById("Barrel42") != null&&document.getElementById("Barrel42").checked == true){
  document.getElementById("A2").innerHTML = "-Ads Time <br> +Movement Speed";
	pms=1;
  document.getElementById("B2").innerHTML = "+Aim Shake <br> +Vertical Recoil";
	pbsa=1;
	pv=1;
	mas=1;
  barrel=42;
	}
     else if (document.getElementById("Barrel43") != null&&document.getElementById("Barrel43").checked == true){
  document.getElementById("A2").innerHTML = "+Damage Range <br> -Aim Shake";
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time";
	pas=1;
  barrel=43;
	}
     else if (document.getElementById("Barrel44") != null&&document.getElementById("Barrel44").checked == true){
  document.getElementById("A2").innerHTML = "+Silenced <br> +Hidden Muzzle Flash <br> -Aim Shake";
	mbsa=1;
  document.getElementById("B2").innerHTML = "+Ads Time";
	pas=1;
  barrel=44;
	}
}
function myScope(){
		if (document.getElementById("Scope1") != null&&document.getElementById("Scope1").checked == true){
  document.getElementById("A3").innerHTML = "";
  document.getElementById("B3").innerHTML = "";
  scope=0;
	}
     else if (document.getElementById("Scope2") != null&&document.getElementById("Scope2").checked == true){
  document.getElementById("A3").innerHTML = "+Aim Shake Visible";
  document.getElementById("B3").innerHTML = "";
  scope=0;
	}
     else if (document.getElementById("Scope3") != null&&document.getElementById("Scope3").checked == true){
  document.getElementById("A3").innerHTML = "+Aim Shake Visible";
  document.getElementById("B3").innerHTML = "+Ads Time";
	pas=1;
  scope=3;
	}
     else if (document.getElementById("Scope4") != null&&document.getElementById("Scope4").checked == true){
  document.getElementById("A3").innerHTML = "+Aim Shake Visible";
  document.getElementById("B3").innerHTML = "+Ads Time";
	pas=1;
  scope=4;
	}
     else if (document.getElementById("Scope5") != null&&document.getElementById("Scope5").checked == true){
  document.getElementById("A3").innerHTML = "+Aim Shake Visible";
  document.getElementById("B3").innerHTML = "+Ads Time";
	pas=1;
  scope=5;
	}
     else if (document.getElementById("Scope6") != null&&document.getElementById("Scope6").checked == true){
  document.getElementById("A3").innerHTML = "+Aim Shake Visible";
  document.getElementById("B3").innerHTML = "+Ads Time";
	pas=1;
  scope=6;
	}
}
function myStock(){
		if (document.getElementById("Stock1") != null&&document.getElementById("Stock1").checked == true){
  document.getElementById("A4").innerHTML = "";
  document.getElementById("B4").innerHTML = "";
  stock=0;
	}
	 else if (document.getElementById("Stock2") != null&&document.getElementById("Stock2").checked == true){
  document.getElementById("A4").innerHTML = "+7.5% Ads Movement Speed";
  document.getElementById("B4").innerHTML = "+Aim Shake";
	pbsa=1;
  stock=0;
  ams=(ams*107.5)/100;
	}
     else if (document.getElementById("Stock3") != null&&document.getElementById("Stock3").checked == true){
  document.getElementById("A4").innerHTML = "-Aim Shake <br> +10% Flinch Stability <br> -10% Horizontal Recoil";
	mbsa=1;
  document.getElementById("B4").innerHTML = "-3.5% Ads movement Speed";
		 kw=(kw*90)/100;
  stock=0;
  ams=(ams*97.5)/100;
	}
     else if (document.getElementById("Stock4") != null&&document.getElementById("Stock4").checked == true){
  document.getElementById("A4").innerHTML = "-16.6 ms Ads Time";
  document.getElementById("B4").innerHTML = "+Aim Shake <br> -Flinch Stability <br> +7% Vertical Recoil";
	pbsa=1;
		 kh=(kh*107)/100;
  stock=0;
  as=as-0.0166;
	}
	else if (document.getElementById("Stock5") != null&&document.getElementById("Stock5").checked == true){
  document.getElementById("A4").innerHTML = "-33.3 ms Ads Time <br> +3% Movement Speed";
  document.getElementById("B4").innerHTML = "+Aim shake <br> +10% Flinch Stability <br> +17% Vertical Recoil";
	pbsa=1;
  stock=0;
  as=as-0.0333;
  ms=(ms*103)/100;
		 kh=(kh*117)/100;
	}

}
function myLaser(){
		if (document.getElementById("Laser1") != null&&document.getElementById("Laser1").checked == true){
  document.getElementById("A5").innerHTML = "";
  document.getElementById("B5").innerHTML = "";
  laser=0;
	}
     else if (document.getElementById("Laser2") != null&&document.getElementById("Laser2").checked == true){
  document.getElementById("A5").innerHTML = "-21.5% Hipfire Spread";
  document.getElementById("B5").innerHTML = "";
  laser=0;
	}
     else if (document.getElementById("Laser3") != null&&document.getElementById("Laser3").checked == true){
  document.getElementById("A5").innerHTML = "-26.5% Hipfire Spread <br> +33.3 ms Sprint to Fire Speed";
  document.getElementById("B5").innerHTML = "+Laser Visible to Enemies when NOT Ads-ing";
  laser=0;
	}
     else if (document.getElementById("Laser4") != null&&document.getElementById("Laser4").checked == true){
  document.getElementById("A5").innerHTML = "-33.3 ms Ads Time <br> -Aim Shake";
	mbsa=1;
  document.getElementById("B5").innerHTML = "+Laser Visible to Enemies when Ads-ing";
  laser=0;
  as=as-0.0333;
	}
}
function myUnderbarrel(){
		if (document.getElementById("Underbarrel1") != null&&document.getElementById("Underbarrel1").checked == true){
  document.getElementById("A6").innerHTML = "";
  document.getElementById("B6").innerHTML = "";
  underbarrel=0;
	}
     else if (document.getElementById("Underbarrel2") != null&&document.getElementById("Underbarrel2").checked == true){
  document.getElementById("A6").innerHTML = "-7% Vertical Recoil <br> -Aim Shake";
	mbsa=1;
  document.getElementById("B6").innerHTML = "-1% Movement Speed";
		 kh=(kh*93)/100;
  underbarrel=0;
  ms=(ms*99)/100;
	}
     else if (document.getElementById("Underbarrel3") != null&&document.getElementById("Underbarrel3").checked == true){
  document.getElementById("A6").innerHTML = "-7% Vertical Recoil <br> -26.2% Hipfire Spread";
  document.getElementById("B6").innerHTML = "-3% Ads Movement Speed <br> +16.6 ms Ads Time";
		 kh=(kh*93)/100;
  underbarrel=0;
  as=as+0.0166;
  ams=(ams*97)/100;
	}
     else if (document.getElementById("Underbarrel4") != null&&document.getElementById("Underbarrel4").checked == true){
  document.getElementById("A6").innerHTML = "-14% Vertical Recoil";
  document.getElementById("B6").innerHTML = "+16.6 ms Ads Time";
		 kh=(kh*86)/100;
  underbarrel=0;
  as=as+0.0166;
	}
     else if (document.getElementById("Underbarrel5") != null&&document.getElementById("Underbarrel5").checked == true){
  document.getElementById("A6").innerHTML = "-17% Vertical Recoil <br> -Aim Shake";
	mbsa=1;
  document.getElementById("B6").innerHTML = "+33.3 ms Ads Time <br> -3% Ads Movement Speed";
		 kh=(kh*83)/100;
  underbarrel=0;
  as=as+0.0333;
  ams=(ams*97)/100;
	}
     else if (document.getElementById("Underbarrel6") != null&&document.getElementById("Underbarrel6").checked == true){
  document.getElementById("A6").innerHTML = "-Aim Shake";
	mbsa=1;
  document.getElementById("B6").innerHTML = "-0.5% Movement Speed";
  underbarrel=0;
  ms=(ms*99.5)/100;
	}
     else if (document.getElementById("Underbarrel7") != null&&document.getElementById("Underbarrel7").checked == true){
  document.getElementById("A6").innerHTML = "-Aim Shake <br> -Horizontal Recoil";
	ml=1;
	mbsa=1;
  document.getElementById("B6").innerHTML = "-Movement Speed <br> +Ads Time";
	mms=1;
	pas=1;
  underbarrel=7;
	}
  
}
function myRearGrip(){
		if (document.getElementById("RearGrip1") != null&&document.getElementById("RearGrip1").checked == true){
  document.getElementById("A7").innerHTML = "";
  document.getElementById("B7").innerHTML = "";
  reargrip=0;
	}
     else if (document.getElementById("RearGrip2") != null&&document.getElementById("RearGrip2").checked == true){
  document.getElementById("A7").innerHTML = "-16.6 ms Ads Time <br> -16.6 ms Sprint to Fire Speed";
  document.getElementById("B7").innerHTML = "+Aim Shake";
	pbsa=1;
  reargrip=0;
  as=as-0.0166;
	}
     else if (document.getElementById("RearGrip3") != null&&document.getElementById("RearGrip3").checked == true){
  document.getElementById("A7").innerHTML = "-Aim Shake";
	mbsa=1;
  document.getElementById("B7").innerHTML = "-1% Ads Movement Speed";
  reargrip=0;
  ams=(ams*99)/100;
	}
     else if (document.getElementById("RearGrip4") != null&&document.getElementById("RearGrip4").checked == true){
  document.getElementById("A7").innerHTML = "-14% Vertical Recoil";
  document.getElementById("B7").innerHTML = "+Aim Shake";
	pbsa=1;
  reargrip=0;
		 kh=(kh*86)/100;
	}
  
}
function myPerk(){
		if (document.getElementById("Perk1") != null&&document.getElementById("Perk1").checked == true){
  document.getElementById("A9").innerHTML = "";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk2") != null&&document.getElementById("Perk2").checked == true){
  document.getElementById("A9").innerHTML = "+Enemy takes longer time to heal";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk3") != null&&document.getElementById("Perk3").checked == true){
  document.getElementById("A9").innerHTML = "+More damage from wallbangs";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk4") != null&&document.getElementById("Perk4").checked == true){
  document.getElementById("A9").innerHTML = "+Speed boost after respawning";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk5") != null&&document.getElementById("Perk5").checked == true){
  document.getElementById("A9").innerHTML = "+Damage Range";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk6") != null&&document.getElementById("Perk6").checked == true){
  document.getElementById("A9").innerHTML = "+Recover few bullets after killing someone within 9.5 meters";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk7") != null&&document.getElementById("Perk7").checked == true){
  document.getElementById("A9").innerHTML = "-Reload Speed";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk8") != null&&document.getElementById("Perk8").checked == true){
  document.getElementById("A9").innerHTML = "+You spawn with double the deafault bullets";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk9") != null&&document.getElementById("Perk9").checked == true){
  document.getElementById("A9").innerHTML = "+Slows enemy down after you shoot them";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk10") != null&&document.getElementById("Perk10").checked == true){
  document.getElementById("A9").innerHTML = "+Randomly loads one bullets into the magazine";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk11") != null&&document.getElementById("Perk11").checked == true){
  document.getElementById("A9").innerHTML = "+Headshoting slows enemy down";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk12") != null&&document.getElementById("Perk12").checked == true){
  document.getElementById("A9").innerHTML = "+Faster Weapon Switch";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk13") != null&&document.getElementById("Perk13").checked == true){
  document.getElementById("A9").innerHTML = "+Death marker of enemy you killed is hidden from the enemies";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk14") != null&&document.getElementById("Perk14").checked == true){
  document.getElementById("A9").innerHTML = "+Reload faster when the low magazine warning appears";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk15") != null&&document.getElementById("Perk15").checked == true){
  document.getElementById("A9").innerHTML = "+Increased Hipfire while Jumping and Sliding Accuracy";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk16") != null&&document.getElementById("Perk16").checked == true){
  document.getElementById("A9").innerHTML = "+Recover bullets when you get a double kill";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk17") != null&&document.getElementById("Perk17").checked == true){
  document.getElementById("A9").innerHTML = "+Reload faster after a kill";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk18") != null&&document.getElementById("Perk18").checked == true){
  document.getElementById("A9").innerHTML = "+Speed up after a kill";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk19") != null&&document.getElementById("Perk19").checked == true){
  document.getElementById("A9").innerHTML = "+Slows enemy down after you shoot them";
  document.getElementById("B9").innerHTML = "";
	 }
     else if (document.getElementById("Perk20") != null&&document.getElementById("Perk20").checked == true){
  document.getElementById("A9").innerHTML = "+Take less damage from explosives while sliding";
  document.getElementById("B9").innerHTML = "";
	 }
}
function myMod(){
		if (document.getElementById("Mod1") != null&&document.getElementById("Mod1").checked == true){
  document.getElementById("A10").innerHTML = "";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod2") != null&&document.getElementById("Mod2").checked == true){
  document.getElementById("A10").innerHTML = "+5 Magazine Size <br> -Reload Time";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod3") != null&&document.getElementById("Mod3").checked == true){
  document.getElementById("A10").innerHTML = "+5 Magazine Size <br> -Reload Time";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod4") != null&&document.getElementById("Mod4").checked == true){
  document.getElementById("A10").innerHTML = "+10 Magazine Size <br> -Reload Time";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod5") != null&&document.getElementById("Mod5").checked == true){
  document.getElementById("A10").innerHTML = "+10 Magazine Size <br> -Reload Time";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod6") != null&&document.getElementById("Mod6").checked == true){
  document.getElementById("A10").innerHTML = "+20 Magazine Size <br> -Reload Time";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod7") != null&&document.getElementById("Mod7").checked == true){
  document.getElementById("A10").innerHTML = "-Horizontal Recoil <br> -Vertical Recoil";
	ml=1;
	mv=1;
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod8") != null&&document.getElementById("Mod8").checked == true){
  document.getElementById("A10").innerHTML = "-Horizontal Recoil <br> -Vertical Recoil";
	ml=1;
	mv=1;
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod9") != null&&document.getElementById("Mod9").checked == true){
  document.getElementById("A10").innerHTML = "-Horizontal Recoil <br> -Vertical Recoil";
	ml=1;
	mv=1;
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod10") != null&&document.getElementById("Mod10").checked == true){
  document.getElementById("A10").innerHTML = "-Horizontal Recoil <br> -Vertical Recoil";
	ml=1;
	mv=1;
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod11") != null&&document.getElementById("Mod11").checked == true){
  document.getElementById("A10").innerHTML = "-Horizontal Recoil <br> -Vertical Recoil";
	ml=1;
	mv=1;
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod12") != null&&document.getElementById("Mod12").checked == true){
  document.getElementById("A10").innerHTML = "-Aim Shake";
	mbsa=1;
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod13") != null&&document.getElementById("Mod13").checked == true){
  document.getElementById("A10").innerHTML = "-Aim Shake";
	mbsa=1;
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod14") != null&&document.getElementById("Mod14").checked == true){
  document.getElementById("A10").innerHTML = "-Aim Shake";
	mbsa=1;
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod15") != null&&document.getElementById("Mod15").checked == true){
  document.getElementById("A10").innerHTML = "-Aim Shake";
	mbsa=1;
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod16") != null&&document.getElementById("Mod16").checked == true){
  document.getElementById("A10").innerHTML = "+Damage Range";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod17") != null&&document.getElementById("Mod17").checked == true){
  document.getElementById("A10").innerHTML = "+Damage Range";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod18") != null&&document.getElementById("Mod18").checked == true){
  document.getElementById("A10").innerHTML = "+Damage Range";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod19") != null&&document.getElementById("Mod19").checked == true){
  document.getElementById("A10").innerHTML = "+Damage Range";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod20") != null&&document.getElementById("Mod20").checked == true){
  document.getElementById("A10").innerHTML = "+Blinds Enemy for: 0 seconds";
  document.getElementById("B10").innerHTML = "-Flaslight Recharge Time: 0 seconds";
	 }
     else if (document.getElementById("Mod21") != null&&document.getElementById("Mod21").checked == true){
  document.getElementById("A10").innerHTML = "+Increases running speed after Ads-ing for: 0 seconds";
  document.getElementById("B10").innerHTML = "Speed Boost Timeout: 0 seconds";
	 }
     else if (document.getElementById("Mod22") != null&&document.getElementById("Mod22").checked == true){
  document.getElementById("A10").innerHTML = "+Hipfire Accuracy";
  document.getElementById("B10").innerHTML = "";
	 }
     else if (document.getElementById("Mod23") != null&&document.getElementById("Mod23").checked == true){
  document.getElementById("A10").innerHTML = "+Supessed <br> +Muzzle Flash Hidden <br> +Gunfire Hidden in Enemy Minimap";
  document.getElementById("B10").innerHTML = "";
	 }
}
	function cleanattach(){
		selectOnlyThis1("Muzzle1");
		selectOnlyThis2("Barrel1");
		selectOnlyThis3("Scope1");
		selectOnlyThis4("Stock1");
		selectOnlyThis5("Laser1");
		selectOnlyThis6("Underbarrel1");
		selectOnlyThis7("RearGrip1");
		selectOnlyThis8("Ammunition1");
		selectOnlyThis9("Perk1");
		selectOnlyThis10("Mod1");
		myResult();
		mag();
	}
	
		  function changereekoil(){
			  
    document.getElementById('reekoil').width=kw;
    document.getElementById('reekoil').height=kh;
			  kt=(fh-kh)/2;
			  kt=kt.toFixed(0);		  
			  kl=(fw-kw)/2;
			  kl=kl.toFixed(0);
			  document.getElementById('reekoil').style.top=kt+"px";
			  document.getElementById('reekoil').style.left=kl+"px";
			  
		  }
	function changedummy(){
		var sv=slider1.value-1;
		if (sv > 5 && sv <= 100) {
			dwpsv=sv/3.050625;
			dwp=Math.pow(dwpsv, 1.405914);
			dw=16.5582 + ((854.1811 - 16.5582)/(1 + dwp));
			dw=dw.toFixed(0);
			dhpsc=sv/1.860625;
			dhp=Math.pow(dhpsc,1.28254);
			dh=26.00521 + ((2589.355 - 26.00521)/(1 + dhp));
			dh=dh.toFixed(0);
			dt=fh-dh;
			dt=dt.toFixed(0);
			dl=(fw-dw)/2;
			dl=dl.toFixed(0);
    		document.getElementById('dummy').width=dw;
    		document.getElementById('dummy').height=dh;
  //document.getElementById("b").innerHTML = dw;
  //document.getElementById("e").innerHTML = dh;
			document.getElementById('dummy').style.top=dt+"px";
			document.getElementById('dummy').style.left=dl+"px";
		}/*
		else if (sv == 100) {
			dwpsv=50/3.050625;
			dwp=Math.pow(dwpsv, 1.405914);
			dw=16.5582 + ((854.1811 - 16.5582)/(1 + dwp));
			dw=dw.toFixed(0);
			dhpsc=50/1.860625;
			dhp=Math.pow(dhpsc,1.28254);
			dh=26.00521 + ((2589.355 - 26.00521)/(1 + dhp));
			dh=dh.toFixed(0);
			dt=fh-dh;
			dt=dt.toFixed(0);
			dl=(fw-dw)/2;
			dl=dl.toFixed(0);
    		document.getElementById('dummy').width=dw;
    		document.getElementById('dummy').height=dh;
  //document.getElementById("b").innerHTML = dw;
  //document.getElementById("e").innerHTML = dh;
			document.getElementById('dummy').style.top=dt+"px";
			document.getElementById('dummy').style.left=dl+"px";
		}*/
		else{
			dwpsv=5/3.050625;
			dwp=Math.pow(dwpsv, 1.405914);
			dw=16.5582 + ((854.1811 - 16.5582)/(1 + dwp));
			dw=dw.toFixed(0);
			dhpsc=5/1.860625;
			dhp=Math.pow(dhpsc,1.28254);
			dh=26.00521 + ((2589.355 - 26.00521)/(1 + dhp));
			dh=dh.toFixed(0);
			dt=fh-dh;
			dt=dt.toFixed(0);
			dl=(fw-dw)/2;
			dl=dl.toFixed(0);
    		document.getElementById('dummy').width=dw;
    		document.getElementById('dummy').height=dh;
			document.getElementById('dummy').style.top=dt+"px";
			document.getElementById('dummy').style.left=dl+"px";
		}
	}

function shots(){
	document.getElementById("Timebs").innerHTML = tbs;
	document.getElementById("RPM").innerHTML = parseFloat((60000/(tbs)).toFixed(4));
	document.getElementById("TFYS").innerHTML = parseFloat(((ac*tbs)/1000).toFixed(4));
	document.getElementById("HMB").innerHTML = ac;
}
function firsttime(){		
  ams1=parseFloat(ams1.toFixed(4));
  ms1=parseFloat(ms1.toFixed(4));
  as1=parseFloat(as1.toFixed(4));
  ac1=parseFloat(ac1.toFixed(0));
  rs1=parseFloat(rs1.toFixed(2));
	document.getElementById("ftams").innerHTML = ams1;
	document.getElementById("ftms").innerHTML = ms1;
	document.getElementById("ftrs").innerHTML = rs1;
	document.getElementById("ftac").innerHTML = ac1;
	document.getElementById("ftas").innerHTML = as1;
}
function ready(){
	firsttime();
	myResult();
	changedummy();
	shots();
	//changereekoil();
}
	document.addEventListener("DOMContentLoaded", ready);
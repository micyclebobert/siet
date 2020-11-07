// JavaScript Document
var te=1;
errmes.innerHTML = "Hello! I am error message. You are not supposed to see me. If you do report Error Code: 1x1a1";
function myrightclick(e) {
  e.preventDefault();
  document.getElementById("context-menu").style.top = e.clientY + "px";
  document.getElementById("context-menu").style.left = e.clientX + "px";
  document.getElementById("context-menu").classList.add("active");
}/*
	 if (window.availHeight-e.clientY>document.getElementById("context-menu").offsetHeight) {
    document.getElementById("context-menu").style.top = e.clientY + "px";
		} else {
			 document.getElementById("context-menu").style.bottom = e.clientY + "px";
		}
	 if (window.availWidth-e.clientX>document.getElementById("context-menu").offsetWidth) {
    document.getElementById("context-menu").style.left = e.clientX + "px";
		} else {
			 document.getElementById("context-menu").style.right = e.clientX + "px";
		}*/
window.addEventListener("click", function() {
	if (te==1){
  document.getElementById("context-menu").classList.remove("active");
	} else {
		te=1;
	}
});
window.addEventListener("scroll", function() {
  document.getElementById("context-menu").classList.remove("active");
});

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function kal() {
  cl = cl + "\n" + "  Head: " + Head.innerHTML + cs7 + "\n" + "  Arms: " + Arms.innerHTML + cs7 + "\n" + "  Chest: " + Chest.innerHTML + cs7 + "\n" + "  Stomach: " + Stomach.innerHTML + cs7 + "\n" + "  Legs: " + Legs.innerHTML + cs7 + "\n";
}

function copyalot() {
  nog();
  cl = "";
  for (var i = 1; i <= 4; i++) {
    if (document.getElementById("Check" + i).checked == true) {
      var csn1 = "Check" + i;
    }
  }
  selectOnlyThis("Check1");
  eef();
  copycommon();
  cl = cl + "\n" + cs4 + cs3 + cs5 + ":";
  kal();
  selectOnlyThis("Check2");
  eef();
  copycommon();
  cl = cl + "\n" + cs4 + cs3 + cs5 + ":";
  kal();
  selectOnlyThis("Check3");
  eef();
  copycommon();
  cl = cl + "\n" + cs4 + cs3 + cs5 + ":";
  kal();
  if (type == 7) {
    selectOnlyThis("Check4");
    eef();
    copycommon();
    cl = cl + "\n" + cs4 + cs3 + cs5 + ":";
    kal();
  }
  cl = gn + " in " + cs1 + " at " + slider1.value + "m" + cs6 + cs2 + "-" + cl;
  copyToClipboard(cl);
  selectOnlyThis(csn1);
}

function copyall() {
  nog();
  cl = "";
  for (var i = 1; i <= 4; i++) {
    if (document.getElementById("Check" + i).checked == true) {
      var csn1 = "Check" + i;
    }
  }
  selectOnlyThis("Check1");
  eef();
  copycommon();
  cl = cl + "\n" + cs4 + cs3 + cs5 + ":";
  kal();
  selectOnlyThis("Check2");
  eef();
  copycommon();
  cl = cl + "\n" + cs4 + cs3 + cs5 + ":";
  kal();
  selectOnlyThis("Check3");
  eef();
  copycommon();
  cl = cl + "\n" + cs4 + cs3 + cs5 + ":";
  kal();
  if (type == 7) {
    selectOnlyThis("Check4");
    eef();
    copycommon();
    cl = cl + "\n" + cs4 + cs3 + cs5 + ":";
    kal();
  }
  cl = gn + " in " + cs1 + " at " + slider1.value + "m" + cs6 + cs2 + "-" + cl;
  copyToClipboard(cl);
  selectOnlyThis(csn1);
}

function copyalittle() {
  nog();
  cl = "";
  copycommon();
  kal();
  cl = cs1 + cs4 + cs3 + cs5 + " of " + gn + " at " + slider1.value + "m" + cs6 + cs2 + "-" + cl;
  copyToClipboard(cl);
}

function copycommon() {
  if (document.getElementById("MpBr1").checked == true) {
    cs1 = "Multiplayer";
    cs2 = "";
  } else if (document.getElementById("MpBr2").checked == true) {
    cs1 = "Battle Royale";
    cs8 = " + bullet travel time";
    if (document.getElementById("Vest0").checked == true) {
      cs2 = "";
    } else if (document.getElementById("Vest1").checked == true) {
      cs2 = " and Level 1 Vest";
    } else if (document.getElementById("Vest2").checked == true) {
      cs2 = " and Level 2 Vest";
    } else if (document.getElementById("Vest3").checked == true) {
      cs2 = " and Level 3 Vest";
    }
    if (document.getElementById("Vest0").checked == true&&document.getElementById("Check1").checked == true) {
      cs2 = "";
    } else if (document.getElementById("Vest1").checked == true&&document.getElementById("Check1").checked == true) {
      cs2 = " with Level 1 Vest";
    } else if (document.getElementById("Vest2").checked == true&&document.getElementById("Check1").checked == true) {
      cs2 = " with Level 2 Vest";
    } else if (document.getElementById("Vest3").checked == true&&document.getElementById("Check1").checked == true) {
      cs2 = " with Level 3 Vest";
    }
  }
  if (document.getElementById("Wbv0").checked == true) {
    cs3 = "";
    cs4 = "";
  } else if (document.getElementById("Wbv1").checked == true) {
    cs3 = " Wallbang or Cornerbang";
    if (document.getElementById("Wb0").checked == true) {
      cs4 = " Thin";
    } else if (document.getElementById("Wb1").checked == true) {
      cs4 = " Medium";
    } else if (document.getElementById("Wb2").checked == true) {
      cs4 = " Thick";
    }
  } else if (document.getElementById("Wbv2").checked == true) {
    cs3 = " Wallbang or Cornerbang with FMJ";
    if (document.getElementById("Wb0").checked == true) {
      cs4 = " Thin";
    } else if (document.getElementById("Wb1").checked == true) {
      cs4 = " Medium";
    } else if (document.getElementById("Wb2").checked == true) {
      cs4 = " Thick";
    }
  }
  if (document.getElementById("Check1").checked == true) {
    cs5 = " Damage";
    cs6 = "";
    cs7 = "hp";
  } else if (document.getElementById("Check2").checked == true) {
    cs5 = " Time to Kill";
    cs6 = " with " + hp + "hp";
    cs7 = "ms";
  } else if (document.getElementById("Check3").checked == true) {
    console.log(cs7);
    cs5 = " Shots to Kill";
    cs6 = " with " + hp + "hp";
    cs7 = " shots";
  } else if (document.getElementById("Check4").checked == true) {
    cs5 = " Pellets to Kill";
    cs6 = " with " + hp + "hp";
    cs7 = " pellets";
  }
}

function nog() {
  if (gun == 0) {
    gn = "Air";
    range = [];
  } else if (gun == 1) {
    gn = "Type 25";
    range = [10,16,30];
  } else if (gun == 2) {
    gn = "Type 25 with Stopping Power Magazine";
    range = [10,17,21,31];
  } else if (gun == 3) {
    gn = "AK117";
    range = [21,37];
  } else if (gun == 4) {
    gn = "M16";
    range = [20,40];
  } else if (gun == 5) {
    gn = "AK-47";
    range = [28,35];
  } else if (gun == 6) {
    gn = "ASM10";
    range = [17,37];
  } else if (gun == 7) {
    gn = "M4";
    range = [15,35];
  } else if (gun == 8) {
    gn = "BK57";
    range = [15,35];
  } else if (gun == 9) {
    gn = "LK24";
    range = [20,30,39];
  } else if (gun == 10) {
    gn = "ICR-1";
    range = [16,40];
  } else if (gun == 11) {
    gn = "Man-O-war";
    range = [23,43];
  } else if (gun == 12) {
    gn = "KN-44";
    range = [20,40];
  } else if (gun == 13) {
    gn = "HBRa3";
    range = [11,25,36];
  } else if (gun == 14) {
    gn = "HVK-30";
    range = [30,50];
  } else if (gun == 15) {
    gn = "DR-H";
    range = [7,13,18,25,35];
  } else if (gun == 16) {
    gn = "DR-H with OTM Magazine";
    range = [7,13,18,25,35];
  } else if (gun == 17) {
    gn = "Rus-79U";
    range = [20,40];
  } else if (gun == 18) {
    gn = "Chicom";
    range = [9,17,20];
  } else if (gun == 19) {
    gn = "PDW-57";
    range = [5,12,18,28];
  } else if (gun == 20) {
    gn = "Razorback";
    range = [15,24];
  } else if (gun == 21) {
    gn = "MSMC";
    range = [7,13,17];
  } else if (gun == 22) {
    gn = "Corodite";
    range = [8,19,26,33];
  } else if (gun == 23) {
    gn = "HG 40";
    range = [11,25];
  } else if (gun == 24) {
    gn = "Pharo";
    range = [7,10,15,25];
  } else if (gun == 25) {
    gn = "GKS";
    range = [20,30];
  } else if (gun == 26) {
    gn = "QQ9";
    range = [7,12,19,27];
  } else if (gun == 27) {
    gn = "QQ9 with 10mm Magazine";
    range = [8,16,23,33];
  } else if (gun == 28) {
    gn = "J358";
    range = [17,20,35];
  } else if (gun == 29) {
    gn = "J358 with Stopping Power Magazine";
    range = [24,29,46];
  } else if (gun == 30) {
    gn = "MW11";
    range = [20,25,30];
  } else if (gun == 31) {
    gn = "S36";
    range = [10,25,40];
  } else if (gun == 32) {
    gn = "UL736";
    range = [25,35];
  } else if (gun == 33) {
    gn = "RPD";
    range = [25,35];
  } else if (gun == 34) {
    gn = "M4LMG";
    range = [10,25,40];
  } else if (gun == 35) {
    gn = "Chopper";
    range = [11,36];
  } else if (gun == 36) {
    gn = "BY15";
    range = [7,13,17,41];
  } else if (gun == 37) {
    gn = "HS2126";
    range = [9,33];
  } else if (gun == 38) {
    gn = "HS0405";
    range = [9,13,19,44];
  } else if (gun == 39) {
    gn = "Striker";
    range = [5,9,33];
  } else if (gun == 40) {
    gn = "KRM 262";
    range = [8,11,13,36];
  } else if (gun == 41) {
    gn = "Locus";
    range = [];
  } else if (gun == 42) {
    gn = "XPR-50";
    range = [62];
  } else if (gun == 43) {
    gn = "XPR-50 with Stopping Power Magazine";
    range = [];
  } else if (gun == 44) {
    gn = "Arctic .50";
    range = [];
  } else if (gun == 45) {
    gn = "M21 EBR";
    range = [74];
  } else if (gun == 46) {
    gn = "DL Q33";
    range = [];
  } else if (gun == 47) {
    gn = "Locus with Stopping Power Magazine";
    range = [];
  } else if (gun == 48) {
    gn = "Outlaw";
    range = [30];
  } else if (gun == 49) {
    gn = "Kilo Bolt-Action";
    range = [41];
  } else if (gun == 50) {
    gn = "Arctic .50 with Stopping Power Magazine";
    range = [];
  } else if (gun == 51) {
    gn = "Echo";
    range = [8,12,32];
  } else if (gun == 52) {
    gn = "Fennec";
    range = [7,11,16,23];
  } else if (gun == 53) {
    gn = "NA-45";
    range = [];
  } else if (gun == 54) {
    gn = "BK57 with Large Caliber Round";
    range = [15,35];
  } else if (gun == 55) {
    gn = "AK-47 with Large Caliber Round";
    range = [14,24,35];
  } else if (gun == 56) {
    gn = "Kilo Bolt-Action with Stopping Power Magazine";
    range = [51];
  } else if (gun == 57) {
    gn = "Fennec with Akimbo";
    range = [7,11,16,23];
  }
}

function coimg() {
  if (typeof(Storage) !== "undefined") {
    // Store
    nog();
    copycommon();
    sessionStorage.setItem("d1", Head.innerHTML);
    sessionStorage.setItem("d2", Arms.innerHTML);
    sessionStorage.setItem("d3", Chest.innerHTML);
    sessionStorage.setItem("d4", Stomach.innerHTML);
    sessionStorage.setItem("d5", Legs.innerHTML);
    sessionStorage.setItem("d6", cs1 + ' ' + slider1.value + 'm ' + gn + ' ' + cs4 + cs3 + cs5 + cs6 + cs2);
    window.open("Image/index.html");
  } else {
    //document.getElementById("tooltip").innerHTML = "Sorry, your browser does not support the process";
  }
}

function rangecopy(){
  copycommon();
  nog();
  cl=cs1+" "+gn+cs4+cs3+cs5+cs6+cs2+"-\n";
  if (range.length<1){
		  cl=cl+"From 0m to 100m:";
    kal();
  } else {
		  presv=slider1.value;
		  slider1.value=range[0];
				eef();
		  cl=cl+"From 0m to "+range[0]+"m:";
				kal();
			 for (var i = 0; i <= range.length-2; i++) {
				  slider1.value=range[i]+1;
						eef();
			   cl=cl+"From "+(range[i]+1)+"m to "+range[i+1]+"m:";
						kal();
			 }
		  slider1.value=(range[range.length-1]+1);
				eef();
		  cl=cl+"From "+(range[range.length-1]+1)+"m to 100m:";
				kal();
		  slider1.value=presv;
		}
  copyToClipboard(cl);
}
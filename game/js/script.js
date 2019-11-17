var run_1 = 0;
var ball_1 = 0.0;
var wkt_1 = 0;
var extra =1;
var prun_1 = 0;
var india =["rohith","k l rahul","virat","hardhik","ms dhoni","jedeja","d karthik","chahal","ashwin","bumra","shami"]
var run =[0,0,0,0,0,0,0,0,0,0,0];
var aus =["m hussey","watson","d warner","s smith","m wade","g maxwell","a zumpa","m starc","n lyon","r kane","p cummins"]
var x;
function team(){
	for (var i =0; i <= 11; i++) {
	 document.getElementById("ind-" + i).innerHTML = india[i];
	 document.getElementById("aus-" + i).innerHTML = aus[i];
	}
}

function runs() {
	var x = Math.floor(Math.random() * 7) + 0;
	var element = document.getElementById("innings1");
	var para = document.createElement("p");
		para.classList.add("mystyle");
		para.style.padding = '1px 5px';
		para.style.margin =0;	
		para.style.fontSize = 12;	
		element.appendChild(para);		
	if (x==5) {
		document.getElementById("extras").innerHTML = extra;
		extra = extra + 1;
		run_1 = run_1 + 1;
		var node = document.createTextNode("noball");
		para.appendChild(node);
		}
	else if (x==0) {
		wick();	
		var node = document.createTextNode("w");
		para.appendChild(node);
		para.classList.add("mystyle1");
		var elements = document.getElementsByClassName("mystyle1"), i, len;  
		  for (i = 0, len = elements.length; i < len; i++) {
		    elements[i].style.backgroundColor = 'red';
		    elements[i].style.display = 'block';
		    elements[i].style.color = '#fff';
		    elements[i].style.borderRadius ='50%';
		    elements[i].style.padding = '1px 2px';
		  }
		}
	else {
		var node = document.createTextNode(x+"run");
		para.appendChild(node);
		prun_1 = prun_1 + x;
		run_1 = run_1 + x;	
		var runRate = document.getElementById("plrun-" + wkt_1);
		runRate.innerHTML = prun_1;	
		}	
	document.getElementById("run_1").innerHTML = run_1;
	document.getElementById("bc_1").innerHTML = x;	
}

function ball() {
	runs();
	var y = (ball_1 * 10) % 10;
	y= Math.round(y);
	if (y != 5) {
		if(x==5){
			ball_1=ball_1+0.0;
		}
		else{
		ball_1 = ball_1 + 0.1;
		ball_1 = parseFloat(ball_1.toFixed(1));
		}
	} 
	else{
		if(x==5){
			ball_1=ball_1+0.0;
		}
		else{
		ball_1 = ball_1 + 0.5;
		ball_1 = parseFloat(ball_1.toFixed(1));	
		}	
	}
	document.getElementById("balc_1").innerHTML = ball_1 ;
}
function wick() {
	if (wkt_1<11) {
		prun_1 = run[wkt_1];
		wkt_1 = wkt_1 + 1;		
		document.getElementById("plwic-" + wkt_1).innerHTML = "wicket";	
	 	var ab = document.getElementById("plrun-" + wkt_1);
		ab.innerHTML = 0;
		document.getElementById("wkt_1").innerHTML = wkt_1;
	}
	else if (wkt_1=11){		
		wkt_1 = "all-out";
		document.getElementById("wkt_1").innerHTML = wkt_1;
	}
}
function summary(){
	var para = document.createElement("p");
	element.appendChild(div);
    table.appendChild(tr);

}
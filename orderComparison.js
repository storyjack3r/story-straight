var turnsAllowed=6;
var idsInOrder;
var turns=0;


var surprise=0;
var suspense=0;
var curiosity=0;
var surpriseOrder = ["part1", "part2", "part3", "part4", "part7", "part6", "part5"];
var suspenseOrder = ["part1", "part2", "part3", "part4", "part5", "part6", "part7"];
var curiosityOrder = ["part1", "part3", "part4", "part5", "part6", "part2", "part7" ];
var userArray;
function commentOnChanges(){

	if (changes<3){
	return "Sensational!";
	}
	else if (changes>8){
	return "Better luck next time...";
	}
	else {return "Really great result.";
	}
}



function currentOrder(){

var x=0;
   userArray = $("#sortable").sortable("toArray");
//     if (userArray.length != targetArray.length)
//         return false;
// 
  	 surprise=0;
  	 suspense=0;
  	 curiosity=0;
//counts number of times order fits selection of predetermined patterns
    for (var i = 0, l=userArray.length; i < l; i++) {

	if (userArray[i] == surpriseOrder[i]) { 
            surprise++;
               
			}   
	if (userArray[i] == suspenseOrder[i]) { 
            suspense++;   
			}   
	if (userArray[i] == curiosityOrder[i]) { 
            curiosity++;   
			}   			
	    }       
storyPattern = Math.max(surprise, suspense, curiosity);
 
if (storyPattern === surprise) {
	dominantPattern = surpriseOrder;
	classNamE = "surprise";
	notificatioN = "Surprise structure";
	x++;
	y=1;

  
} 
if (storyPattern === suspense) {
	dominantPattern = suspenseOrder;
	classNamE = "suspense";
	notificatioN = "Suspense structure";
    x++;
	y=2;
} 
if (storyPattern === curiosity) {
	dominantPattern = curiosityOrder;
    classNamE = "curiosity";
	notificatioN = "Curiosity structure";
    x++;
	y=3;
}

//sets the color to default and then paints the right colours for the dominant pattern
	for (var i = 0, l=userArray.length; i < l; i++) {
		var currentLI=userArray[i];
		var d = document.getElementById(currentLI);
		d.className = "default";        

		if(x==1){        
			if (userArray[i] == dominantPattern[i]) { 
    	        var currentLI=userArray[i];
				var d = document.getElementById(currentLI);
				d.className = classNamE;
				var b = document.getElementsByTagName("body")[0];
				b.className = classNamE + "P";
			}   
 		}
			var z = document.getElementsByTagName("h3")[0];
			 z.innerHTML= notificatioN;
			 z.style.visibility="visible";
			z.className = classNamE;			 
	}   
    

//	checkOrder();

}

function completedStories(){

	if (correctPc==100) {
		
	}

}

function countTurns(){
	turns++;
	var turnsLeft=turnsAllowed-turns;
	document.getElementById("chchchchanges").innerHTML=turnsLeft;
   }
   
// function checkOrder(){
// 	var allParts=userArray.length;
// 	correctPc=Math.round((100/allParts)*correctPos);
// 	document.getElementById("correctPos").innerHTML=correctPc;
// 	if (correctPc==100){
// 		window.alert("You got the story straight in " + changes + " goes! " + commentOnChanges());
//   	 }
//    }
$( "#sortable" ).on( "sortupdate", countTurns);
$( "#sortable" ).on( "sortupdate", currentOrder);


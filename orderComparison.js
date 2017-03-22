var turnsAllowed=6;
var idsInOrder;
var turns=0;
var correctPos=0;
var targetArray = ["part1", "part2", "part3", "part4", "part5", "part6", "part7"];
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

// function glowSelect(){
// 	
// }

function currentOrder(){
   userArray = $("#sortable").sortable("toArray");
//     if (userArray.length != targetArray.length)
//         return false;
// 
  	 correctPos=0;
    for (var i = 0, l=userArray.length; i < l; i++) {

	 if (userArray[i] == targetArray[i]) { 
            correctPos++;   
            var currentLI=userArray[i];
			var d = document.getElementById(currentLI);
			d.className = "correct";        
			}   
		else {
		var currentLI=userArray[i];
			var d = document.getElementById(currentLI);
			d.className = "default";        
		}
    }       
	checkOrder();

}

function countTurns(){
	turns++;
	var turnsLeft=turnsAllowed-turns;
	document.getElementById("chchchchanges").innerHTML=turnsLeft;
   }
   
function checkOrder(){
	var allParts=userArray.length;
	var correctPc=Math.round((100/allParts)*correctPos);
	document.getElementById("correctPos").innerHTML=correctPc;
	if (correctPc==100){
		window.alert("You got the story straight in " + changes + " goes! " + commentOnChanges());
  	 }
   }
// $( "#sortable" ).on( "sortstart", glowSelect);
$( "#sortable" ).on( "sortupdate", countTurns);
$( "#sortable" ).on( "sortupdate", currentOrder);


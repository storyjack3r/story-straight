var idsInOrder;
var changes=0;
var targetArray = ["part1", "part2", "part3", "part4", "part5", "part6", "part7"];

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
   userArray = $("#sortable").sortable("toArray");
//     if (userArray.length != targetArray.length)
//         return false;
// 
//     for (var i = 0, l=userArray.length; i < l; i++) {
//         // Check if we have nested arrays
//         if (userArray[i] instanceof Array && targetArray[i] instanceof Array) {
//             // recurse into the nested arrays
//             if (!userArray[i].equals(targetArray[i]))
//                 return false;       
//         }           
//         else if (userArray[i] != targetArray[i]) { 
//             // Warning - two different object instances will never be equal: {x:20} != {x:20}
//             return false;   
//         }           
//     }       
//     return true;

A=targetArray.toString();
B=userArray.toString();

	if (A==B)
		{

		setTimeout(success, 100000);
		var success = window.alert("You got the story straight in " + changes + " goes! " + commentOnChanges());
		} 

// 	else
// 		{
// 		setTimeout(failure, 100000);
// 		var failure = window.alert("Not done!");
// 
// 		
// 		}

}

function countChanges(){
	changes++;
	document.getElementById("chchchchanges").innerHTML=changes;
   }
$( "#sortable" ).on( "sortupdate", currentOrder);
$( "#sortable" ).on( "sortupdate", countChanges);
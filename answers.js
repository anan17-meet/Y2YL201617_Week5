///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES
var temperature = 98.6;
temperature+=5;
temperature=temperature*3;
temperature=temperature-20;
alert(temperature);

///2. DATA STRUCTURES
var Days_of_the_Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ,"Saturday"] ;
Days_of_the_Week[0] = "domingo";
Days_of_the_Week[1] = "lunes";
Days_of_the_Week[2] = "martes";
Days_of_the_Week[3] = "miercoles";
Days_of_the_Week[4] = "Jueves";
Days_of_the_Week[5] = "viernes";
Days_of_the_Week[6] = "sabado";

var icecream={"Vanilla" : "$1.99","Chocolate" : "$2.49"
,"Strawberry" : "$2.25"} ;
icecream["Chocolate"]="$0.99" ;
icecream["Pistacio"]="$0.99" ;
delete icecream["Chocolate"];

console.log(Days_of_the_Week)
console.log(icecream)

///3. FUNCTIONS & CONDITIONAL STATEMENTS
function DoIHaveToGoToSchoolToday(index){
// 1-Sunday, 7-Saturday
var Days = ["","Sunday", "Monday", "Tuseday", "Wenedesday", "Tursday", "Friday", "Saturday"]
if (index==6||index==7||index==1||index==4){
alert ("No, today is " + Days[index]);
}
else{
alert ("Yes, today is "+Days[index]);
}
}

DoIHaveToGoToSchoolToday(4)

///4.  LOOPS

var x=0;
var price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52] ;
	for(var i = 0 ; i < price_of_Gasoline.length ; i++){
x+=40*price_of_Gasoline[i];
  }
alert("you spent "+ x + " dollars");






 //  Part 2) So it got hidden immedialty after we entered the code which changed the style display  into none .



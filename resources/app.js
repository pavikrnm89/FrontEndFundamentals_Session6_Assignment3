var sum = 0;
var i = 1;
var j = 1000;
for(i; i<j; i++){
	sum = sum + i;
}
console.log("The Sum of First 1000 Numbers using for loop is="+sum);

while(i < j){
	sum = sum + i;
	i++;
}
console.log("The Sum of First 1000 Numbers using while loop is="+sum);

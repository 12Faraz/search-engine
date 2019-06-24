/*
var num=Number(prompt("Enter a number"));
var c=0,i;
for(i=1;i<=num;i++){
	if(num%i==0)
	c++;
}
if(c==2){
	console.log(num+" Is a prime number");
}
else if(c==1){
	console.log(num+" is niether prime nor composite");
}
else{
	console.log(num+" is a Composite Number");
}



for(var x=0;x<v;x++){
	console.log(x);
}
while(v<10){
	console.log(v);
	v++;
}
do{
console.log(v);
v++;
}while(v<10);

var add=a=>{console.log((a/2))};
add(10);
var i=0;
var x=document.getElementById("input");
var but=document.getElementById("number");
function loop(){
var y=x.value;
while(i<y){
	alert(i);
	i++;
}
}
but.addEventListener("click",loop);
var x=[1,2,3];
x.push(24,12,12,2);
x.push('faraz','shaik');
console.log(x);
x.pop();
console.log(x);
x.unshift(0);
console.log(x);
x.shift();
console.log(x);
//console.log(arr.slice(1,5))
//console.log(arr.slice(-2)); // returns [4, 5]; arr unmodified
console.log(arr.slice(-4,-2)); // returns [2, 3]; arr unmodified
console.log(arr.slice(-2, -1)); // returns [4]; arr unmodified

const arr = [1,2,3,4,5];
//alert(arr.splice(3,2,'a'));
alert(arr.splice(2,3,'b'));
alert(arr);
var ar=[1,2,3];
console.log(ar.splice(2,2,'a','b'));
console.log(ar);
var ar=[1,2,3,4,5,6];
console.log(ar.slice());
console.log(ar.slice(2));
console.log(ar.slice(1,2));
//console.log(ar.slice(2,1));
//console.log(ar.slice(-1,2));
console.log(ar.slice(1,-2));
///console.log(ar.slice(-1,-2));
//1,2,3,4,5,6,9,20,32,34
var x=[11,2,3,10,6];
console.log(x.sort((a,b)=>a-b));

xar nam1=document.getElementById("input1");
var nam2=document.getElementById("input2");
var nam3=document.getElementById("input3");
var b1=document.getElementById("b1");

function arrangement(){
	var names=[nam1.value,nam2.value,nam3.value];
    document.write("sorted The Products<br/><b>"+names.sort()+"</b>");
}
b1.addEventListener("click",arrangement);

var num=[1,2,3,4,5,6];
for(x in num){
	if(num[x]%2==0)
	console.log(num[x]);
}
var student=[1,20,19,14,29,8];
for(y in student){
	console.log(student[y]);
}
console.log(student.sort((a,b)=>a-b));
var nam1=document.getElementById("input1");
var nam2=document.getElementById("input2");
var nam3=document.getElementById("input3");
var b1=document.getElementById("b1");
const x=Number(nam1.value);
const y=Number(nam2.value);
const z=Number(nam3.value);
console.log(typeof(x));	
function joinfunction(){
	if(typeof(x)==='number' && typeof(y)==='number' && typeof(z)==='number')
	{	var j=[x,y,z];
		document.write("<b><img src='maxresdefault.jpg'/>"+sum()+"<b>");
	}
	else{
		alert("Invalid input please refer entering numbers");
	}
	}
b1.addEventListener('click',joinfunction);
var nam1=document.getElementById("input1");
var nam2=document.getElementById("input2");
var nam3=document.getElementById("input3");
var b1=document.getElementById("b1");
function joinfunction(){
const car=new Map([['name',nam1.value],
['color',nam2.value],
['price',nam3.value]]);

const pr=Number(car.get('price'));
if(isNaN(pr)){
	alert("Invalid price");
}
else if(Number(pr)<1000){
 alert("very low price");
}
else{
document.write("<b>"+pr+"<b>");
}
}
b1.addEventListener('click',joinfunction);

const car=new Map([['name','Tesla'],
['color','red'],
['price',50000]]);
console.log(car.size);
console.log(car.get('price'));
//car.delete('color');
console.log(car.values());
car.set('gears',5);
console.log(car);
console.log(car.keys());
console.log(car.has('name'));
var mi=car.entries();
console.log(mi.next().value);
console.log(mi.next().value);
console.log(mi.next().value);
console.log(mi.next().value);

car.forEach(value=>{console.log(value);});  
//or
function looping(value){
console.log(value)
}
car.forEach(looping);  

const s1=new Set([1,2,3,4,5,6]);
console.log(s1.size);
s1.add(7);
console.log(s1.size);
//s1.clear();
//console.log(s1);
//s1.delete(5);
//console.log(s1);
const it=s1.entries();
console.log(it.next().value);
console.log(it.next().value);
function looping2(value){
	console.log(value)
	}
	s1.forEach(looping2);  
console.log(s1.has(10));
//checks if the passed value is there
//in the set or not	
console.log(s1.values());	
console.log(s1.keys());

var s1=document.getElementById('search');
var sb=document.getElementById('srch');
var numbers=[10,20,30,40,50];

function searchfunc(){

	if(numbers.indexOf(Number(s1.value))==-1){
		document.write("<b>Not found</b>");
	}
	else{
		document.write("<b>found at "+numbers.indexOf(Number(s1.value))+" position</b>");
	}
}

sb.addEventListener('click',searchfunc); 



var numbers=[11,27,30,41,53];
var keys=document.getElementById('key')
var but=document.getElementById('sb')

function searchfun(){
    if(numbers.indexOf(Number(keys.value))==-1){
		document.write(keys.value+" <b>Not Found</b>");
	}
    else{
		document.write("<b>Element found at "+numbers.findIndex(x=>{x%2==0})+" Position</b>");
	}
}

but.addEventListener('click',searchfun);

var numbers=[100,27,30,41,53];
console.log(numbers.every(a=>a>20));

var car=new Map([
['name','BMW'],
['color','black'],
['price',50000]
]);

car.set('Model','2019');
console.log(car);
console.log(car.size);
var x=car.entries();
console.log(x.next().value);
console.log(car.get('price'));
console.log(car.forEach(a=>console.log(a)));
var y=car.keys();
console.log(y.next().value);
console.log(y.next().value);
console.log(y.next().value);

const name="Faraz is walking in a park";
console.log(name.startsWith("Far"));
console.log(name.startsWith("az",3));
console.log(name.endsWith("raz"));
console.log(name.endsWith("walking",16));
console.log(name.includes("Faraz"));
console.log(name.includes("Faraz",2));|
var email=document.getElementById("key");
var button=document.getElementById("sb");
email.value="";
function validation(){
	if(email.value.includes("@") && email.value.endsWith(".com")){
        document.write("<b>Registered!"+email.value+" Successfully<b>");
	}
	else{
		alert("Invaid Email");
	}
}

button.addEventListener('click',validation)
const name="Faraz is walkingf in a park";
alert(name.toLowerCase());

//console.log(verb.startsWith("man"));

//console.log(verb.startsWith("is",4));

//console.log(verb.endsWith("wal",10));
//console.log(verb.includes("is",4));
var email=document.getElementById("key");
var button=document.getElementById("sb");

function validator(){
	if(email.value.includes("@") && email.value.endsWith(".com")){
document.write(email.value+"  IS VALID");

	}
	else{
		alert("INVALID EMAIL ADDRESS");
	}
}


button.addEventListener('click',validator);*/

const action="adasdas@gmail.com";
const reg=/@gmail(?=.com)/; // @gmail should be followed by .com
const reg1=/@gmail(?!.in)/; // @gmail shout not be followed by .in
//here only @gmail is the part of match results
const x=action.match(reg);
const reg3=/(?<=@gmail).com/;// matches .com only if it is preceeded by @gmail
const reg4=/(?<!@gmail).in/;// matches .in only if it is not proceeded by @gmail
console.log(action.match(reg3));
console.log((reg.test(action))); // matches RE with the actions string and returns TRUE or FALSE
//alert(x);
/*if(x==null){
	alert("INVALID EMAIL");
}
else{
	alert("valid email");
}*/
for(y in x){
	console.log(x[y]);
}





















































































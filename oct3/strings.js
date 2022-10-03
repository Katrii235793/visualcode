let str1="Red,Blue,Pink,Yellow";
let length=str1.length;
console.log(length);

let str2="Red,Blue,Pink,Yellow";
let slice=str1.slice(5,9);
console.log(slice);

let str3="Red,Blue,Pink,Yellow";
let subString = str3.substring(5);
console.log(subString);

let str4="Red,Blue,Pink,Yellow";
let replacestr=str4.replace("Red","Violet");
console.log(replacestr);

let str5="Super Man";
let low=str5.toLowerCase();
console.log(low); 

let str6="Super Man";
let up=str6.toUpperCase();
console.log(up);

let card1 = "5";
let pad1 = card1.padStart(3,"x");
console.log(pad1);

let card2 = "5";
let pad2 = card2.padEnd(3,"x");
console.log(pad2);

let str7="Karthika";
let char1=str7.charAt(1);
console.log(char1);

let str8="Karthika";
let char2=str8.charCodeAt(5);
console.log(char2);

let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray);

let str = "Please locate where 'locate' occurs!";
let index=str.lastIndexOf("locate");
console.log(index);

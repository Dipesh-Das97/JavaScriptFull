var array = [{name : "Dipesh", place : "Assam"},{name : "Livi", place : "Tamil Nadu"},{name : "Chandra", place : "Tamil Nadu"},{name : "Saravana", place : "Tamil Nadu"}];

console.log(array.filter((a)=> a.place == "Tamil Nadu"));

for(var x in array){
    if(array.hasOwnProperty(x)){
        console.log(array[x]);
    }
}
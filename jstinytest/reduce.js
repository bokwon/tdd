//First
//var a = [0, 1, 2, 3, 4];
//
//0 + 1 = 1
//1 + 2 = 3
//3 + 3 = 6
//6 + 4 = 10

//Second
var a = [0, 1, 2, 3, 4];

var sumSoFar = 0;
sumSoFar = sumSoFar + 1;
sumSoFar = sumSoFar + 2;
sumSoFar = sumSoFar + 3;
sumSoFar = sumSoFar + 4;

//Third
var a = [0, 1, 2, 3, 4];

var sumSoFar = 0;
sumSoFar = sumSoFar + a[1];
sumSoFar = sumSoFar + a[2];
sumSoFar = sumSoFar + a[3];
sumSoFar = sumSoFar + a[4];

//Fourth
var a = [0, 1, 2, 3, 4];
var sumSoFar = 0;
for(var i=0; i<a.length; i++) {
    sumSoFar = sumSoFar + a[i];
}

//Fifth
function adder(array, startingValue){
    var sumSoFar = startingValue;
    for(var i=0; i<array.length; i++){
        sumSoFar = sumSoFar + array[i];
    }
    return sumSoFar;
}

adder([0, 1, 2, 3, 4], 0);

//Sixth


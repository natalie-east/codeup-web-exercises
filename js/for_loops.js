//1
function showMultiplcationTable (num){
    for (var i = 1; i <= 10; i++)
        console.log(num + " x " + i + " = " + (num * i));


}
showMultiplcationTable(7)

//2
for(var i=0; i<10; i++){
    var randomNumber = Math.floor(Math.random() * (200-20) + 20);
    if(randomNumber % 2 !==0) {
        console.log(randomNumber + "  is Odd");
    } else {
        console.log(randomNumber + "is Even")
    }
}

//3
for (var outer + 1; outer <= 9; outer++){
    var output = '';
    for  (var inner = 1; inner <= outer; inner++);{
        output = output + outer;
    }
console.log(output);
}

//4 increment by 5
for (var i =100;i >=5 ;i-=5){
    console.log(i);
}

function getSleepHours(day){
    if (day === 'monday'){
        return 8;
    }else {
    (day === 'tuesday')
        return 8;
}if else {
    (day === 'wednesday')
        return 8;
}else if {
    (day === 'thursday')
        return 8;
}else if{
    (day === 'friday')
        return 8;
}else if{
    (day === 'saturday')
        return 8;
}else if{
    (day === 'sunday')
        return 8;
}
}



let second = (['second','first', 'third', 'fourth', 'fifth'])
let first =second[1]

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
    retreat(){
        console.log(retreatMessage)
    }
};

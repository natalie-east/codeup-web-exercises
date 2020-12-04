var x = 2
while (x< 65536){
    console.log(x);
    x = x * 2;
}

//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.//

console.log('i have this many cones to sell:' + allCones);

do {
 var conesPurchased =  Math.floor(x:Math.random() * 5) + 1;
    if(conesPurchased > allCones) {
        console.log('we outta cones' + conesPurchased + " , but i do have" + allCones)
    } else {
        allCones = allCones - conesPurchased;
        console.log(conesPurchased + "how many cones do you want?"+ allCones + "left to sell");
    }
}while (allCones > 0)


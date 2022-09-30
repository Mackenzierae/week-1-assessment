///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/
// monday is first (fujiAcres[0])
const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55
// PROBLEM 1
/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let allAcres = [fujiAcres, galaAcres, pinkAcres]
let totalAcres = 0
//initialized at 0 acres picked

function totalAcresSum() {
    for (let a = 0; a < allAcres.length; a++){
        for (let i = 0; i < allAcres[a].length; i++) {
            totalAcres += allAcres[a][i]
            // console.log(totalAcres)
        }
    }
    return totalAcres
}

totalAcresSum()
console.log("total acres sum:", totalAcres)

//I put all of the acres in one array so the program can run through each days in an acre of all the acres continuously to get the total of all three acres in one go. Have to run the function but I commented it out for further questions.


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

//total acres sum function is already running above and returning the correct value, so we just divide by 7 for days of week if we're just keeping it simply / not doing averages for the three separate acres etc.....
let averageDailyAcres = totalAcres / 7
console.log("Average Daily Acres:", averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 
*/
let acresLeft = 174 
let days = 0
// CODE HERE
while (acresLeft > 0) {
    days++
    acresLeft -= averageDailyAcres
}
console.log("Days:", days)

//while acresLeft is greater than 0, add a day to days var, and subtract the daily average (9) from acres Left.

// PROBLEM 4
/*
    Your next task is to create 3 arrays that list the daily amount of apples picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method to make copies of the arrays and then loop the copies. You could also make empty arrays, loop the old ones and use the push method to add new values to the new arrays.
*/




// CODE HERE
// let allAcres = [fujiAcres, galaAcres, pinkAcres]
// using this array of array from above to loop through all acres
let fujiTons = []
let galaTons = []
let pinkTons = []
let allAcreTons = [fujiTons, galaTons, pinkTons]
//put them all in one array so I can easily loop through them all at once.

function totaltons() {
    for (let a = 0; a < allAcres.length; a++){
        //looping through each orchard
        for (let i = 0; i < allAcres[a].length; i++) {
            //looping through each day of each orchard
            tons = 0
            // re-initialize 0 at the beginning of the loop to start fresh for each day multiplication
            tons = allAcres[a][i] * 6.5
            //multiple each day by tons
            allAcreTons[a].push(tons)
            //push into new array
        }
    }
}

totaltons()
console.log(allAcreTons)
// run
// console.log("Fuji Tons:", fujiTons)
// console.log("Gala Tons:", galaTons)
// console.log("Pink Tons:", pinkTons)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

// let allAcreTons = [fujiTons, galaTons, pinkTons]

// take my array of all the tons and multiple each day by 2000 pounds and add together
// this is basically the exact same as above but modified to check the Tons arrays and now make Pounds arrays

function totalPounds() {
    for (let a = 0; a < allAcreTons.length; a++){
        //looping through each orchard
        let pounds = 0
        let tons = 0
        // re-initialize totals as 0
        for (let i = 0; i < allAcreTons[a].length; i++) {
            //looping through each day of each orchard
            tons += allAcreTons[a][i];
            // sum up total tons of each day
        }
        //calculate total of pounds by multiplying tons * 2000. 
        pounds = tons * 2000
        //probably could write this in a smarter way but knowing the order of the array, setting each orchard to the total pounds.
        if (a === 0) {
            fujiPounds = pounds
        } else if (a === 1) {
            galaPounds = pounds
        } else if (a === 2) {
            pinkPounds = pounds
        }
    }
}

totalPounds()
console.log("Fuji Pounds:", fujiPounds)
console.log("Gala Pounds:", galaPounds)
console.log("Pink Pounds:", pinkPounds)

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55
// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds + galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("Total Profit:", totalProfit)
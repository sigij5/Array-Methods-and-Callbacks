import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const filter2014Final = fifaData.filter((match) => {
    return (match.Year === 2014) && (match.Stage === 'Final');
});

console.log(filter2014Final);

console.log(filter2014Final[0]['Home Team Name']);
console.log(filter2014Final[0]['Away Team Name']);
console.log(filter2014Final[0]['Home Team Goals']);
console.log(filter2014Final[0]['Away Team Goals']);
console.log(filter2014Final[0]['Win conditions']);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finalFilter = 
    data.filter((match) => {
        return match.Stage === 'Final';
    });
    return finalFilter;
};

getFinals(fifaData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb, data) {
    const finals = cb(data)
    const years = 
    finals.map ((match) => {
        return match.Year;
    });
    return years;

};

getYears(getFinals, fifaData);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb, data) {
    const finals = cb(data)
    const winners = 
    finals.map ((match) => {
        if(match['Home Team Goals'] > match['Away Team Goals']){
            return match['Home Team Name']
        }else{
            return match['Away Team Name'];
        }
    });

    return winners
};

getWinners(getFinals, fifaData);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb,cb1, cb2, data) {
    const Year = cb1(cb, data)
    const Winner = cb2(cb, data)
    
   
    for(let i=0; i < Year.length; i++){
        console.log(`In ${Year[i]}, ${Winner[i]} won the World Cup!`)
    }

};

console.log(getWinnersByYear(getFinals, getYears, getWinners, fifaData));


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    // const hometotal = 
    // data.reduce((sum, match) => {
    //     return (sum + match['Home Team Goals'] + match['Away Team Goals'])
    // },0);
    // const average = total/fifaData.length
    // return average
    const homeTotal =
    data.reduce(function(sum, match){
        return sum + match['Home Team Goals']
    },0);
    const awayTotal =
    data.reduce(function(sum, match){
        return sum + match['Away Team Goals']
    },0);
    const homeAverage = homeTotal/fifaData.length
    const awayAverage = awayTotal/fifaData.length

    return `Home Team Average is ${homeAverage.toFixed(2)}, Away Team Average is ${awayAverage.toFixed(2)}`

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {


};

console.log(getCountryWins(fifaData, 'GER'));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

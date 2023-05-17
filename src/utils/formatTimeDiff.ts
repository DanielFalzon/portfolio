//Defining total number of MS for ech time object
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const MONTH = DAY * 30
const YEAR = MONTH * 12

export function formatTimeDiffFromCurr(time:number): string{
    const now = Date.now();

    //Provided date is in the future, can't calculate the total time
    if(time > now) return "";

    let result = "";
    
    //Get the current time in ms and find diff
    const diffInMs = now - time;

    //Calculate number of years
    const numOfYears = Math.round(diffInMs / YEAR);

    //If we have atleast a year, then add the year to the string
    if (numOfYears > 0) result = `${numOfYears} Year${numOfYears > 1 ? 's':''}`;

    //Subtract total in years.
    const remainingMs = diffInMs - (numOfYears * YEAR);

    //if we don't have any months after removing the year, only return the number of years
    if (remainingMs <= (MONTH - (DAY*10))) return result;

    //Round up remaining ms to months
    const numOfMonths = Math.round(remainingMs / MONTH);

    return result += ` ${numOfYears > 0 ? '& ' : ''}${numOfMonths} Month${numOfMonths > 1 ? 's':''}`
}

export function calculateTotalTime(times:Array<Object>){
    //combine multiple periods for when a break in skill is present
}
const IS_ABSENT=0;
let empCheck = Math.floor(Math.random()* 10)%2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent");
    return;
}
else{
    console.log("Employee is present");
}
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let emphrs=0;
empCheck=Math.floor(Math.random()*10)%3;
switch (empCheck){
    case IS_PART_TIME:
        emphrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        emphrs=FULL_TIME_HOURS;
        break;
    default:
            emphrs=0;
    
}
let empWage = emphrs * WAGE_PER_HOUR;
console.log("Emp Wage : " + empWage);

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage : "+empWage);
let NUM_OF_WORKING_DAYS=2;
emphrs=0;
for(let day=0; day<NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    emphrs+=getWorkingHours(empCheck);
}
empWage=emphrs*WAGE_PER_HOUR;
console.log("Total Hrs : "+emphrs+" Emp Wage : "+empWage);
MAX_HRS_IN_MONTH=10;
NUM_OF_WORKING_DAYS=10;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){    
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHours(empCheck);
}
empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("UC5-Total Days : "+totalWorkingDays+" Total Hrs : "+totalEmpHrs+" Emp Wage : "+empWage);
function calcDailyWage(emphrs){
    return emphrs*WAGE_PER_HOUR;
}
MAX_HRS_IN_MONTH=160;
NUM_OF_WORKING_DAYS=20;
totalEmpHrs=0
totalWorkingDays=0;
let empDailyWageArr=new Array();
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let emphrs=getWorkingHours(empCheck);
    totalEmpHrs+=emphrs;
    empDailyWageArr.push(calcDailyWage(emphrs));
}
empWage=calcDailyWage(totalEmpHrs);
console.log("UC6-Total Days : "+totalWorkingDays+" Total Hrs : "+totalEmpHrs+" Emp Wage : "+empWage);
// let name = 'ard';

/*switch(name){
    case 'Setu': console.log('your name is '+name);
    break;
    case 'ar': console.log('your name is '+name);
    break;
    case 'ek': console.log('your name is '+name);
    break;
    default: console.log('your name is '+name);
}*/

let day  = new Date().getDay();
let dayName;
// console.log(day)
switch(day){
    case 0: dayName ='sunday';
    break
    case 1:dayName ='monday';
    break;
    case 2: dayName='Tuesday';
    break;
    case 3: dayName='Wednesday';
    break;
    case 4: dayName='Thursday';
    break;
    case 5: dayName='Friday';
    break;
    case 6: dayName='Saturday';
    break;

}
console.log(dayName);


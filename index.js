// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun("swim"));

console.log(mondayWork("work from home")); // hoisting

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}


function wrapAdjective(adj="*"){
    const x = function innerFun(par = "special") {
        return `You are ${adj}${par}${adj}!`
    }
    return x;
 };
 console.log(wrapAdjective()("a dedicated programmer"));
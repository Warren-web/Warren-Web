function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

function pi(a){
    return (a*a)*3.14
}
console.log(pi(2));

function TrueOrFalse(a,b){
    if(a + b < 100){
        return true;
    }else{
      return false;
}
}
console.log(TrueOrFalse(22,5));

function leapyear(a)
{
return (a % 4 === 0);
}
console.log(leapyear(2016));

function ten(a, b) 
{
  return ((a == 10 || b == 10) || (a + b == 10));
}
console.log(ten(5, 5));
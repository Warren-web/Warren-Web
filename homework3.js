let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const Age = 21;

if (Age > 18 && registeredEarly) {
   raceNumber += 1000;

}

if (Age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}`);
} else if (Age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`);
} else if (Age < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}`);
} else if (Age === 18) {
  console.log ('Go to the registration desk');
}


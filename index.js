
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, value) {
    
    const surpriseCard = [];

 for (let i = 0; i < names.length; i++)  {
        surpriseCard.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    };
  return surpriseCard;
};

function countDown() {
    let countNumber = 10;
while (countNumber >= 0) {
  console.log(countNumber--);
}
}










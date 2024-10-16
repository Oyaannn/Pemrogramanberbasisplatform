let studentScore = [
    {
        name  : 'Andi',
        score : 90
    },
    {
        name  : 'Rudi',
        score : 80
    },
    {
        name  : 'Dira',
        score : 100
    }
];

let highestScore   = 0;
let highest        = {};

for (let student of studentScore) {
    if (student.score > highestScore) {
        highestScore = student.score;
        highest      = student.name;
    }
}

console.log(`The student with the largest score is ${highestScore} with a score of ${highest}`);



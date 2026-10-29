const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    let verdict = "Almost Impossible";

    if (runsNeeded <= 0) {
        return "Won";
    } else if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate > 6 && requiredRate <= 12) {
        verdict = "Tough";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));
console.log(getChaseVerdict(100, 70, 25));

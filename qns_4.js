function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    const minFare = 50;
    const defaultDistance = 2;
    const chargePerKM = 15;
    const waitingCharge = 2;
    const nightTimeExtraFare = 0.2;

    if(distance < defaultDistance) {
        distance = defaultDistance;
    }

    distance = distance - defaultDistance

    let totalFare = minFare + (distance * chargePerKM) + (waitingMinutes * waitingCharge);

    if(isNight) {
        const extraFare = totalFare * nightTimeExtraFare;

        totalFare += extraFare;
    }

    return totalFare;
}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));
// Question No. 1
function describeValue(value) {
    const valueType = typeof value;
    let truthyOrFalsy = "falsy";

    if (value) {
        truthyOrFalsy = "truthy";
    }

    const outputString = `${valueType} | ${truthyOrFalsy}`;

    return outputString;
}

// Question No. 2
function getDayType(day) {
    day = day.toLowerCase();

    let dayType = "Invalid Day";

    switch (day) {
        case "friday":
        case "saturday":
            dayType = "Weekend";
            break;
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            dayType = "Working Day";
            break;
        default:
            break;
    }

    return dayType;
}

// Question No. 3
function validateUsername(username) {
    username = username.toLowerCase();

    if (username.length < 4) {
        return "Too Short";
    } else if (username.includes(" ")) {
        return "No Space Allowed";
    } else if (username.includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}

// Question No. 4
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

// Question No. 5
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
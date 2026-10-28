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
// Question No. 5

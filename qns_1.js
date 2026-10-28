function describeValue(value) {
    const valueType = typeof(value);
    let truthyOrFalsy = "falsy";
    
    if(value) {
        truthyOrFalsy = "truthy";
    }
    
    const outputString = `${valueType} | ${truthyOrFalsy}`;

    return outputString;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue("0"));
console.log(describeValue(NaN));
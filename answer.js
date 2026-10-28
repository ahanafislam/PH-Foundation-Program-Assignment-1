function describeValue(value) {
    const valueType = typeof(value);
    let truthyOrFalsy = "falsy";
    
    if(value) {
        truthyOrFalsy = "truthy";
    }
    
    const outputString = `${valueType} | ${truthyOrFalsy}`;

    return outputString;
}
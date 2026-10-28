function describeValue(value) {
    const valueType = typeof(value);
    let truthyOrFalsy = "falsy";
    
    if(value) {
        truthyOrFalsy = "truthy";
    }
    
    const outputString = `${valueType} | ${truthyOrFalsy}`;

    return outputString;
}

function getDayType(day) {
   day = day.toLowerCase();
   
   let dayType = "Invalid Day";

   switch(day) {
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
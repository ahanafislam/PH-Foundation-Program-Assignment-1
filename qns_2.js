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

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));
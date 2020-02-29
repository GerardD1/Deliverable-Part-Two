function VactionDecision () {
    var result = "Since you're vacating somewhere + vacaType + with a group of + groupSize + you should travel to + result.";
    var vacaType = prompt("What kind of vacation are you having the urge for, musical, tropical, or adventurous?");
    var groupSize = prompt("How many people will be joining you on your trip?");
}

if (vacaType === Musical) {
    result = result + "New Orleans would be a great place to enjoy a variety of musical genius!";
}

else if (parseInt(vacaType) === Tropical);
result = result + "If your looking to enjoy some fun in the sun, a beach vacation in Mexico would be perfect!";

else {
    result = result + "Whitewater Rafting at the Grand Canyon would be a great adventure to embark on!";
}

if (groupSize <= 3) {
    result = result + "Recommended First Class traveling, have fun!";
}
else if (parseInt(groupSize) >= 3 && parseInt(groupSize) <= 5) {
    result = result + "Recommended helicopter travel, enoy your trip!";
}
else {
    result = result + "Recommended charter flight travel, have a safe flight!";
    console.log(result);
}

Footer: VacationDecision();
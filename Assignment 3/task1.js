function analyzePerson(name, age, place_to_live, savings) {
    let rank = null;

// Analysis for Don
    if (age > 40 &&
        (place_to_live === "Nevada" || place_to_live === "New York" || place_to_live === "Havana") &&
        savings > 10000000) {
        rank = "Don";
    }
// Analysis for Underboss
    else if (age >= 25 && age <= 40 &&
        (place_to_live === "New Jersey" || place_to_live === "Manhattan" || place_to_live === "Nevada") &&
        savings >= 1000000 && savings <= 2000000) {
        rank = "Underboss";
    }
// Analysis for Capo
    else if (age >= 18 && age <= 24 &&
        (place_to_live === "California" || place_to_live === "Detroit" || place_to_live === "Boston") &&
        savings < 1000000) {
        rank = "Capo";
    }

    if (rank) {
        return `${name} is likely a mafia member with rank ${rank}.`;
    } else {
        return `${name} is not suspicious.`;
    }
}

console.log(analyzePerson("Wildan", 45, "Nevada", 15000000));
console.log(analyzePerson("Putra", 30, "Manhattan", 1500000));
console.log(analyzePerson("Royan", 35, "Los Angeles", 5000000));

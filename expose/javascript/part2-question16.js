let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let carType in statistics) {
    // Condition 1: Property starts with the letter 'r'
    // Condition 2: Value of the property is an odd number
    if (carType.startsWith('r') || statistics[carType] % 2 !== 0) {
        console.log(statistics[carType]);
    }
}

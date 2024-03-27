// Define the valid pick-up and drop points
const validPickups: Set<string> = new Set(["A", "B"]);
const validDrops: Set<string> = new Set(["C", "D"]);

// Define the warehouse
const warehouse: string = "W";

// Function to check if a trip is valid
function isValidTrip(trip: [string, string]): boolean {
    const [pickup, drop] = trip;
    // Check if pick-up and drop points are valid
    if (!validPickups.has(pickup) || !validDrops.has(drop)) {
        return false;
    }
    // Check if trip involving warehouse is valid
    if (pickup !== warehouse && drop !== warehouse) {
        return false;
    }
    // Check if via point (warehouse) is in-between pick-up and drop
    if (pickup === warehouse && drop === warehouse) {
        return false;
    }
    return true;
}

// Given list of trips
const trips: Array<[string, string]> = [
    ["A", "W1"],
    ["B", "W2"],
    ["W3", "C"],
    ["W4", "D"]
];

// Validate each trip
const validTrips: Array<[string, string]> = trips.filter(trip => isValidTrip(trip));

// Print the valid trips
console.log("Valid trips:", validTrips);



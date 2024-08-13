class UberRide {
    constructor(distance, time, ratePerKm, ratePerMinute) {
    this.distance = distance; // in kilometers
    this.time = time; // in minutes
    this.ratePerKm = ratePerKm; // rate per kilometer
    this.ratePerMinute = ratePerMinute; // rate per minute
    }
    
    // Method to calculate the total price of the ride
    calculatePrice() {
    const distanceCost = this.distance * this.ratePerKm;
    const timeCost = this.time * this.ratePerMinute;
    const totalPrice = distanceCost + timeCost;
    return totalPrice;
    }
    }
    
    // Example usage:
    const ride = new UberRide(10, 30, 15, 2); // 10 km, 30 minutes, 15 currency units per km, 2 currency units per minute
    const price = ride.calculatePrice();
    
    console.log(`The total price of the Uber ride is: ${price} currency units`);
    // Output: The total price of the Uber ride is: 210 currency units
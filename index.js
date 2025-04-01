class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Getter for diameter (diameter = 2 * radius)
    get diameter() {
        return this.radius * 2;
    }

    // Setter for diameter (radius = diameter / 2)
    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    // Getter for circumference (circumference = π * diameter)
    get circumference() {
        return Math.PI * this.diameter;
    }

    // Setter for circumference (radius = circumference / (2 * π))
    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI);
    }

    // Getter for area (area = π * radius^2)
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Setter for area (radius = sqrt(area / π))
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}
const circle1 = new Circle(5); 

console.log(circle1.diameter); 
console.log(circle1.circumference); 
console.log(circle1.area); 

circle1.diameter = 20; 
console.log(circle1.radius); 

circle1.circumference = 62.8319;
console.log(circle1.radius);

circle1.area = 314.159;
console.log(circle1.radius);

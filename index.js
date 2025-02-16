// 1. Subtract the square of each number from that number
const numsArray = [10, 5, 8, 4, 6];
const result1 = numsArray.map((num) => num - num ** 2);
console.log(result1);

// 2. Double the negative numbers and subtract from original
const numbsArray = [3, -2, -5, 12, 8, -4, 7];
const result2 = numbsArray.map((num) => (num < 0 ? num - 2 * num : num));
console.log(result2);

// 3. Append word count to each sentence
const sentencesArray = [
  "JavaScript is a powerful programming language.",
  "Web development involves frontend and backend technologies.",
  "Coding is a skill that can be learned and mastered over time.",
];
const result3 = sentencesArray.map(
  (sentence) => `${sentence} ${sentence.split(" ").length}`
);
console.log(result3);

// 4. Extract brands from cars
const cars = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Honda", model: "Accord" },
  { brand: "Ford", model: "Mustang" },
];
const result4 = cars.map((car) => car.brand);
console.log(result4);

// 5. Extract genres from movies
const movies = [
  { title: "Inception", genre: "Sci-Fi" },
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Dark Knight", genre: "Action" },
];
const result5 = movies.map((movie) => movie.genre);
console.log(result5);

// 6. Increase furniture dimensions by 10%
const furniture = [
  { type: "Sofa", width: 200, height: 80 },
  { type: "Table", width: 120, height: 60 },
  { type: "Chair", width: 50, height: 45 },
];
const result6 = furniture.map((item) => ({
  type: item.type,
  width: (item.width * 1.1).toFixed(1),
  height: (item.height * 1.1).toFixed(1),
}));
console.log(result6);

// 7. Add affordability property to products
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 50 },
  { name: "Camera", price: 300 },
];
const result7 = products.map((product) => ({
  ...product,
  affordable: product.price <= 100,
}));
console.log(result7);

// 8. Filter even negative numbers
const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];
const result8 = numbers.filter((num) => num < 0 && num % 2 === 0);
console.log(result8);

// 9. Filter students meeting conditions
const students = [
  { name: "Alice", score: 85, activeParticipant: true, club: "Math" },
  { name: "Bob", score: 55, activeParticipant: false, club: "History" },
  { name: "Charlie", score: 75, activeParticipant: true, club: "Science" },
];
const result9 = students.filter(
  (student) =>
    student.score > 70 &&
    student.activeParticipant &&
    ["Math", "Science"].includes(student.club)
);
console.log(result9);

// 10. Filter words containing 'a' and having more than 5 characters
const words = [
  "apple",
  "banana",
  "kiwi",
  "grape",
  "pear",
  "orange",
  "strawberry",
];
const result10 = words.filter((word) => word.includes("a") && word.length > 5);
console.log(result10);

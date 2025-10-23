const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 17 },
  { name: "Chi", age: 30 },
  { name: "Dũng", age: 20 }
];

const adults = users.filter(user => user.age >= 18)
                    .sort((a, b) => a.age - b.age)
                    .map(user => user.name);

console.log(" Danh sách người dùng từ 18 tuổi trở lên:", adults);

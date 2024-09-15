// function maxProfitCities(A, B) {
//   const days = A.length;
//   const dp = [];
//   for (let day = days - 1; day >= 0; day--) {
//     dp[day] = [];
//     dp[day].push(Math.max(A[day] + dp[day + 1][0], dp[day + 1][1]));
//     dp[day].push(Math.max(A[day] + dp[day + 1][1], dp[day + 1][0]));
//   }

//   let currentCity = dp[0][0] > dp[0][1] ? 0 : 1;
//   for (let day = 0; day < days; day++) {
//     if (currentCity === 0) {
//       if (A[day] + dp[day + 1][0] > dp[day + (1)[1]]) {
//         currentCity += 'A';
//       }
//     }
//   }
// }

function maxProfitCities(A, B) {
  const cities = { A, B };
  function traverse(day, currentCity, visited = new Map()) {
    const key = `${day}_${currentCity}`;
    if (visited.has(key)) {
      return visited.get(key);
    }

    if (day >= cities[currentCity].length) {
      return [0, ''];
    }

    const [p1, path1] = traverse(day + 1, currentCity, visited);
    const [p2, path2] = traverse(
      day + 2,
      currentCity === 'A' ? 'B' : 'A',
      visited
    );
    let path = currentCity;
    let profit = cities[currentCity][day];

    if (p1 >= p2) {
      profit += p1;
      path += path1;
    } else {
      profit += p2;
      path += 'T' + path2;
    }

    visited.set(key, [profit, path]);
    return [profit, path];
  }

  const withA = traverse(0, 'A');
  const withB = traverse(0, 'B');

  console.log(withA, withB);
}

console.log(maxProfitCities([25, 10, 15, 10, 70], [50, 5, 50, 5, 30]));
console.log(maxProfitCities([23, 4, 5, 101], [21, 1, 10, 101]));

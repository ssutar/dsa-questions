/**
 * you are given an array of houses in a neighboorhood in a city.
you have to rearrange houses in such a way that in a single neighbourhood the houses are sorted by number in ascending order and no 2 houses with same number are in same neighbourhood.
you can only rearrange house based on the capacity of each neighbourhood . If neighbourhood "1" in input has 2 houses then at output also it can only have 2 houses.

For example-
{
{1,2},
{4,4,7,8},
{4,9,9,9}
}

becomes
{
{4,9},
{1,2,4,9},
{4,7,8,9}
}
 */

function housesInNeighborhood(neighborhoods) {
  const neiLength = neighborhoods.length;
  const map = {};
  const capacity = [];

  for (let nei of neighborhoods) {
    capacity.push(nei.length);
    for (let house of nei) {
      if (!map[house]) {
        map[house] = [0, 0];
      }
      const [_, f] = map[house];
      map[house] = [house, f + 1];
    }
  }

  const freq = Object.values(map);
  freq.sort((f1, f2) => f2[1] - f1[1]);
  const result = [];

  for (let i = 0; i < neiLength; i++) {
    result[i] = [];
    for (let c = 0; c < capacity[i]; c++) {
      result[i].push(freq[c][0]);
      freq[c][1] -= 1;
    }
    result[i].sort();
    freq.sort((f1, f2) => f2[1] - f1[1]);
  }

  return result;
}

console.log(
  housesInNeighborhood([
    [1, 2],
    [4, 4, 7, 8],
    [4, 9, 9, 9],
  ])
);

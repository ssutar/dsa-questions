/**
 * 
 * https://leetcode.com/discuss/interview-question/5004476/Google-L5-Round-1
 * 
 * There is a N player tournament. Players have rank 1 to N and each player has a unique rank. Assume that the best player always wins.

The tournament is knockout format. Which means if we have 8 players [a b c d e f g h] with their ranks [1 2 3 4 5 6 7 8], the tournament will look like this:
1st round: [a b] [c d] [e f] [g h]
2nd round: [a c] [e g]
3rd round: [a e]
champion : [a]

We are calling [a b c d e f g h] or [1 2 3 4 5 6 7 8] a "draw" where in the 1st round: first two players meet in the first match, the next two players meet in the second match and so on.

In the 2nd round: in the first match, the winner of the first match of 1st round and the winner of the second match of 1st round will play together. And similarly in the second match,
the winner of the third match of 1st round and the winner of the fourth match of 1st round will play together.

In short: given a draw, if we don't change the order of the players, players will meet in their order on the draw, and of course the winner moves to the next round. The tournament ends when there is only a single player is remaining.

Problem:
A draw is a valid draw when in each round, the best (based on rank) player plays with the worst player, the second best player plays with the second worst player and so on.

Problem 1:
Given a draw, find out whether it is a valid draw.

Round 1: [1,8,6,2,7,3,4,5] -> valid
Round 2: [1,2,3,4] -> invalid

Round 1: [1,8,4,5,3,6,2,7] -> valid
Round 2: [1,4,3,2] -> valid
Round 3: [1,2] -> valid

Round 1: [1,8,4,5,2,7,3,6] -> valid
Round 2: [1,4,2,3] -> valid
Round 3: [1,2] -> valid


 */

function isTournamentDraw(players) {
  let que = [];
  for (let p of players) {
    que.push(p);
  }
  let nextRound = [];
  let size = que.length;
  while (size > 1) {
    const p1 = que.shift();
    const p2 = que.shift();
    if (p1 + p2 !== size + 1) {
      return false;
    }
    nextRound.push(Math.min(p1, p2));
    if (que.length <= 1) {
      que = que.concat(nextRound);
      size = que.length;
      nextRound = [];
    }
  }
  return true;
}

console.log(isTournamentDraw([1, 8, 4, 5, 3, 6, 2, 7]));
console.log(isTournamentDraw([1, 8, 6, 2, 7, 3, 4, 5]));
console.log(isTournamentDraw([1, 4, 3, 2]));
console.log(isTournamentDraw([1, 2]));

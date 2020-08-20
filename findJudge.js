var xfindJudge = function(N, trust) {
  // edge cases 
  if (N === 1) return 1;
  if (!N || !trust) return -1;
  // create objects to store who trusts each town member and vice versa
  const whoIsTrusted = {};
  const whoTrustsWho = {};

  let judge;

  for (let i = 0; i < trust.length; i++) {
      let [a,b] = trust[i];

      if (!whoIsTrusted[b]) {
        whoIsTrusted[b] = [a];
      } else {
        whoIsTrusted[b].push(a);
      }

      if (!whoTrustsWho[a]) {
        whoTrustsWho[a] = [b];
      } else {
        whoTrustsWho[a].push(b);
      }
  }

  // iterate through each town member and see if there 
  for (let i = 1; i <= N; i++) {
    if (!whoTrustsWho[i] && whoIsTrusted[i]) {
      if (whoIsTrusted[i].length === N-1){
        judge = i;
      }
    }
  }

  // if judge, return
  if (!judge) return -1;
  return judge;
};

var findJudge = function(N, trust) {
  // edge cases 
  if (N === 1) return 1;
  if (!N || !trust) return -1;
  // create objects to store who trusts each town member and vice versa
  const whoIsTrusted = Array(N+1).fill(0);
  const whoTrustsWho = Array(N+1).fill(0);

  for (let i = 0; i < trust.length; i++) {
    let [a,b] = trust[i];

    whoTrustsWho[a]++;
    whoIsTrusted[b]++;
  }

  // iterate through each town member and see if there 
  for (let i = 1; i <= N; i++) {
    if (whoTrustsWho[i] == 0 && whoIsTrusted[i] == N-1) {
      return i;
    }
  }

  return -1;
};

// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// Output: 3

console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));

console.log(findJudge(11, [[1,8],[1,3],[2,8],[2,3],[4,8],[4,3],[5,8],[5,3],[6,8],[6,3],[7,8],[7,3],[9,8],[9,3],[11,8],[11,3]]));
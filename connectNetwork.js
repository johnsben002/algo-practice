/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

 /**
  * 
  * There are n computers numbered from 0 to n-1 connected by ethernet cables connections forming a network where connections[i] = [a, b] represents a connection between computers a and b. Any computer can reach any other computer directly or indirectly through the network.
  * 
  * Given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected. Return the minimum number of times you need to do this in order to make all the computers connected. If it's not possible, return -1. } n 
  * 
  */

var makeConnected = function(n, connections) {
    /**
     * STRATEGY:
     * - iterate through connections and check if both computers are in the set of connected computers
     * - add any that are not currently in set to set
     * - if both of them are already in the set, increase extra cable counter
     * - if neither of them are in the set, save index for later checking
     * 
     * ATTEMPT 2:
     * - 
     */

     const network = new Set();
     let extraCables = 0;
     const outsideNetwork = {};

     // add first connections to start off
     network.add(connections[0][0]);
     network.add(connections[0][1]);

     
     for (let i = 1; i < connections.length; i++) {
       if (network.has(connections[i][0]) && network.has(connections[i][1])) {
         extraCables++;
       } else if(!network.has(connections[i][0]) && !network.has(connections[i][1])) {
         outsideNetwork[i] = connections[i];
       } else {
         network.add(connections[i][0]);
         network.add(connections[i][1]);
       }
     }

     console.log(network)
     if (network.size === n) return 0;
     if (n-network.size <= extraCables) return n-network.size;
     return -1;

};

// console.log(makeConnected(4, [[0,1],[0,2],[1,2]]));
// console.log(makeConnected(6, [[0,1],[0,2],[0,3],[1,2],[1,3]]));
// console.log(makeConnected(6, [[0,1],[0,2],[0,3],[1,2]]));
console.log(makeConnected(5, [[0,1],[0,2],[3,4],[2,3]]));
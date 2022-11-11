// DESCRIPTION:
// Task
// You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

// Empty positions are marked ..
// Walls are marked W.
// Start and exit positions are empty in all test cases.

//My solution
function pathFinder(maze){
    maze = maze.split('\n').map(el => el.split(''));
    const n = maze.length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0 , -1, 1];
    let visited = Array.from(new Array(n), () => Array(n).fill(0));
    let queue = [];
    queue.push([0, 0]);
    visited[0][0] = 1;
    let num = 0
    while(num < queue.length){
      const [x, y] = queue[num];
      for(let i = 0; i < 4; i++){
        const xPos = x + dx[i];
        const yPos = y + dy[i];
        
        if(xPos < 0 || yPos < 0 || xPos >= n || yPos >= n) continue;
        if(maze[xPos][yPos] === 'W' || visited[xPos][yPos] === 1) continue;
        visited[xPos][yPos] = 1;
        queue.push([xPos, yPos]);
      }
      num++;
    }
    if(visited[n - 1][n - 1] !== 1) return false;
    return true;
}
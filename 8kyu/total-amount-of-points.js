//My solution
function points(games) {
    return games.reduce((a, b) => {
      let [x, y] = b.split(':');
      let n = 0;
      if(x > y) n = 3;
      if(x < y) n = 0;
      if(x === y) n = 1;
      return a + n;
    }, 0)
}
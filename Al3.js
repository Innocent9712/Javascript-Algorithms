// CHALLENGE 3: UTOPIAN TREE
// The Utopian Tree goes through 2 cycles of growth every year.
// The first growth cycle occurs during the spring, when it doubles in height.
// The second growth cycle occurs during the summer, when its height increases by 1 meter.
// Now, a new Utopian Tree sapling is planted at the onset of spring.Its height is 1 meter.
// Can you find the height of the tree after N growth cycles ?

// The algorithm is pretty simple.only complication is that it looks mathematical.
// so we gotta understand the word problem before we solve it.Goodluck

//UTOPIAN TREE SOLUTION
function getHeight(cycles){
  var currentHeight = 1;
 for(var i = 1; i <= cycles; i++){
  if(currentHeight%2 !== 0){
    currentHeight*=2
  }
  else{
  currentHeight+= 1;
  }
 }
  return currentHeight; 
}

getHeight(2)
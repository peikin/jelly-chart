var bar = jelly.bar().container('#jelly-container')
  .data([
    {category:'Blue', name: 'A', value: 10},
    {category:'Blue', name: 'B', value: 20},
    {category:'Blue', name: 'C', value: 30},
    {category:'Blue', name: 'D', value: 40},
    {category:'Red', name: 'A', value: 20},
    {category:'Red', name: 'B', value: 10},
    {category:'Red', name: 'C', value: 40},
    {category:'Red', name: 'D', value: 10}
  ]).dimensions(['category', 'name'])
  .measures('value')
  .axis('x').axis('y')
  .legend(true)
bar.render();

var mutePhase = true; 
setInterval(function() {
  if (mutePhase) {
    bar.muteRegions('Blue'); //mute regions except for ones with Blue key
  } else {
    bar.demuteRegions(function(d) {
      return d.key !== 'Blue'; //recover regions except for ones with Blue key
    });
  }
  mutePhase = !mutePhase;
}, 800)
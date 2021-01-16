// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

/// ### JEI ITEM HIDING ### ///

onEvent('jei.hide.items', event => {
  // Hide items in JEI here.
  for (let item of [
    'appliedenergistics2:facade',
    'woot:debug',
    'woot:debug_tank',
    'zerocore:debugtool',
    'cyclic:item_infinite'
  ]) {
    event.hide(item)
    console.info(`Removed item '${item}' from JEI`)
  }
})
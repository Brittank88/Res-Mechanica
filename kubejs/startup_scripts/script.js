// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

/// ### CUSTOM ITEMS ### ///

// Listen to block registry event.
events.listen('item.registry', function (event) {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png.
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json.
  for (let item of [
    { 'id': 'worldedit:wand', 'display': 'WorldEdit Wand', 'tooltip': 'Credits to §eDarkpuppey§r for the texture! §d<3§r' }
  ]) {
    event.create(item['id']).displayName(item['display']).tooltip(item['tooltip'])
    console.info(`Registered item '${item['display']}' with ID '${item['id']}'`)
  }
})

onEvent('block.registry', event => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
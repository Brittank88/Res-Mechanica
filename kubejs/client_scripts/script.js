// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)');

/// ### JEI ITEM HIDING ### ///

onEvent('jei.hide.items', event => {
	// Hide items in JEI here.
	for (let item of [
		// AE2
		'appliedenergistics2:facade',
		// WOOT
		'woot:debug',
		'woot:debug_tank',
		// ZeroCore
		'zerocore:debugtool',
		// Cyclic
		'cyclic:item_infinite',
		// Ping Icons (Custom)
		'ping:icon_alert',
		'ping:icon_goto',
		'ping:icon_look',
		'ping:icon_mine'
	]) {
		event.hide(item);
		console.info(`Removed item '${item}' from JEI`);
	}
});

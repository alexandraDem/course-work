// JavaScript Variables.
let numBubbles	= 15,
		minSize			= 10,
		maxSize			= 70,
		container		= document.getElementById("container");

// Get the size of a bubble.
// Randomized between minSize and maxSize.
function bubbleSize() {
	return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
}

// Get the location of a bubble.
// Between left=2% and left=98%.
function bubbleLocation() {
	return Math.floor(Math.random() * 96) + 2;
}

// Create a bubble using the
// previous two functions.
function createBubble() {
	let size = bubbleSize(),
			location = bubbleLocation(),
			el = document.createElement("span");
		
	el.setAttribute("style", "width: " + size + "px; height: " + size + "px; left: " + location + "%;");
	
	container.appendChild(el);
}

// Start adding bubbles.
(function startBubbles() {
	let i = 0; 
	
	function addBubble() {
		if (i < numBubbles) {
			createBubble();
			i++;
		}
		else {
			clearInterval(inter);
		}
	}
	
	// Add a bubble every 500ms.
	// But we don't want too many bubbles...
	let inter = setInterval(addBubble, 500);
})();
class Network {
	
	
	
	getInfo() {
		return {
			"id": "Network",
			"name": "Network",
			"blocks": [
				{
					"opcode": "webAvailable",
					"blockType": "Boolean",
					"text": "available",
					"arguments": {
					}
				},
				{
					"opcode": "open",
					"blockType": "BlockType.COMMAND",
					"text": "address",
					"arguments": {
						"addr": {
							"type": "string",
							"defaultValue": "localhost:9999"
						}
					}
				},
				{
					"opcode": "sendcoord",
					"blockType": "reporter",
					"text": "id [id] x: [x] y: [y]",
					"arguments": {
						"x": {
							"type": "number",
							"defaultValue": "0"
						},
						"y": {
							"type": "number",
							"defaultValue": "0"
						},
						"id": {
							"type": "string",
							"defaultValue": "hello world"
						}
					}
				},

				],
				"menus": { //we will get back to this in a later tutorial
				}
		};
	}	

	webAvailable(){
		return "WebSocket" in window;
	}

	open(addr){
		// Let us open a web socket
		this.ws = new WebSocket("ws://"+addr);
	}

	onopen(){
		console.log(this.ws);
		console.log(ws);
		ws.onopen = function() {

			// Web Socket is connected, send data using send()
			ws.send("Message to send");
			alert("Message is sent...");
		};
	}

	onmessage(){
		ws.onmessage = function (evt) { 
			var received_msg = evt.data;
			alert("Message is received...");
		};
	}

	onclose(){
		ws.onclose = function() { 

			// websocket is closed.
			alert("Connection is closed..."); 
		};
	}

	sendcoord({id, x, y}) {
		//const sprites = vm.runtime.targets.filter(target => !target.isStage);
		//const data = sprites.map(sprite => ({x: sprite.x, y: sprite.y}));
		//    console.log(data);
		//s = JSON.stringify(data);
		return JSON.stringify({id, x, y});
	};
}
Scratch.extensions.register(new Network());

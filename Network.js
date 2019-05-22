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
					"blockType": "command",
					"text": "address [addr]",
					"arguments": {
						"addr": {
							"type": "string",
							"defaultValue": "localhost:9001"
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
		console.log("aaaaaaa");
		const ws = new WebSocket("ws://"+addr);
		console.log("bbbbbb");
		this.ws=ws;
		console.log("cccccc");
		ws.onopen = function() {
            
            // Web Socket is connected, send data using send()
            ws.send("Message to send");
            console.log("Message is sent...");

            alert("Message is sent...");
         };
			
         ws.onmessage = function (evt) { 
            var received_msg = evt.data;
            console.log("received_msg: "+received_msg);
            alert("Message is received...");
         };
			
         ws.onclose = function() { 
            
            // websocket is closed.
            alert("Connection is closed..."); 
         };
	}

	onopen(msg){

	}

	onmessage(){
		
	}

	onclose(){
		
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

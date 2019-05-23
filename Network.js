class Network {

	constructor(){
		this.msg="";
	}
	
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
							"defaultValue": "localhost:8080/WebSocket/endpoint"
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
				{
	                "opcode": "whenArriveMsg",
	                "blockType": "hat",
	                "text": "quando arriva messaggio",
	                "arguments": {}
				},
				
				
				],
				"menus": { //we will get back to this in a later tutorial
				}
		};
	}	

	webAvailable(){
		return "WebSocket" in window;
	}
	
	whenArriveMsg(){
		console.log("whenArriveMsg");
	}

	open({addr}){
		// Let us open a web socket
		console.log("aaaaaaa");
		const a = "ws://"+addr;
		console.log(a);
		const myws = new WebSocket(a);
		console.log("bbbbbb");
		this.ws=myws;
		console.log("cccccc");
		this.ws.onopen = function() {

			// Web Socket is connected, send data using send()
			console.log("mando messaggio");
			this.ws.send("Message to send");
			console.log("Message is sent...");

			alert("Message is sent...");
		};

		console.log("dddddddd");

		this.ws.onmessage = function (evt) { 
			var received_msg = evt.data;
			console.log("received_msg: "+received_msg);
			alert("Message is received...");
		};

		this.ws.onclose = function() { 

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

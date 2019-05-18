class Network {
    getInfo() {
        return {
            "id": "Network",
            "name": "Network",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "letters [num1] through [num2] of [string]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "2"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "hello world"
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
    substringy({num1, num2, string}) {
        return string.substring(num1 - 1, num2);
    };
    sendcoord({id, x, y}) {
        //const sprites = vm.runtime.targets.filter(target => !target.isStage);
        //const data = sprites.map(sprite => ({x: sprite.x, y: sprite.y}));
	//    console.log(data);
        //s = JSON.stringify(data);
	return JSON.stringify({id, x, y});
    };
}
Scratch.extensions.register(new Network());

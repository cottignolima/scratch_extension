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
                    "opcode": "debugstring",
                    "blockType": "reporter",
                    "text": "coord",
                    "arguments": {}
            }
            
            ],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    }
    substringy({num1, num2, string}) {
        return string.substring(num1 - 1, num2);
    };
    debugstring() {
        const sprites = vm.targets.filter(target => !target.isStage);
        const data = sprites.map(sprite => ({x: sprite.x, y: sprite.x}));
        var value;
		var s = "";
		Object.keys(data).forEach(function(key) {
			console.log("k: "+key)
		    value = map[key];
			console.log("v: "+value)
		    s+=value;
		});
		return "COORD: "+s;
    };
}
Scratch.extensions.register(new Network());

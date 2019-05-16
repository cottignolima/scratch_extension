class NitroBlock2 {
    getInfo() {
        return {
            "id": "NitroBlock2",
            "name": "NitroBlock2",
            "blocks": [{
                    "opcode": "substringy222",
                    "blockType": "reporter",
                    "text": "lettera da [num1] a [num2] di [string]",
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
                            "defaultValue": "gino e pino"
                        }
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    }//getInfo
    substringy222({num1, num2, string}) {
        return string.substring(num1 - 1, num2);
    };
}
Scratch.extensions.register(new NitroBlock2());

import { createFromPasswordAndLogin } from '../src/index.js';

async function test() {
    let api = await createFromPasswordAndLogin('http://localhost', 'admin', 'shopware', 1);

    console.log(api.EntityDefinition.getRequiredFields('product'));
}

test();
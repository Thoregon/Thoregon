/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { Vault, VaultMemStore, VaultFileStore }     from "/evolux.everblack";

const key = "1passwort";

(async () => {
    let mem     = new VaultMemStore();
    let file    = new VaultFileStore('test/vault.tvs');
    let vault1  = new Vault();

    vault1.useStore(file);
    await vault1.unlock(key);

    await vault1.createPair('alice');
    await vault1.createPair('bob');

    await vault1.save();

    let vault2 = new Vault();

    await vault2.useStore(file);
    await vault2.unlock(key);

    let entries = await vault2.list();

    console.log('Valut:', entries);
})();

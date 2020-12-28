/**
 * Thoregon micro kernel
 *
 * Works as a bootloader, loads basic components.
 * - ipfs
 * From ipfs:
 * - gun
 * - evolux.universe
 * - evolux.dyncomponents
 *
 * @author: Bernhard Lukassen
 * @licence: MIT
 * @see: {@link https://github.com/Thoregon}
 */

export default class PULS {

    async boot() {
        // install service worker with the IPFS peer
        // import basic THORE͛GON components
        // and boot
    }
}

(async () => {
    await new PULS().boot();
})();

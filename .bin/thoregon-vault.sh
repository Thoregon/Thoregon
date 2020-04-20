#!/usr/bin/env node --loader ../evolux.modules/evolux.universe/bootloader.mjs

import vault from '../thoregon-vault.mjs';

(async () => {
  await vault();
})();

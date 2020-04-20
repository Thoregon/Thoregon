#!/usr/bin/env node --loader ../evolux.modules/evolux.universe/bootloader.mjs

import thoregoncli from '../thoregon-cli.mjs';

(async () => {
  await thoregoncli();
})();


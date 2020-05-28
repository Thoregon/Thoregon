#!/bin/sh
# exec this script in the THOREGON_HOME directory

# create the thoregon root dir
# mkdir Thoregon
# cd Thoregon

# now the evolux.modules
mkdir evolux.modules
cd evolux.modules

git clone https://github.com/Thoregon/evolux.universe.git
cd evolux.universe
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.util.git
cd evolux.util
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.supervise.git
cd evolux.supervise
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.matter.git
cd evolux.matter
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.dyncomponents.git
cd evolux.dyncomponents
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.dynlayers.git
cd evolux.dynlayers
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.schema.git
cd evolux.schema
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.everblack.git
cd evolux.everblack
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.pubsub.git
cd evolux.pubsub
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.ui.git
cd evolux.ui
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.web.git
cd evolux.web
npm install
npm audit fix
cd ..

# now thoregon.modules
cd ..
mkdir thoregon.modules
cd thoregon.modules

git clone https://github.com/Thoregon/thoregon.identity.git
cd thoregon.identity
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.karte.git
cd thoregon.karte
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.tru4D.git
cd thoregon.tru4D
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.heliots.git
cd thoregon.heliots
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.conversation.git
cd thoregon.conversation
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.truCloud.git
cd thoregon.truCloud
npm install
npm audit fix
cd ..

# now terra.modules
cd ..
mkdir terra.modules
cd terra.modules

git clone https://github.com/Thoregon/terra.gun.git
cd terra.gun
npm install
npm audit fix

cd ..
cd ..       // should be the thoregon root dir

# now the Thoregon Node itself
git clone https://github.com/Thoregon/Thoregon.git
cd Thoregon
npm install
npm audit fix

cd ..
cd ..        // should be the thoregon root dir

#
# generate node id and keypair
#



# ask user for passphrase
# todo [OPEN]:
#  - BIP39: Mnemonic code for generating deterministic keys
#  -

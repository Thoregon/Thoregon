#!/usr/bin/env bash
# exec this script in the THOREGON_HOME directory

# create the thoregon root dir
# mkdir Thoregon
# cd Thoregon

# first install the CLI
# npm install -g thoregon-cli
echo "@ `pwd`"
# now the evolux.modules
mkdir evolux.modules
cd evolux.modules

echo "evolux.universe"
git clone https://github.com/Thoregon/evolux.universe.git
cd evolux.universe
echo "@ `pwd`"
npm install
npm audit fix
cd ..

git clone https://github.com/Thoregon/evolux.util.git
cd evolux.util
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.supervise.git
cd evolux.supervise
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.matter.git
cd evolux.matter
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.dyncomponents.git
cd evolux.dyncomponents
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.dynlayers.git
cd evolux.dynlayers
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.schema.git
cd evolux.schema
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.everblack.git
cd evolux.everblack
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.pubsub.git
cd evolux.pubsub
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.ui.git
cd evolux.ui
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/evolux.web.git
cd evolux.web
echo "@ `pwd`"
npm install
npm audit fix
cd ..

# now thoregon.modules
cd ..
echo "@ `pwd`"
mkdir thoregon.modules
cd thoregon.modules

git clone https://github.com/Thoregon/thoregon.identity.git
cd thoregon.identity
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.karte.git
cd thoregon.karte
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.tru4D.git
cd thoregon.tru4D
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.heliots.git
cd thoregon.heliots
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.conversation.git
cd thoregon.conversation
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.truCloud.git
cd thoregon.truCloud
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.aurora.git
cd thoregon.aurora
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.collaboration.git
cd thoregon.aurora
echo "@ `pwd`"
npm install
npm audit fix
cd ..
git clone https://github.com/Thoregon/thoregon.widget.git
cd thoregon.widget
echo "@ `pwd`"
npm install
npm audit fix
cd ..

# now terra.modules
cd ..
echo "@ `pwd`"
mkdir terra.modules
cd terra.modules

git clone https://github.com/Thoregon/terra.gun.git
cd terra.gun
echo "@ `pwd`"
npm install
npm audit fix

cd ..
cd ..       // should be the thoregon root dir

echo "@ `pwd`"
# now the Thoregon Node itself
git clone https://github.com/Thoregon/Thoregon.git
cd Thoregon
echo "@ `pwd`"

npm install
npm audit fix

cd ..
cd ..        // should be the thoregon root dir
echo "@ `pwd`"

#
# generate node id and keypair
#



# ask user for passphrase
# todo [OPEN]:
#  - BIP39: Mnemonic code for generating deterministic keys
#  -

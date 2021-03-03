#!/usr/bin/env bash
# exec this script in the THOREGON_HOME directory

# update CLI
# npm install -g thoregon-cli

# now update modules
cd evolux.modules

cd evolux.universe
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.util
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.supervise
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.matter
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.dyncomponents
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.dynlayers
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.schema
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.everblack
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.pubsub
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.ui
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd evolux.web
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd ..
cd thoregon.modules

cd thoregon.identity
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd thoregon.karte
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd thoregon.tru4D
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd thoregon.heliots
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd thoregon.conversation
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd thoregon.truCloud
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd thoregon.aurora
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd thoregon.collaboration
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd thoregon.widget
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd ..
cd terra.modules

cd terra.gun
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..

cd ..

cd Thoregon
echo "@ `pwd`"
git pull
npm install
npm audit fix
cd ..
cd ..       // THOREGON_HOME


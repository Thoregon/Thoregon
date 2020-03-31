#!/bin/sh

cd evolux.modules

cd evolux.universe
git pull
npm install
npm audit fix
cd ..
cd evolux.util
git pull
npm install
npm audit fix
cd ..
cd evolux.supervise
git pull
npm install
npm audit fix
cd ..
cd evolux.matter
git pull
npm install
npm audit fix
cd ..
cd evolux.dyncomponents
git pull
npm install
npm audit fix
cd ..
cd evolux.schema
git pull
npm install
npm audit fix
cd ..
cd evolux.tru4D
git pull
npm install
npm audit fix
cd ..
cd evolux.everblack
git pull
npm install
npm audit fix
cd ..
cd evolux.pubsub
git pull
npm install
npm audit fix
cd ..
cd evolux.ui
git pull
npm install
npm audit fix
cd ..
cd evolux.web
git pull
npm install
npm audit fix
cd ..

cd ..
cd thoregon.modules

cd thoregon.identity
git pull
npm install
npm audit fix
cd ..
cd thoregon.karte
git pull
npm install
npm audit fix
cd ..
cd thoregon.heliots
git pull
npm install
npm audit fix
cd ..
cd thoregon.conversation
git pull
npm install
npm audit fix
cd ..
cd thoregon.truCloud
git pull
npm install
npm audit fix
cd ..

cd ..
cd terra.modules

cd terra.gun
git pull
npm install
npm audit fix
cd ..

cd ..
cd ..       // sollte wieder im Hauptverzeichnis sein

cd Thoregon
git pull
npm install
npm audit fix
cd ..

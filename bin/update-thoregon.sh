#!/bin/sh

cd evolux.modules

cd evolux.universe
git pull
npm install
cd evolux.util
git pull
npm install
cd evolux.supervise
git pull
npm install
cd evolux.matter
git pull
npm install
cd evolux.dyncomponents
git pull
npm install
cd evolux.schema
git pull
npm install
cd evolux.tru4D
git pull
npm install
cd evolux.everblack
git pull
npm install
cd evolux.pubsub
git pull
npm install
cd evolux.ui
git pull
npm install
cd evolux.web
git pull
npm install

cd ..
cd thoregon.modules

cd thoregon.identity
git pull
npm install
cd thoregon.karte
git pull
npm install
cd thoregon.heliots
git pull
npm install
cd thoregon.conversation
git pull
npm install
cd thoregon.truCloud
git pull
npm install

cd ..
cd terra.modules

cd terra.gun
git pull
npm install

cd ..
cd ..       // sollte wieder im Hauptverzeichnis sein

cd Thoregon
git pull
npm install

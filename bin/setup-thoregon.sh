#!/bin/sh

mkdir thoregon
cd thoregon

mkdir evolux.modules
cd evolux.modules

git clone https://github.com/Thoregon/evolux.universe.git
cd evolux.universe
npm install
git clone https://github.com/Thoregon/evolux.util.git
cd evolux.util
npm install
git clone https://github.com/Thoregon/evolux.supervise.git
cd evolux.supervise
npm install
git clone https://github.com/Thoregon/evolux.matter.git
cd evolux.matter
npm install
git clone https://github.com/Thoregon/evolux.dyncomponents.git
cd evolux.dyncomponents
npm install
git clone https://github.com/Thoregon/evolux.schema.git
cd evolux.schema
npm install
git clone https://github.com/Thoregon/evolux.tru4D.git
cd evolux.tru4D
npm install
git clone https://github.com/Thoregon/evolux.everblack.git
cd evolux.everblack
npm install
git clone https://github.com/Thoregon/evolux.pubsub.git
cd evolux.pubsub
npm install
git clone https://github.com/Thoregon/evolux.ui.git
cd evolux.ui
npm install
git clone https://github.com/Thoregon/evolux.web.git
cd evolux.web
npm install

cd ..
mkdir thoregon.modules
cd thoregon.modules

git clone https://github.com/Thoregon/thoregon.identity.git
cd thoregon.identity
npm install
git clone https://github.com/Thoregon/thoregon.karte.git
cd thoregon.karte
npm install
git clone https://github.com/Thoregon/thoregon.heliots.git
cd thoregon.heliots
npm install
git clone https://github.com/Thoregon/thoregon.conversation.git
cd thoregon.conversation
npm install
git clone https://github.com/Thoregon/thoregon.truCloud.git
cd thoregon.truCloud
npm install

cd ..
mkdir terra.modules
cd terra.modules

git clone https://github.com/Thoregon/terra.gun.git
cd terra.gun
npm install

cd ..
cd ..       // sollte wieder im Hauptverzeichnis sein

git clone https://github.com/Thoregon/Thoregon.git
cd Thoregon
npm install

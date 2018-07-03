# Thore͛gon Base Lib

Base classes for Thoregon components.

Usage:

    require('universe').letThereBeLight().then( universe => { } );


Depending on the STAGE, the config script will be 
It is a script not a definition (.json), means you can do whatever you want, e.g. doing
initializations of tunnels etc. But be carefull, if the script fails processing will be stopped 
which circumvents the inflation of the universe. The config may also do async initializations,
inflation will wait until all async operations did finish. There is no timeout, it is 
up to you to do proper initialization in time.

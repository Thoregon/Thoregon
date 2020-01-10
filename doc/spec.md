Thore͛gon
========

Thoregon is a full featured node which can be used to install bounded contexts.
It runs as a sovereign node which allows reliant nodes to attach.

Installable context/app server. Can be installed globally or a dev dependency.
The cli first looks if the current working dir has thoregon installed as a dev dependency.

## Boot
create a realm for each user and a scope for each node (installation). 
define the stage for the node.

##Universe Directory Struct

- universe
    - services      ... directory for all services
    - components    ... directory for all components (it may also be available in services)
    - matter        ... persistent entities
    - schema        ... schemas for entities
    - dddd          ... bounded contexts
    
Interfaces available on universe

    universe.logger
    universe.DEBUG
    (universe.scope)

Thore͛gon
========

Thore͛gon shows its flamboyance on account of his claim to be a world computer. 
It provides full featured peers (nodes), which can be used to install bounded contexts.
It runs as a sovereign node which allows reliant nodes to attach.

Installable context/app server. Can be installed globally or a dev dependency.
The cli first looks if the current working dir has thoregon installed as a dev dependency.

Because Thore͛gon is a distributed system, there can not exists a composition service, because it is a single point of failure
and can't handle different parts of the network.

Therefore, Thore͛gon uses choreography to setup its components and relations. Components use the Name Service and Discovery 
to find its counterparts. 
--> [orchestration vs choreography](https://stackoverflow.com/questions/4127241/orchestration-vs-choreography)


## Boot
create a realm for each user and a scope for each node (installation). 
define the stage for the node.

##Universe Directory Struct

- universe
    - services      ... directory for all services
    - components    ... directory for all components (it may also be available in services)
    - matter        ... persistent entities
    - schema        ... schemas for entities
    - handles       ... unique named objects handles in the universe: namespace.name -> one object
    - tags          ... tags on (multiple) objects: namespace.tag -> set of objects   
    - dddd          ... tru4D specs 
        - ctx       ... bounded contexts
        - events
        - commands
        - actions
        - aggregates
    - user          ... the current authenticated user (if so)
    
- matter 
    - components    ... component descriptors which will be installed/uninstalled interactive
    - dddd          ... command & event store
        - events
        - commands
            - current   ... current command has a chain with property 'prev' which contains the previous command
    - ${ctxid}.${collection} from bounded context gets a top level entry
    - [responsibilities]    for each responsibility a separate store is installed

Interfaces available on universe

    universe.logger
    universe.DEBUG
    (universe.scope)

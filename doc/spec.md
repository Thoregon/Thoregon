Thore͛gon
========

Thore͛gon shows its flamboyance on account of its claim to be a world computer. 
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
create a realm for each user and maybe a scope for each node (installation). 
define the stage for the node.

##Universe Directory Struct

- universe
    - now           ... get current date/time, if online network synced
    - services      ... directory for all services
    - components    ... directory for all components (it may also be available in services)
    - Matter        ... static methods for matter
    - matter        ... persistent entities
    - schema        ... schemas for entities
    - handles       ... unique named objects handles in the universe: namespace.name -> one object
    - tags          ... tags on (multiple) objects: namespace.tag -> set of objects   
    - dddd          ... tru4D specs 
        - meta      ... meta bounded contexts
            - events
            - commands
            - actions
            - aggregates
        - ctx       ... bounded context instances, persistent in matter
            - events
            - identities
                - {identity}
                    - {collection}
            - responsibilities    for each responsibility a separate store is installed
                - commands
                    - current   ... current command has a chain with property 'prev' which contains the previous command
            - {collection} from bounded context gets a top level entry
    - Identity      ... the identity controller, use to create, authenticate and drop identities
    - identity      ... the identity of the currently authenticated user (if so)
    
- matter 
    - components    ... component descriptors which will be installed/uninstalled interactive

Interfaces available on universe

    universe.logger
    universe.DEBUG
    (universe.scope)

# Galaxies

owner

Thoregon adds functions to ipfs. Now you can publish your apps over ipfs

# Nameservice

Define your galaxy in the universe. Names can now be defined hierarchically.
Use to identify your bounded contexts (meta and instances).

# Thoregon Events
Since a Thoregon peer is comprised of components and bounded contexts, there are a number of thoregon events

# Hostservice for Components
commercial infrastructure to host components and bounded context (parts)

# Dev

Hot reload by default only for Browser UI. Other components may not work when reloaded on every change.
 
# Firewall
In a distributed system every peer is vulnerable to DDNS attack. A firewall needs to prevent
this situations, but also needs to maintain consistency. 

1 The firewall prevents graphs from being overwritten by a put which is not allowed

2 For ever write permission there will be a max writes per period (second, ...)

vani͛llaT
========

vani͛llaT - Standard library of Thore͛gon

## TL;DR

## Paradigm

Since thoregon is a true distributed system, the programming model differs from cloud apps you are used to.
A distributed system is not an evolution of a decentralized system, it something completely different.

Thoregon is not a single package which you run an any machine. 
There will also no packagers be use to create an app. Compose your app by referencing components (and bounded contexts).
Components can have other components as dependencies
Yes, if you want, you can name it a package. But it is not really packaged, it is referenced in the universe. 
Of course you can also use a packager to build a component.

As we are used to blockchain systems like ethereum, components (whatever kind of component) needs to be deployed
to thoregon to become available and active.
A hot reload (deploy) for testing is avialable. This does not apply to the global universe, only on test thoregons.

### Universe

In the universe is the place where all thoregon peers reside. It is public accessible for everyone.
It looks like a global system where there are no servers and all information seems to be available
on your local computer.

### truCloud

### truServerless

is the development paradim and method to develop software for the truCloud 

## Encryption

Why is there encryption everywhere? You also use doors for your house or flat to give you some privacy. 
We apply encriptions anywhere that you 
- don't forget to use it
- that you don't regret not using it
- can retrive all your data even if you lose your computer 

Everything in your local DB is encrypted.

## Components

Thoregon follows a choreography model rather than an orchestration model.
[orchestration vs choreography](https://stackoverflow.com/questions/4127241/orchestration-vs-choreography)
In a choreography model there is no central coordination instance, the peers need to organise themselves.

The choreography continues in a single peer. Due to the high modularization of thoregon, the standard library
is spread over a number of components.

The component model of thoregon is highly dynamic. This means components can be installed and uninstalled 
during runtime. A component may not be available at a certain point in time, but become available later.
Using components always means checking/waiting for its availability.
Hence inversion of control and loose coupling are basic principles to understand and develop with thoregon. 
Inversion of control is also known as the "Hollywood Principle: Don't call us, we'll call you".

There are two basically two possible methods handling inversion of control:

once: Supports Promises, comfortable, but resolved only once when the required 
component/entity becomes available. Supports available and missing (with promises use then() and catch())   

reactive: With Callbacks, structurally more expensive, but called mutiple times whenever the state changes. You
always know about the current state.


There are also different kinds of API's:
- library
- module
- bounded context

When it is avialable, you can enable functionality in your component which depends on it or event extend the component
when it supports it.

Thoregon tries to implement all its functions within bounded contexts as far as possible.
There are only a few non bounded context like libraries and modules which are basically 
necessary for boot until bounded contexts can be used.

Bounded Contexts comes in two forms
- Meta Bounded Context      ... the definition of a bounded context, comparable to a Class
- Bounded Context           ... concrete manifestation of a bounded context, comparable to an Instance

Low level building blocks resides in 'evolux.modules'
Everything that constitutes Thoregon is located in 'thoregon.modules'
Wrappers and other extensions lives in 'terra.modules'  

The devlopment trinity:
- convention        ... just use the right names and identifiers. works like hooks, if it is on the right place and has the right name it will be applied.
- configuration     ... you are not happy with the naming, rename it.
- implementation    ... do what you want, but be careful.
Apply in this order: Use convention, if not sutable configure it, if not possible implement it.

BoundedContexts consequently follows an imutablility paradigm. Any entity can not be modified directly (well technically you can, but you shoud not).
To create or modify entities Commands must be used (this is simmilar to Flux Actions).

## Versions
In the universe, there is not a version installed, all versions are available at once.
Since you don't package a universe, you need to express which version your comonents are using.
The Version Management 

To provide the right versions for your components locally [pnpm](https://pnpm.js.org/) is used to save disk space 

## Storage
The storage is __eventually consistent__ and __offline first__ by design. But in the real world with terra 
bit networks, partition situations are very rare you can assume that the storage it is consistent. 
We cannot overcome the CAP theorem, but todays networks mitigate at least the partitions.
 
Two of the underlying data storage (GUN, IPFS) are sharded distributed data stores. This means each peer has only a
part of the whole data locally available. If there is a query for data which is not known if it exists, the network is 
asked. 

The consequence is, that an absence of something - a component or an entity - is __always__ a timeout! 
This may not be true, the answer may arrive one millisecond to late of due to a partition the required data
resides on a peer which is currently unreachable. But it's unlikely.
Partition situations (see CAP theorem) of the network also are detected always by a timeout.
Therefore the programming model always needs to use [conflict-free replicated data types](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (CRDT).

This may change your design thinking a lot. Often there is the need of atomic transations which includes many entities. 
E.g. withdraw from one account and deposit to another. This is only valid if both operations had been successfull. 

How to do the right design: 

Reduce it to one operation. Don't store the account balance at each account, store the transaction:
   e.g.
```json
  { "account-withdraw": 1234, "account-deposit": 5678, "amount": 10.0 }
```
  The drawback is, that you always have to calculate the current balance. And you have to check again at read if
  the transaction was allowd (negative balance!). 
  This can be mitigated by storing snapshots 
  (by the way, this is what the bitcoin blockchain does)
```json
  { 
    "from": [
      { "account": 1234, "balance": 100.0 },
      { "account": 5678, "balance": 90.0 }
    ], 
    "to": [
      { "account": 1234, "balance": 90.0 },
      { "account": 5678, "balance": 100.0 }
    ] 
  }
```
  well, this is a very simple example, you can store other (meta) data about your transaction. 
  The second variant enables you to safely purge old transaction if you don't need them anymore, because
  they store the current state of the entity. 
  
  But isn't there still a conflict possible? Yes in a partition situation. If there is the need of guaranteed transaction 
  sequences use one of the integrated blockchains. 

Another possibility is to use a CRDT counter to maintain the balance on both accounts. This is an eventually 
consistent design, but at the end it will be consistent. 

This design requirements applies also to other business documents like orders, invoices etc. 
Especially when maintaining warehouse entries there is a strong need for consistent transactions. 

Keep in mind:
- Last write wins
- When the multiple modification results in the same data the sequence doesn't matter 

Collections

Define the sequence you need
- maintain the order by properties or a function
- none, you get the order from your local DB
- gun state, the sequence at which state data arrives  

## Patterns & Templates 

For many requirements there are prefabricated component templates. Browse the thoregon repository
to find components to use as starting point. Often you don't need to start from scratch. 


## import 

The specification for the ES5 'import' statement requires (in browser environments) urls must start with either "/", "./", or "../"
Therefore modules written for node which imports node modules with just their name e.g.

    import fs   from 'fs';

can not be used in browser modules. 

Thoregon mittigates that by providing loaders. 
- Browserloader: redirects references for '/<module>' to the correct location
- Bootloader: implements the loader hook (see https://nodejs.org/api/esm.html)

Modules can be referenced by a leading '/' e.g.  

    import fs   from '/fs';

This will work in browser and in node environments 








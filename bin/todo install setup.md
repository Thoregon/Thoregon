Install
=======




Setup
=====

node privileges to bind 80 and 443

$ sudo setcap 'cap_net_bind_service=+ep' /usr/local/bin/node

``` bash
    $ sudo setcap 'cap_net_bind_service=+ep' `which node`
```

if __nvm__ is used, the __setcap__ must be done for all node versions you want to support
  

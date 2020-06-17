# prerequisites to run a thoregon peer

# allow node to open ports less than 1000
sudo setcap CAP_NET_BIND_SERVICE=+eip `which node`

# create a thoregon user and group
  sudo useradd -U thoregon


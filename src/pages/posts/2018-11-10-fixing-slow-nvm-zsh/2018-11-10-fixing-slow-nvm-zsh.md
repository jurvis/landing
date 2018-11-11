---
title: Fixing a slow initialisation of ZSH
date: "2018-11-10"
path: "/posts/fixing-a-slow-initialisation-of-zsh"
---
If you use `creationix/nvm` like I do, you will have probably ran into some painfully slow zsh startup times (10-ish seconds).

And this is not an uncommon symptom:
![](/_images/2018-11-10-fixing-slow-nvm-zsh/tg_image_1367217862.jpeg)

After digging through the interwebs for a bit, I could determine and conclude that the biggest culprit of all were these lines added to the end of `.zshrc` during the installation process:

```
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

There were many other solutions: lazy-loading, adding a `-no--use` flag to the running of `nvm.sh`, but what I found worked for me was the following script I [found](https://www.growingwiththeweb.com/2018/01/slow-nvm-init.html):

```
if [ -s "$HOME/.nvm/nvm.sh" ] && [ ! "$(type -t __init_nvm)" = function ]; then
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
  declare -a __node_commands=('nvm' 'node' 'npm' 'yarn' 'gulp' 'grunt' 'webpack')
  function __init_nvm() {
    for i in "${__node_commands[@]}"; do unalias $i; done
    . "$NVM_DIR"/nvm.sh
    unset __node_commands
    unset -f __init_nvm
  }
  for i in "${__node_commands[@]}"; do alias $i='__init_nvm && '$i; done
fi
```

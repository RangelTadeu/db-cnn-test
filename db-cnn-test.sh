#!/bin/bash

SHELL_NAME=$(basename $SHELL)

if [ "$SHELL_NAME" = "bash" ]; then
    FILE="$HOME/.bashrc"
elif [ "$SHELL_NAME" = "zsh" ]; then
    FILE="$HOME/.zshrc"
fi

if [ -d "$HOME/db-cnn-test" ]; then
    echo '\n\n #connection db test utility \n alias db-cnn-test="node $HOME/db-cnn-test/index.js"' >> "$FILE"
fi

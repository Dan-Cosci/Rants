#!/bin/bash

tmux new-session -d -s web

tmux rename-window -t web:1 server

tmux new-window -n terminal

tmux attach-session -t web

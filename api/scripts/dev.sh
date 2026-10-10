#!/bin/bash

tmux new-session -d -s rants-docker

tmux rename-window -t rants-docker:1 postgres
tmux send-keys "docker run -it --name rants-db --rm -e POSTGRES_PASSWORD=password -p 5432:5432 postgres:alpine" Enter

tmux new-window -t rants-docker -n psql
tmux send-keys "psql postgresql://postgres:password@localhost:5432" Enter

tmux attach rants-docker

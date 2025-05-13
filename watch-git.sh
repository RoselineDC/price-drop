#!/bin/bash

WATCH_DIR=./
SCRIPT=./git-auto.sh

echo "Watching $WATCH_DIR for file changes..."

while inotifywait -r -e modify,close_write,move,create,delete "$WATCH_DIR"; do
	    bash "$SCRIPT"
    done


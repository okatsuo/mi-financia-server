#!/bash/bin

sh scripts/installPackages.sh

ts-node-dev --respawn src/main/index.ts
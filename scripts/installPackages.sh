#!/bash/bin

npm install

if [ ! -d .husky/_ ]
then
    npx husky install
fi

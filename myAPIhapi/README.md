start project

```
sudo service mongod start
npm start
```

import csv

```
  $ mongoimport -d mydb -c things --type csv --file locations.csv --headerline
```

mongo command

```
  show dbs
  use mydbName
  db.crime.find()
```

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
https://stackoverflow.com/questions/5794834/how-to-access-a-preexisting-collection-with-mongoose
https://mongoosejs.com/docs/guide.html
https://docs.mongodb.com/manual/reference/method/db.collection.find/

### cours config file

```
  npm i config --save
  mkdir config
  touch default.json
```

edit config/default.json

```
{
  "api": {
    "port": 3000,
    "host": "localhost"
  }
}
```

# docker

migration de mongo sur docker

### Requirement necessery !!!

il faut impérativement installer le client docker de windows
https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe
dans les config du docker windows il faut activer une option
clique droit docker > setting > general > expose deamon on tcp://localhost:2375 without tls

```
$ docker -H localhost:2375 images
$ export DOCKER_HOST=localhost:2375
```

### création de l'image mongo

mise en place du bash windows
sudo apt install docker docker.io docker-compose

```
$ mkdir mongo
$ cd mongo
$ curl -sSL https://raw.githubusercontent.com/bitnami/bitnami-docker-mongodb/master/docker-compose.yml > docker-compose.yml
$ docker-compose up -d
$ mongoimport -p 27017:27017 -d mydb -c mycollection --type csv --file locations.csv --headerline
```

https://medium.com/@sebagomez/installing-the-docker-client-on-ubuntus-windows-subsystem-for-linux-612b392a44c4

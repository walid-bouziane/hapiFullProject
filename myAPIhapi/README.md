start project

```
sudo service mongod start
npm start
```

mongo command

show all collection

```
  show dbs
```

import csv

```
  $ mongoimport -d mydb -c things --type csv --file locations.csv --headerline
```

find in collection

```
  db.crime.find()
```

show databases

```
  show dbs
```

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
https://stackoverflow.com/questions/5794834/how-to-access-a-preexisting-collection-with-mongoose
https://mongoosejs.com/docs/guide.html
https://docs.mongodb.com/manual/reference/method/db.collection.find/

### cours etna config file

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

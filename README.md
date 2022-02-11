# Portfolio Website

## Run app

### Set environment variables for all images
Copy from ```.env.dist``` to ``.env.local`` and set your environment variables
````shell
$ cp .env.dist .env
$ cp ./api/.env.dist ./api/.env.local
$ cp ./client/.env.dist ./client/.env.local
````

## Docker

### Basic usage
````shell

$ docker-compose up -d 
$ docker-compose start [container_name]
$ docker-compose stop [container_name]
$ docker-compose down
````
### MongoDB Container
#### Test container
````shell
$ docker exec -it [container_name]
##> mongosh "mongodb://database:27017" --username [username] --authenticationDatabase admin
````
# Portfolio Website

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
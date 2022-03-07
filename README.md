# Portfolio Website

## Run app

### Set environment variables for all images
Copy from ```.env.dist``` to ``.env.local`` and set your environment variables
````shell
$ cp .env.dist .env
$ cp ./api/.env.dist ./api/.env.local
$ cp ./client/.env.dist ./client/.env.local
````

### Generate new certificate for client
````shell
$ openssl req -x509 -nodes -days 365 -newkey rsa:4096 \
> -keyout ./client/ssl/certs/server.key \
> -out ./client/ssl/certs/server.crt
````

### Generate new certificate for api
````shell
$ openssl req -x509 -nodes -days 365 -newkey rsa:4096 \
> -keyout ./api/certificates/server.key \
> -out ./api/certificates/server.crt
````


### Docker
#### Dev stage
##### Basic usage
````shell

$ docker-compose up -d 
$ docker-compose start [container_name]
$ docker-compose stop [container_name]
$ docker-compose down
````

##### Connect to container
````shell
$ docker exec -it [container_name]
##> mongosh "mongodb://database:27017" --username [username] --authenticationDatabase admin
````

#### Build stage

##### 1. Build images 
Build images with this command:

````shell
$ docker-compose -f docker-compose.build.yml build 
````
#####2. Push images to repository
``````shell
$ docker-compose -f docker-compose.build.yml push
``````

#### Production stage
#####1. Upload assets to dist folder
Connect to your server and create a remote directory where to place your configuration files
and upload files necessary to create containers in dist server folder.
These commands above are made from local machine, to copy files or directory from local to a remote server using security key or basic authentication.
``````shell
$ scp [options] ./docker-compose.prod.yml [user@host]:remote_path/docker-compose.prod.yml
$ scp -i local_path/key.ext -rp [options] ./docker/prod [user@host]:remote_path/docker/prod
``````
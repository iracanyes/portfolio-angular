# PORTFOLIO - API


### SSL Certificates
````shell
$ choco install openssl
$ cd [path_project_dir]
$ openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout ./certificates/key.pem -out ./certificates/cert.pem

````
# Multistage building

# To build the laravel image based on either default dockerfile or dockerfile.prod
docker build -t dockermactur/laravel:dev .
docker build -t dockermactur/laravel:prod . -f Dockerfile.prod

# To create a personal network in order to communicate multiple services
docker network create laranet

# To run the laravel image, exposed on port number 8000
docker run --rm -it --name laravel -p 8000:8000 dockermactur/laravel:dev
docker run --rm -d --name laravel --network laranet dockermactur/laravel:prod

# In cases like it needed to change the host address or port
docker run --rm -it --name laravel -p 9000:9000 dockermactur/laravel:dev --host=0.0.0.0 --port=9000

# To access the container
docker exec -it laravel bash
# Get into the ubuntu folder the execute the commands

docker build -t dockermactur/ubuntu:dev .
docker run --rm -it --name ubuntu dockermactur/ubuntu:dev bash
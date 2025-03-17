FROM ubuntu:latest

RUN apt-get update && \
    apt-get install vim -y && \
    apt-get install curl -y && \
    mkdir scripts

COPY ../console.sh /scripts

RUN chmod +x /scripts/console.sh

#ENTRYPOINT [ "/bin/bash" ]

#CMD [ "/scripts/console.sh" ]

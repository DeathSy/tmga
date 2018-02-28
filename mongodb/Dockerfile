FROM mongo:3.4-jessie

ENV AUTH yes
ENV STORAGE_ENGINE wiredTiger
ENV JOURNALING yes

COPY run.sh /run.sh
COPY set_mongodb_password.sh /set_mongodb_password.sh

CMD ["/run.sh" ]

FROM python:3.6.4-alpine

ENV PYTHONUNBUFFERED 1

WORKDIR /app

ADD requirements.txt /app/

RUN pip install -r requirements.txt

ADD . /app/

EXPOSE 8000

CMD [ "python /app/manage.py runserver" ]

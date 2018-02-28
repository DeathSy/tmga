db-image:
	docker image build -t mongo_build -f ./mongodb/Dockerfile ./mongodb

db-start:
	docker container run --rm -v $(shell pwd)/mongodb/data:/data -ditp 27017:27017 mongo_build
REPOSITORY := dscythe
TAG := $$(git log -1 --pretty=%h)

db-image:
	docker image build -t mongo_build -f ./mongodb/Dockerfile ./mongodb

db-start:
	docker container run --rm -v $(shell pwd)/mongodb/data:/data -ditp 27017:27017 mongo_build

build-node:
	docker image build -t node_build -f ./build/Dockerfile.node .
	docker container run --rm -v $(shell pwd)/$(service):/app node_build install --production
	docker container run --rm -v $(shell pwd)/$(service):/app node_build build
	docker image build -t ${REPOSITORY}/tmga-$(service) ./$(service)
	docker tag ${REPOSITORY}/tmga-$(service) ${REPOSITORY}/tmga-$(service):latest
	docker login -u $(username) -p $(password)
	docker push ${REPOSITORY}/tmga-$(service)

build-python:	
	docker image build -t ${REPOSITORY}/tmga-$(service) ./$(service)
	docker tag ${REPOSITORY}/tmga-$(service) ${REPOSITORY}/tmga-$(service):latest
	docker login -u $(username) -p $(password)
	docker push ${REPOSITORY}/tmga-$(service)
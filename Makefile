db-image:
	docker image build -t mongo_build -f ./mongodb/Dockerfile ./mongodb

db-start:
	docker container run --rm -v $(shell pwd)/mongodb/data:/data -ditp 27017:27017 mongo_build

install-node:
	docker image build -t node_build -f ./build/Dockerfile.node .
	docker container run --rm -v $(shell pwd)/$(service):/app node_build install --production

install-python:	
	docker image build -t python_build -f ./build/Dockerfile.python .
	docker container run --rm -v $(shell pwd)/$(service):/app python_build install -r $(shell pwd)/$(service)/requirements.txt
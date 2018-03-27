#!groovy​

def installNode () {
  sh 'node -v'
  sh 'npm install'
}

def installPython () {
  sh 'python --version'
  sh 'pip install -r requirements.txt'
}

def unitTestNode (serviceName) {
  steps {
    dir (serviceName) {
      installNode()
      sh 'npm run test:coverage'
      junit 'coverage/junit.xml'
    }
  }
}

def unitTestPython () {
  installPython()
  sh "coverage run --source='.' manage.py test api"
}

pipeline {
  agent any

  stages {
    stage ('Install') {
      parallel {
        stage ('Install: api') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          steps {
            dir ('api') {
              installNode()
            }
          }
        }

        stage ('Install: client') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          steps {
            dir ('client') {
              installNode()
            }
          }
        }

        stage ('Install: ml') {
          agent {
            docker {
              image 'python:3.6.4-alpine'
              args '-u root'
            }
          }
          steps {
            dir ('ml') {
              installPython()
            }
          }
        }

      }
    }

    stage ('Lint Test') {
      parallel {
        stage ('Test: api') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          steps {
            dir ('api') {
              installNode()
              sh 'npm run test:lint'
            }
          }
        }

        stage ('Test: client') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          steps {
            dir ('client') {
              installNode()
              sh 'npm run test:lint'
            }
          }
        }

        stage ('Test: ml') {
          agent {
            docker {
              image 'python:3.6.4-alpine'
              args '-u root'
            }
          }
          steps {
            dir ('ml') {
              installPython()
              sh 'pylint api/models.py api/serializers.py api/urls.py'
            }
          }
        }
      }
    }

    stage ('Unit Test') {
      parallel {
        stage ('Test: api') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          environment {
            NODE_ENV = 'test'
          }
          unitTestNode('api')
        }

        stage ('Test: client') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          environment {
            NODE_ENV = 'test'
          }
          unitTestNode('client')
        }

        stage ('Test: ml') {
          agent {
            docker {
              image 'python:3.6.4-alpine'
              args '-u root'
            }
          }
          steps {
            dir ('ml') {
              unitTestPython()
            }
          }
        }
      }
    }

  }
}
#!groovy​

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
              sh 'node -v'
              sh 'npm install'
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
              sh 'node -v'
              sh 'npm install'
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
              sh 'python --version'
              sh 'pip install -r requirements.txt'
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
              sh 'npm install'
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
              sh 'npm install'
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
              sh 'pip install -r requirements.txt'
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
          steps {
            dir ('api') {
              sh 'npm install'
              sh 'npm run test:coverage'
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
          environment {
            NODE_ENV = 'test'
          }
          steps {
            dir ('client') {
              sh 'npm install'
              sh 'npm run test:coverage'
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
              sh 'pip install -r requirements.txt'
              sh 'coverage run --source='.' manage.py test api'
            }
          }
        }
      }
    }

  }
}
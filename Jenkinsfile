#!groovy​

pipeline {
  agent none

  stages {
    stage ('Install_App') {
      parallel {
        stage ('Install: client-service') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          steps {
            sh 'node -v'
            sh 'cd client && npm install'
            stash includes: 'client/node_modules/', name: 'client_node_modules'
          }
        }

        stage ('Install: api-service') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          steps {
            sh 'node -v'
            sh 'cd api && npm install'
            stash includes: 'api/node_modules/', name: 'api_node_modules'
          }
        }

        stage ('Install: ml-service') {
          agent {
            docker {
              image 'python:3.6.4-alpine'
              args '-u root'
            }
          }
          steps {
            sh 'python --version'
            sh 'cd ml && pip install -r ./requirements.txt'
          }
        }
      }
    }

    stage ('Unit_Test') {
      parallel {
        stage ('Test: client-service') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          steps {
            sh 'chmod -R u+w .git'
            unstash 'client_node_modules'
            sh 'cd client && npm run test:coverage'
          }
        }

        stage ('Test: api-service') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
              args '-u root'
            }
          }
          steps {
            sh 'chmod -R u+w .git'
            unstash 'api_node_modules'
            sh 'cd api && cp .env.example .env'
            sh 'cd api && npm run test:coverage'
          }
        }

        stage ('Test: ml-service') {
          agent {
            docker {
              image 'python:3.6.1-alpine'
              args '-u root'
            }
          }
          steps {
            sh 'cd ml && pip install -r ./requirements.txt'
            sh 'cd ml && python manage.py test'
          }
        }

      }
    }
  }

}
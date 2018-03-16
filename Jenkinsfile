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
  }

}
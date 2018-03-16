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
            sh 'cd client'
            sh 'npm install'
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
            sh 'cd api'
            sh 'npm install'
          }
        }

        stage ('Install: ml-service') {
          agent {
            docker { image 'python:3.6.4-alpine'}
          }
          steps {
            sh 'python --version'
            sh 'cd ml'
            sh 'pip install -r ./requirements.txt'
          }
        }
      }
    }
  }

}
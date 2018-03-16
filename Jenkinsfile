pipeline {
  agent none

  stages {
    stage ('Install_App') {
      parallel {
        stage ('Install: client-service') {
          agent {
            docker 'node:8.10.0-alpine'
          }
          steps {
            sh 'node -v'
          }
        }

        stage ('Install: api-service') {
          agent {
            docker 'node:8.10.0-alpine'
          }
          steps {
            sh 'node -v'
          }
        }

        stage ('Install: ml-service') {
          agent {
            docker 'python:3.6.4-alpine'
          }
          steps {
            sh 'python --version'
          }
        }
      }
    }
  }

}
pipeline {
  agent none
  stage ('Checkout') {
    checkout scm
  }

  stage ('Install_App') {
    steps {
      parallel {
        stage ('Install: client-service') {
          agent {
            docker 'node:8.10.0-alpine'
          }
          stages {
            sh 'node --version'
          }
        }

        stage ('Install: api-service') {
          agent {
            docker 'node:8.10.0-alpine'
          }
        }

        stage ('Install: ml-service') {
          agent {
            docker 'node:8.10.0-alpine'
          }
        }
      }
    }
  }

  stage ('Unit_Test') {
    steps {
      parrallel {
        stage ('Test: client-service') {

        }

        stage ('Test: api-service') {

        }

        stage ('Test: ml-service') {

        }
      }
    }
  }
}
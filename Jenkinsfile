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
              stash includes: 'node_modules/', name: 'api'
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
              stash includes: 'node_modules/', name: 'client'
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

    stage ('Unit Test') {
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
              sh 'node -v'
              unstash 'api'
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
              sh 'node -v'
              unstash 'client'
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
              sh 'python --version'
            }
          }
        }
      }
    }

  }
}
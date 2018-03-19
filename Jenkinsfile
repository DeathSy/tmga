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
              stash '/usr/local/lib/3.6/dist/packages'
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
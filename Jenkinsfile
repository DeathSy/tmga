#!groovy​

pipeline {
  agent any

  stages {
    stage ('Install') {
      parallel {
        stage ('Install: client') {
          agent {
            docker {
              image 'node:8.10.0-alpine'
            }
          }
          steps {
            dir ('client') {
              sh 'node -v'
              sh 'npm install'
            }
          }
        }

      }
    }
  }
}
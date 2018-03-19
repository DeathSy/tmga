#!groovy​

pipeline {
  agent any

  stages {
    stage ('Install') {
      agent {
        docker {
          image 'node:8.10.0-alpine'
        }
      }
      steps {
        dir ('client') {
          sh 'pwd'
          sh 'node -v'
        }
      }
    }
  }
}
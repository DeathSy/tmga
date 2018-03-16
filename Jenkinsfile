pipeline {
  agent none

  stages {
    stage ('Install_App') {
      parallel {
        stage ('Install: client-service') {
          agent none
          steps {
            echo 'test client'
          }
        }

        stage ('Install: api-service') {
          agent none
          steps {
            echo 'test api'
          }
        }

        stage ('Install: ml-service') {
          agent none
          steps {
            echo 'test ml'
          }
        }
      }
    }
  }

}
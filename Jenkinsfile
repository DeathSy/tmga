pipeline {
  agent none
  stages {
    stage ('Test') {
      parallel {
        stage ('A') {
          agent none
          steps {
            echo 'test a'
          }
        }

        stage ('B') {
          agent none
          steps {
            echo 'test b'
          }
        }
      }
    }
  }
}
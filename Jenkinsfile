pipeline {
  agent none
  stages {
    stage ('Test') {
      parallel {
        stage ('A') {
          agent none
          steps {
            sh 'echo "Test"'
          }
        }

        stage ('B') {
          agent none
          steps {
            sh 'echo "Test"'
          }
        }
      }
    }
  }
}
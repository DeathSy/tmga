pipeline {
  agent none
  stages {
    stage ('Test') {
      parallel {
        stage ('A') {
          agent none
          steps {
            sh 'echo a'
          }
        }

        stage ('B') {
          agent none
          steps {
            sh 'echo b'
          }
        }
      }
    }
  }
}
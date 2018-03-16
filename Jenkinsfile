pipeline {
  agent none
  stages {
    stage ('Test') {
      parallel {
        stage ('A') {
          agent none
          step {
            sh 'echo a'
          }
        }

        stage ('B') {
          agent none
          step {
            sh 'echo b'
          }
        }
      }
    }
  }
}
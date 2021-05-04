pipeline {
    agent any
    stages {
        stage("build"){
            steps {
                echo "Building the application"
                nodejs('NodeJS-16') {
                    sh 'npm --version'
                }
            }
        }
        stage("run"){
            steps {
                echo "Running required tools"
            }
        }
        stage("test"){
            steps {
                echo "Starting tests"
            }
        }
        stage("deploy"){
            steps {
                echo "Deploying the application"
            }
        }
        stage("clean-up"){
            steps {
                echo "Cleaning up artifacts"
                echo "Finished"
            }
        }
    }
}
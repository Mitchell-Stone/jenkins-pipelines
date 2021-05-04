pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage("build"){
            steps {
                echo "Building the application"
                sh 'npm --version-'
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
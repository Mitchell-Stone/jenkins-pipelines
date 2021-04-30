pipeline {
    agent any 
    stages {
        stage("build"){
            steps {
                echo "Building the application"
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
            }
        }
    }
}
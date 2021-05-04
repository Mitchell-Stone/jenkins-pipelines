pipeline {
    agent { label "linux" }
    stages {
        stage("build"){
            steps {
                echo "Building the application"
                sh """docker build -t node_image"""
            }
        }
        stage("run"){
            steps {
                echo """docker run --rm node_image"""
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
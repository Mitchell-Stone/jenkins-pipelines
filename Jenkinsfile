pipeline {
    agent any 
    stages {
        stage("chcekout"){
            steps {
                echo "Checking out repository"
            }
        }
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

git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
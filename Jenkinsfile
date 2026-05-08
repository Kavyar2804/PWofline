pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

          stage('Run Tests') {
            steps {

                script {

                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {

                        bat 'npx playwright test'

                    }

                    echo "Continuing pipeline even if tests fail..."

                }
            }
        }

        stage('Trigger Another Job') {
            steps {

                build job: 'Playwright1234'

            }
        }
    }

    post {

        always {

            echo 'Generating HTML reports...'

            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                allowMissing: true,
                linkRelative: false
            ])
        }
    }
}
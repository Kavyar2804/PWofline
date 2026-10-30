def envConfig = [
    qa     : [url: 'https://www.saucedemo.com/', credId: 'QA-cred'],
    uat    : [url: 'https://uat.example.com',    credId: 'UAT-cred'],
    staging: [url: 'https://staging.example.com', credId: 'STAGING-cred']
]

pipeline {
    agent any

    parameters {
        choice(
            name: 'TARGET_ENV',
            choices: ['qa', 'uat', 'staging'],
            description: 'Select the environment to test'
        )
    }

    environment {
        BASE_URL = "${envConfig[params.TARGET_ENV].url}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: envConfig[params.TARGET_ENV].credId,
                    usernameVariable: 'APP_USER',
                    passwordVariable: 'APP_PASS'
                )]) {
                    script {
                        def status = bat(script: 'npx playwright test handlemultiplenv', returnStatus: true)
                        if (status != 0) {
                            echo 'Tests failed, but continuing to generate reports...'
                            currentBuild.result = 'UNSTABLE'
                        }
                    }
                }
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
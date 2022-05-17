const report = require("multiple-cucumber-html-reporter");
const cucumberJsonDir = './reports/cucumber-json';
const fs = require('fs-extra');
const chalk = require('chalk');
generateReport();

function generateReport() {
    var warning_message = "WARNING: Folder (" + cucumberJsonDir + ") not found. REPORT CANNOT BE CREATED!";
    if (!fs.existsSync(cucumberJsonDir)) {
        console.warn(chalk.yellow(warning_message));
    } else {
        report.generate({
            jsonDir: cucumberJsonDir,
            reportPath: "./reports/cucumber-html-report",
            pageTitle: "SecurePay",
            reportName: "SECUER PAY automated tests report.",
            pageFooter: "&nbsp;&nbsp;&nbsp;Created by <strong>Ivan Kochnev.</strong>",
            displayDuration: true,
            displayReportTime: true,
            metadata: {
                browser: {
                    name: "chrome",
                    version: "81",
                },
                device: "Local test machine",
                platform: {
                    name: "osx",
                    version: "10.15.7",
                },
            },
        });
    }
}

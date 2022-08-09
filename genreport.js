var reporter = require('cucumber-html-reporter');


//Genero la fecha que va en el nombre del archivo del reporte
var hoy=new Date().toLocaleString();
hoy=hoy.replaceAll(' ','_hr_');
hoy=hoy.replaceAll('/','-');
hoy=hoy.replaceAll(':','_');

var options = {
        theme: 'bootstrap',
        jsonFile: './test/reports/cucumber_report.json',
        output: './test/reports/reporte_'+ hoy +'.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "STAGING",
            "Browser": "Chrome",
            "Platform": "Windows 11",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);
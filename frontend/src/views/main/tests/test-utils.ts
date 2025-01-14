import {TestResult} from "@/generated-sources";

function testStatusToColor(status: TestResult) {
    switch (status) {
        case TestResult.PASSED:
            return 'green lighten-2';
        case TestResult.FAILED:
            return 'red lighten-2';
        case TestResult.ERROR:
            return 'red lighten-3';
        default:
            return '';
    }
}

function testStatusToIcon(status: TestResult){
    switch (status) {
        case TestResult.PASSED:
            return 'fa-check';
        case TestResult.FAILED:
            return 'fa-xmark';
        case TestResult.ERROR:
            return 'fa-exclamation-triangle';
        default:
            return '';
    }
}

export {
    testStatusToColor, testStatusToIcon
}

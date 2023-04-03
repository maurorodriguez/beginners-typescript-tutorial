export const cleanVitestOutput = (result: string) => {
  const asJson: {
    startTime?: number;
    endTime?: number;
    duration?: number;
    numFailedTestSuites?: number;
    numFailedTests?: number;
    numPassedTestSuites?: number;
    numPassedTests?: number;
    numPendingTestSuites?: number;
    numPendingTests?: number;
    numTodoTests?: number;
    numTotalTestSuites?: number;
    numTotalTests?: number;
    testResults: {
      startTime?: number;
      endTime?: number;
      duration?: number;
      assertionResults: {
        duration?: number;
      }[];
    }[];
  } = JSON.parse(result.slice(1, -1));

  delete asJson.startTime;
  delete asJson.endTime;
  delete asJson.duration;
  delete asJson.numFailedTestSuites;
  delete asJson.numFailedTests;
  delete asJson.numPassedTestSuites;
  delete asJson.numPassedTests;
  delete asJson.numPendingTestSuites;
  delete asJson.numPendingTests;
  delete asJson.numTodoTests;
  delete asJson.numTotalTestSuites;
  delete asJson.numTotalTests;

  asJson.testResults.forEach((testResult) => {
    delete testResult.startTime;
    delete testResult.endTime;
    delete testResult.duration;
    testResult.assertionResults.forEach((assertionResult) => {
      delete assertionResult.duration;
    });
  });

  return asJson;
};
#!/usr/bin/env node
const rimraf = require('rimraf')

const testResultsDir = './reports'

rimraf(testResultsDir, () => {
  console.log('Deleted former test results.')
})
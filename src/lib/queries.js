const { query } = require('./db');

/**
 * Fetch time-series data points within a date range.
 * @param {string} startDate - ISO date string
 * @param {string} endDate - ISO date string
 * @returns {Promise<Array<{date: string, value: number}>>}
 */
async function getTimeSeries(startDate, endDate) {
  // TODO: implement time-series query against the events table
  throw new Error('TODO: implement');
}

/**
 * Fetch funnel stage counts for a given funnel definition.
 * @param {string} funnelId - Funnel identifier
 * @returns {Promise<Array<{stage: string, count: number}>>}
 */
async function getFunnelData(funnelId) {
  // TODO: implement funnel aggregation query
  throw new Error('TODO: implement');
}

/**
 * Fetch retention cohort data as a 2D array.
 * Rows = cohort periods, columns = retention periods.
 * @param {number} numCohorts - Number of cohort periods to include
 * @returns {Promise<Array<Array<number>>>}
 */
async function getRetentionCohorts(numCohorts) {
  // TODO: implement cohort retention query
  throw new Error('TODO: implement');
}

module.exports = { getTimeSeries, getFunnelData, getRetentionCohorts };

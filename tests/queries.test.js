const { getTimeSeries, getFunnelData, getRetentionCohorts } = require('../src/lib/queries');

describe('Analytics Queries', () => {
  test('getTimeSeries returns an array of {date, value} objects', async () => {
    const result = await getTimeSeries('2026-01-01', '2026-01-31');

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('date');
    expect(result[0]).toHaveProperty('value');
    expect(typeof result[0].date).toBe('string');
    expect(typeof result[0].value).toBe('number');
  });

  test('getFunnelData returns an array of {stage, count} objects', async () => {
    const result = await getFunnelData('signup-funnel');

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('stage');
    expect(result[0]).toHaveProperty('count');
    expect(typeof result[0].stage).toBe('string');
    expect(typeof result[0].count).toBe('number');
  });

  test('getRetentionCohorts returns a 2D array of numbers', async () => {
    const result = await getRetentionCohorts(4);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(Array.isArray(result[0])).toBe(true);
    expect(typeof result[0][0]).toBe('number');
  });
});

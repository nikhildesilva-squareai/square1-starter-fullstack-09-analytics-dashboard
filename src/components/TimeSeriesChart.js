'use client';

import { useRef, useEffect } from 'react';
// TODO: import * as d3 from 'd3';

/**
 * D3.js time-series line chart component.
 * @param {{ data: Array<{date: string, value: number}> }} props
 */
export default function TimeSeriesChart({ data }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    // TODO: implement D3.js line chart
    // 1. Set up scales (x: time, y: linear)
    // 2. Draw axes
    // 3. Draw line path
    // 4. Add tooltips on hover
  }, [data]);

  return <svg ref={svgRef} width={800} height={400} />;
}

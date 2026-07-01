'use client';

import { useRef, useEffect } from 'react';
// TODO: import * as d3 from 'd3';

/**
 * D3.js funnel chart component.
 * @param {{ data: Array<{stage: string, count: number}> }} props
 */
export default function FunnelChart({ data }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    // TODO: implement D3.js funnel visualisation
    // 1. Calculate widths proportional to counts
    // 2. Draw trapezoid shapes for each stage
    // 3. Add labels with stage names and counts
  }, [data]);

  return <svg ref={svgRef} width={600} height={400} />;
}

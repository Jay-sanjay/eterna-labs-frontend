import './MiniChart.css'

export default function MiniChart({ data, isPositive }) {
  const width = 100
  const height = 40
  const padding = 2

  // Calculate min and max values
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  // Create SVG path for the sparkline
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * (width - 2 * padding)
    const y = height - ((value - min) / range) * (height - 2 * padding)
    return `${x + padding},${y + padding}`
  })

  const pathData = `M ${points.join(' L ')}`
  const color = isPositive ? '#27ae60' : '#e74c3c'

  return (
    <div className="mini-chart">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="sparkline"
      >
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`${pathData} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`}
          fill={color}
          opacity="0.1"
        />
      </svg>
    </div>
  )
}

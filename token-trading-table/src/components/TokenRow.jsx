import MiniChart from './MiniChart'
import './TokenRow.css'

export default function TokenRow({ token, rank }) {
  const formatPrice = (price) => {
    if (price >= 1) {
      return `$${price.toFixed(2)}`
    }
    return `$${price.toFixed(6)}`
  }

  const formatNumber = (num) => {
    if (num >= 1e12) {
      return `$${(num / 1e12).toFixed(2)}T`
    }
    if (num >= 1e9) {
      return `$${(num / 1e9).toFixed(2)}B`
    }
    if (num >= 1e6) {
      return `$${(num / 1e6).toFixed(2)}M`
    }
    if (num >= 1e3) {
      return `$${(num / 1e3).toFixed(2)}K`
    }
    return `$${num.toFixed(2)}`
  }

  const formatSupply = (supply) => {
    if (supply >= 1e9) {
      return `${(supply / 1e9).toFixed(2)}B`
    }
    if (supply >= 1e6) {
      return `${(supply / 1e6).toFixed(2)}M`
    }
    if (supply >= 1e3) {
      return `${(supply / 1e3).toFixed(2)}K`
    }
    return supply.toFixed(0)
  }

  const isPositive = token.change24h >= 0

  return (
    <tr className="token-row">
      <td className="rank-col">
        <span className="rank-badge">{rank}</span>
      </td>
      <td className="name-col">
        <div className="token-info">
          <div className="token-symbol">{token.symbol}</div>
          <div className="token-name">{token.name}</div>
        </div>
      </td>
      <td className="price-col">
        <span className="price">{formatPrice(token.price)}</span>
      </td>
      <td className="change-col">
        <span className={`change ${isPositive ? 'positive' : 'negative'}`}>
          <span className="change-icon">{isPositive ? '▲' : '▼'}</span>
          {Math.abs(token.change24h).toFixed(2)}%
        </span>
      </td>
      <td className="volume-col">
        <span className="volume">{formatNumber(token.volume24h)}</span>
      </td>
      <td className="marketcap-col">
        <span className="marketcap">{formatNumber(token.marketCap)}</span>
      </td>
      <td className="supply-col">
        <span className="supply">{formatSupply(token.supply)}</span>
      </td>
      <td className="chart-col">
        <MiniChart data={token.chart} isPositive={isPositive} />
      </td>
    </tr>
  )
}

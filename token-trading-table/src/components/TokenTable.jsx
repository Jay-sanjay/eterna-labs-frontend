import TokenRow from './TokenRow'
import './TokenTable.css'

export default function TokenTable({ tokens, sortConfig, onSort }) {
  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <span className="sort-icon">⇅</span>
    }
    return sortConfig.direction === 'asc' ? 
      <span className="sort-icon active">↑</span> : 
      <span className="sort-icon active">↓</span>
  }

  return (
    <div className="table-container">
      <table className="token-table">
        <thead>
          <tr>
            <th className="rank-col">#</th>
            <th className="name-col">Token</th>
            <th 
              className="price-col sortable"
              onClick={() => onSort('price')}
            >
              Price
              <SortIcon columnKey="price" />
            </th>
            <th 
              className="change-col sortable"
              onClick={() => onSort('change24h')}
            >
              24h Change
              <SortIcon columnKey="change24h" />
            </th>
            <th 
              className="volume-col sortable"
              onClick={() => onSort('volume24h')}
            >
              24h Volume
              <SortIcon columnKey="volume24h" />
            </th>
            <th 
              className="marketcap-col sortable"
              onClick={() => onSort('marketCap')}
            >
              Market Cap
              <SortIcon columnKey="marketCap" />
            </th>
            <th 
              className="supply-col sortable"
              onClick={() => onSort('supply')}
            >
              Supply
              <SortIcon columnKey="supply" />
            </th>
            <th className="chart-col">Chart</th>
          </tr>
        </thead>
        <tbody>
          {tokens.length === 0 ? (
            <tr className="no-results">
              <td colSpan="8">No tokens found</td>
            </tr>
          ) : (
            tokens.map((token, index) => (
              <TokenRow key={token.id} token={token} rank={index + 1} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

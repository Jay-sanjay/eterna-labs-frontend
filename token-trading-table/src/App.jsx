import { useState, useMemo } from 'react'
import TokenTable from './components/TokenTable'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortConfig, setSortConfig] = useState({ key: 'marketCap', direction: 'desc' })

  // Mock data for tokens
  const mockTokens = [
    {
      id: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 42500.50,
      change24h: 2.5,
      volume24h: 28500000000,
      marketCap: 850000000000,
      supply: 21000000,
      chart: [100, 105, 102, 108, 112, 110, 115]
    },
    {
      id: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2250.75,
      change24h: 1.8,
      volume24h: 18200000000,
      marketCap: 270000000000,
      supply: 120000000,
      chart: [100, 103, 101, 106, 109, 108, 112]
    },
    {
      id: 3,
      symbol: 'BNB',
      name: 'Binance Coin',
      price: 612.30,
      change24h: 0.95,
      volume24h: 1200000000,
      marketCap: 95000000000,
      supply: 155000000,
      chart: [100, 102, 100, 104, 107, 105, 110]
    },
    {
      id: 4,
      symbol: 'XRP',
      name: 'Ripple',
      price: 2.85,
      change24h: 3.2,
      volume24h: 3500000000,
      marketCap: 155000000000,
      supply: 99000000000,
      chart: [100, 101, 99, 105, 110, 108, 115]
    },
    {
      id: 5,
      symbol: 'ADA',
      name: 'Cardano',
      price: 1.05,
      change24h: -0.5,
      volume24h: 950000000,
      marketCap: 38000000000,
      supply: 36000000000,
      chart: [100, 99, 101, 103, 105, 104, 102]
    },
    {
      id: 6,
      symbol: 'SOL',
      name: 'Solana',
      price: 198.45,
      change24h: 5.2,
      volume24h: 2800000000,
      marketCap: 65000000000,
      supply: 328000000,
      chart: [100, 104, 102, 108, 114, 112, 118]
    },
    {
      id: 7,
      symbol: 'DOGE',
      name: 'Dogecoin',
      price: 0.42,
      change24h: 2.1,
      volume24h: 1500000000,
      marketCap: 62000000000,
      supply: 147000000000,
      chart: [100, 101, 103, 105, 108, 107, 112]
    },
    {
      id: 8,
      symbol: 'USDT',
      name: 'Tether',
      price: 1.00,
      change24h: 0.1,
      volume24h: 85000000000,
      marketCap: 120000000000,
      supply: 120000000000,
      chart: [100, 100, 100, 100, 100, 100, 100]
    }
  ]

  // Filter tokens based on search query
  const filteredTokens = useMemo(() => {
    return mockTokens.filter(token =>
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  // Sort tokens
  const sortedTokens = useMemo(() => {
    const sorted = [...filteredTokens]
    sorted.sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
    return sorted
  }, [filteredTokens, sortConfig])

  const handleSort = (key) => {
    let direction = 'desc'
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc'
    }
    setSortConfig({ key, direction })
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Token Trading Table</h1>
        <p>Real-time cryptocurrency trading data</p>
      </header>

      <main className="app-main">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TokenTable
          tokens={sortedTokens}
          sortConfig={sortConfig}
          onSort={handleSort}
        />
      </main>

      <footer className="app-footer">
        <p>© 2025 Token Trading Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

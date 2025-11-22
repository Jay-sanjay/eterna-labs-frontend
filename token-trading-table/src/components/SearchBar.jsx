import './SearchBar.css'

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-bar-container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search by token symbol or name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      {searchQuery && (
        <button
          className="clear-button"
          onClick={() => setSearchQuery('')}
        >
          Clear
        </button>
      )}
    </div>
  )
}

import React from 'react'
import './Filters.css'

const Filters = ({ filters, onFilterChange, onClearFilters }) => {
  const categories = [
    { value: '', label: 'Toutes' },
    { value: 'femme', label: 'Femme' },
    { value: 'homme', label: 'Homme' },
    { value: 'unisexe', label: 'Unisexe' }
  ]

  const types = [
    { value: '', label: 'Tous' },
    { value: 'ete', label: 'Été' },
    { value: 'hiver', label: 'Hiver' },
    { value: 'classique', label: 'Classique' }
  ]

  const priceRanges = [
    { value: '', label: 'Tous les prix' },
    { value: '0-50', label: 'Moins de 50€' },
    { value: '50-100', label: '50€ - 100€' },
    { value: '100-150', label: '100€ - 150€' },
    { value: '150+', label: 'Plus de 150€' }
  ]

  const handleFilterChange = (filterType, value) => {
    onFilterChange({
      ...filters,
      [filterType]: value
    })
  }

  return (
    <div className="filters">
      <div className="filters-header">
        <h3>Filtres</h3>
        <button
          className="clear-filters-btn"
          onClick={onClearFilters}
        >
          Effacer
        </button>
      </div>

      <div className="filter-group">
        <label htmlFor="category">Catégorie</label>
        <select
          id="category"
          value={filters.category || ''}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="type">Type</label>
        <select
          id="type"
          value={filters.type || ''}
          onChange={(e) => handleFilterChange('type', e.target.value)}
        >
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="priceRange">Prix</label>
        <select
          id="priceRange"
          value={filters.priceRange || ''}
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) => handleFilterChange('inStock', e.target.checked)}
          />
          En stock uniquement
        </label>
      </div>

      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={filters.featured || false}
            onChange={(e) => handleFilterChange('featured', e.target.checked)}
          />
          Coups de cœur
        </label>
      </div>
    </div>
  )
}

export default Filters
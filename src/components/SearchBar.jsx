import React from 'react'

const SearchBar = () => {
    return (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      );
}

export default SearchBar
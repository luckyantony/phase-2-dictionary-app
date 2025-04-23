# React Dictionary App
A responsive and modern dictionary web application built with React. This app allows users to look up definitions, pronunciations, and usage examples of English words using the free and open [Dictionary API](https://dictionaryapi.dev/). 

  ##Tech Stack

- Frontend: React (with Hooks)
- HTTP Requests: Fetch API 
- Styling: CSS 
- API: [Free Dictionary API](https://dictionaryapi.dev/)

# API Information
This app uses the Free Dictionary API, which provides:

 .Definitions

 .Phonetics

 .Part of speech

 .Audio pronunciation

 .Example usage

 # Features
 - Search for word definitions
 - Accepts any English word as input
- Uses `useEffect` for automatic data fetching on input change
- Returns structured data:
  - `data` 
  - `loading` 
  - `error` 
- Error handling for:- 
   - Empty input
  - Word not found
  - Network errors

  # How It Works
- The user types a word into the search bar.

- handleSearch updates the searchResult state.

- The useDictionary custom hook fetches data from a dictionary API based on searchResult.

- ResultDisplay component shows the word definition or relevant loading/error messages..


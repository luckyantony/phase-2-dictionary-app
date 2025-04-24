import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ data, loading, error }) => {
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!data) return <p className="empty">Search for a word to see its definition.</p>;

  return (
    <div className="result-container">
      <h2 className="word">{data.word}</h2>

      {data.phonetics?.length > 0 && (
        <div className="phonetics">
          <strong>Phonetics:</strong>
          <ul>
            {data.phonetics.map((phonetic, index) => (
              <li key={index}>
                {phonetic.text} {phonetic.audio && (
                  <audio controls src={phonetic.audio}>
                    Your browser does not support the audio element.
                  </audio>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="meanings">
        {data.meanings?.map((meaning, idx) => (
          <div className="card" key={idx}>
            <h3>{meaning.partOfSpeech}</h3>
            <ul>
              {meaning.definitions.map((def, i) => (
                <li key={i}>
                  {def.definition}
                  {def.example && <div className="example">Example: "{def.example}"</div>}
                </li>
              ))}
            </ul>
          </div>
        )) || <p>No meanings found.</p>}
      </div>
    </div>
  );
};

export default ResultDisplay;

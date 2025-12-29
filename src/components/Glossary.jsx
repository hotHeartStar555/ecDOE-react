import { useState } from 'react'

const Glossary = () => {
  const [wordsData] = useState([
    {
      category: 'Short Vowels',
      words: [
        { word: 'cat', ipa: '/æ/' },
        { word: 'bed', ipa: '/e/' },
        { word: 'kit', ipa: '/ɪ/' },
        { word: 'hot', ipa: '/ɒ/' },
        { word: 'cup', ipa: '/ʌ/' }
      ]
    },
    {
      category: 'Long Vowels',
      words: [
        { word: 'car', ipa: '/ɑː/' },
        { word: 'sheep', ipa: '/iː/' },
        { word: 'bird', ipa: '/ɜː/' },
        { word: 'food', ipa: '/uː/' },
        { word: 'blue', ipa: '/uː/' }
      ]
    }
  ]);

  const playWord = async (word) => {
    try {
      const response = await fetch('https://dedicated-vps.bbits.co.in:9443/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word })
      });
      
      if (!response.ok) throw new Error('Failed to fetch audio');
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      
      audio.onended = () => URL.revokeObjectURL(url);
      audio.onerror = () => URL.revokeObjectURL(url);
      
      await audio.play();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const SpeakerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1-3.29-2.5-4.03v8.05c1.5-.74 2.5-2.26 2.5-4.02zM14 3.23v2.06c3.39.49 6 3.39 6 6.71s-2.61 6.22-6 6.71v2.06c4.5-.52 8-4.31 8-8.77s-3.5-8.25-8-8.77z"/>
    </svg>
  );

  return (
    <div className="priceing-package-area section-pt section-pb-70" id="glossary">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="section-title">
              <h2>Explore <span>- Glossaries</span></h2>
              <p>Click the speaker to hear the word</p>
              
              <div id="words-list">
                {wordsData.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <h4>{group.category}</h4>
                    {group.words.map((item, wordIndex) => (
                      <div key={wordIndex} className="word-row">
                        <span className="word">{item.word} </span>
                        <span className="ipa">{item.ipa}</span>
                        <button 
                          className="speaker"
                          onClick={() => playWord(item.word)}
                          aria-label={`Pronounce ${item.word}`}
                        >
                          <SpeakerIcon />
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glossary;
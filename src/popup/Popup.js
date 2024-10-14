import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Popup = () => {
  const [tabs, setTabs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedSessions, setSavedSessions] = useState([]);

  useEffect(() => {
    chrome.tabs.query({}, (tabs) => {
      setTabs(tabs.map(tab => ({ id: tab.id, title: tab.title, url: tab.url })));
    });
    chrome.storage.sync.get('savedSessions', (data) => {
      setSavedSessions(data.savedSessions || []);
    });
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const closeTab = (id) => {
    chrome.tabs.remove(id);
    setTabs(tabs.filter(tab => tab.id !== id));
  };

  const saveCurrentSession = () => {
    const sessionName = prompt('Enter session name:');
    const sessionData = tabs.map(tab => ({ title: tab.title, url: tab.url }));
    chrome.storage.sync.set({
      savedSessions: [...savedSessions, { name: sessionName, tabs: sessionData }]
    });
  };

  const restoreSession = (session) => {
    session.tabs.forEach(tab => chrome.tabs.create({ url: tab.url }));
  };

  return (
    <div className="popup-container">
      <h2>Tab Manager</h2>
      <input type="text" placeholder="Search tabs..." value={searchQuery} onChange={handleSearch} />
      <button onClick={saveCurrentSession}>Save Session</button>
      <div className="tab-list">
        {tabs.filter(tab => tab.title.toLowerCase().includes(searchQuery.toLowerCase())).map(tab => (
          <div key={tab.id} className="tab-item">
            <span>{tab.title}</span>
            <button onClick={() => closeTab(tab.id)}>Close</button>
          </div>
        ))}
      </div>
      <h3>Saved Sessions</h3>
      <div className="session-list">
        {savedSessions.map((session, idx) => (
          <div key={idx} className="session-item">
            <span>{session.name}</span>
            <button onClick={() => restoreSession(session)}>Restore</button>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('root'));

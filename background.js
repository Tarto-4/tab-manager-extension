const saveTabsPeriodically = () => {
    chrome.alarms.create('autoSave', { periodInMinutes: 5 });
  };
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'autoSave') {
      chrome.tabs.query({}, (tabs) => {
        const tabData = tabs.map(tab => ({ title: tab.title, url: tab.url }));
        chrome.storage.sync.set({ autoSavedSession: tabData });
      });
    }
  });
  
  chrome.runtime.onInstalled.addListener(() => {
    saveTabsPeriodically();
  });
  
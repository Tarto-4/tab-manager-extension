# Tab Manager Chrome Extension

A Chrome extension designed to help you manage and organize your open tabs effortlessly. This extension allows you to view, search, save, and close tabs, as well as save and restore sessions.

## Features

- **Tab Listing**: View a list of all currently open tabs with their titles.
- **Search Functionality**: Quickly find tabs by title using the search bar.
- **Save Session**: Save all open tabs as a session to access later.
- **Restore Session**: Reopen a previously saved session with a single click.
- **Close Tabs**: Close individual tabs directly from the popup.
- **Auto-Save**: Periodically saves all open tabs in the background, enabling session recovery.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tarto-4/tab-manager-extension.git
   cd tab-manager-extension

    Install dependencies (if using Webpack and Babel):

    bash

npm install

Build the project (optional):

bash

    npm run build

    Load the extension into Chrome:
        Open Chrome and go to chrome://extensions.
        Enable "Developer mode" by toggling the switch in the top-right corner.
        Click on "Load unpacked" and select the tab-manager-extension folder.

Usage

    Click the extension icon in the Chrome toolbar to open the popup.
    Use the search bar to filter tabs by title.
    Click "Save Session" to save all current tabs as a session.
    Restore a saved session by clicking on the session's "Restore" button.
    Close individual tabs by clicking the "Close" button next to each tab.

Project Structure

plaintext

tab-manager-extension/
├── src/                 # Source files for the extension
│   ├── popup/           # Files for the popup UI
│   │   ├── Popup.js     # React component for popup functionality
│   │   ├── Popup.html   # HTML for the popup window
│   │   └── Popup.css    # CSS styling for the popup
│   └── background.js    # Background script for auto-saving tabs
├── icons/               # Icons for the extension
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json        # Extension manifest file
├── package.json         # Package file for npm dependencies
├── webpack.config.js    # Webpack configuration file (if using Webpack)
└── README.md            # Documentation for the project

Development

To make changes to the extension:

    Edit the relevant files in the src directory.
    Run npm run build to compile the changes.
    Reload the extension on chrome://extensions to see updates.

Future Enhancements

    Tab Grouping: Group tabs by domain or type.
    Sorting: Allow sorting tabs by title or URL.
    Batch Actions: Add options to close or save multiple tabs at once.
    Enhanced Data Security: Additional privacy controls for stored sessions.

Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
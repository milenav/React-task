import { createContext } from 'react';

const appContextDefault = {
    state: {
        tabs: [],
        activeTabIndex: 0
    },
    setState: () => {}
}

const AppContext = createContext(appContextDefault);

export default AppContext;
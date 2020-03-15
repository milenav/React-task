import React, { Fragment, useContext } from 'react';

import AppContext from '../app/AppContext';
import Form from './Form';
import App from '../app/App';

function View() {
    const appContext = useContext(AppContext);
    const { tabs, activeTabIndex } = appContext.state;

    return (
<section>
    {
        tabs && tabs.length > 0 ? (
            <Fragment>
                <h2>Tab: { activeTabIndex + 1}</h2>
                <Form />
            </Fragment>
        ) : (
            <h2>Use the buttons below to open a new tab</h2>
        )
    }
</section>
    );
}

export default View;
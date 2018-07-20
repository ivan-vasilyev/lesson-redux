import React from 'react';

import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';
import HeaderContainer from './containers/HeaderContainer';

class App extends React.Component {

    render() {
        return (
            <main>
                <HeaderContainer />

                <ListContainer />

                <FormContainer />
            </main>
        );
    }
}

export default App;

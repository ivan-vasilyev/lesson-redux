import React from 'react';

import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';
import HeaderContainer from './containers/HeaderContainer';
import FilterContainer from './containers/FilterContainer';


class App extends React.Component {

    render() {
        return (
            <main>
                <HeaderContainer />

                <FilterContainer />

                <ListContainer />

                <FormContainer />
            </main>
        );
    }
}

export default App;

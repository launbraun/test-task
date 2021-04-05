import React from 'react'
import {connect} from "react-redux";
import {emptyState, getUsers} from "./redux/users-reducer";
import FirstPage from "./components/FirstPage";
import {Route} from "react-router";
import SecondPage from "./components/SecondPage";


class App extends React.Component {


    render() {

        return (
            <div>
                <Route exact path={'/'}
                       render={() => <FirstPage getUsers={this.props.getUsers}
                                                emptyState={this.props.emptyState}
                                                isFetching={this.props.isFetching}/>}/>
                <Route path={'/second-page'}
                       render={() => <SecondPage users={this.props.users}/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    isFetching: state.users.isFetching
})


export default connect(mapStateToProps, {getUsers, emptyState})(App);

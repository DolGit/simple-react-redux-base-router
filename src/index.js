import React from 'react'
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { push } from 'connected-react-router'


const mapStateToProps = state => {
    return {
        url: state.router.location.pathname,
        redirect: state.redirect
    }
};

const mapDispatchToProps = dispatch => ({
    redirectTo: (url) => {
        dispatch(push(url))
        dispatch({ type: 'redirect-cleanup' })
    },
});

class Index extends React.Component {
    componentWillReceiveProps(nextProps) {
        this.state.url = nextProps.url
        if (nextProps.redirect) {
            this.props.redirectTo(nextProps.redirect)
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

Index.propTypes = {
    url: PropTypes.string,
    redirect: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
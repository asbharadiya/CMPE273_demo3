import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from '../../actions';


class Account extends Component {

  componentDidMount(){
    this.props.getUserProfile();
  }

	render() {
    return (
    		<div className="inner-page-content">
    			<div className="accountspage">
    				<div className="page-header">
	    			  Basic info
	    		  </div>
            <div className="form-group row">
              <label className="col-xs-4">First name</label>
              <div className="col-xs-8">
                <p>{this.props.profile.first_name}</p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xs-4">Last name</label>
              <div className="col-xs-8">
                <p>{this.props.profile.last_name}</p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xs-4">Email</label>
              <div className="col-xs-8">
                <p>{this.props.profile.email}</p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xs-4">Date of birth</label>
              <div className="col-xs-8">
                <p>{moment(this.props.profile.date_of_birth).utc().format('MM/DD/YYYY')}</p>
              </div>
            </div>
      		</div>
    		</div>
  	);
	}
}

function mapStateToProps(state) {
    return {
        profile:state.profile
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfile : () => dispatch(actions.getUserProfile())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Account);

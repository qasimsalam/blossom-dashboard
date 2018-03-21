import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import { browserHistory } from 'react-router'
import LinearProgress from 'material-ui/LinearProgress';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';

@inject("store")
@observer
export default class Login extends Component {
	constructor(props) {
		super(props);
		// assign props to this component here
		this.props = props.store.loginState;
	}
	render() {
		return (
			<div>
				<img src={this._bgSrc} alt="bg" className="bg" />
					<hgroup>
					 <img src={this._logoSrc} />
				</hgroup>
				<MuiThemeProvider>
						<div>
							{/*<Snackbar
									open={this.state.openErrorMessage}
									message="Username or Password does not match any account"
									autoHideDuration={3000}
									onRequestClose={this.handleErrorMessageClose}
									style = {this.errorMessageStyle}
								/>*/}
								<form>
										{this.props.isLoading && <LinearProgress mode="indeterminate" />}
										<div style={{padding: '2em 2em 2em'}}>
										{this.props.showStep1 && <div id="loginStep1" className="group">
												<TextField
													hintText="jon@company.com"
													floatingLabelText="username"
													fullWidth={true}
													onChange = {(event,newValue) => this.setState({username:newValue})}
												/>
										</div>}
										{this.props.showStep2 && <div id="loginStep2" className="group">
										<IconButton onClick = {this.goToStep1}><Back /></IconButton>
										<TextField
													hintText="password"
													type="password"
													floatingLabelText="password"
													fullWidth={true}
													onChange = {(event,newValue) => this.setState({password:newValue})}
												/>
										</div>}
										<br /> <br />
										<div className="group">
											<RaisedButton label="Next" fullWidth={true} primary={true}  onClick={(event) => this.doLogin(event)}/>
										</div>
									</div>
								</form>
						</div>
				</MuiThemeProvider>
			</div>
		);
	}
}

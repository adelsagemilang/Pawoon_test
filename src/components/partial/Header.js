import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
		  	<div className="nav navbar navbar-default">
				<div className="pull-left">
					<button type="button" className="btn btn-transparent btn-rounded">29 hari lagi trial berakhir</button>
				</div>
				<div className="pull-right">
					<div className="text">
						<p className="menu">
							<i className="fa fa-shopping-bag mg-r-5"></i>
							Program Referal
						</p>
						<div className="separator"></div>
						<p className="menu">
							<i className="fa fa-bell mg-r-5"></i>
							Irfan Rosandi
						</p>
					</div>
				</div>
		  	</div>
		);
	}
}

import {Glyphicon} from 'react-bootstrap';
 
import React, {Component} from 'react';
 
export default class SidebarComp extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
          isVisible: false,
        };
    }
 
    render() {
        return (
              <div>
                  <div className="sidebar">
                  		<div className="text-center">
							<img alt="" src={`/${'image/pawoon-logo-white.png'}`} height="40"/>
                  		</div>
                
                  		<ul className="sidebar-menu">
							<li>Dashboard</li>
							<li>Laporan</li>
							<li>Profile bisnis</li>
							<li>Outlet</li>
							<li>Lisenis Perangkat</li>
							<li>Karyawan</li>
                  		</ul>
                  </div>
              </div>
        );
    }
}
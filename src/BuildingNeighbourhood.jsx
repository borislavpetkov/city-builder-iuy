import React, { Component } from 'react';


export default class BuildingItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEdit: false }
    }

    render() {
        const { name, floor, color } = this.props.building;
        return (
                  <div className={`house ${color}`} key={this.props.index}>  
                    <div className="house-details">
                      <span>Name: {name}</span> 
                      <br />
                      <span>Floors: {floor}</span>
                      <br />
                      <span>Color: {color}</span>
                    </div>
                    <div className="roof"></div> 
                    {Array.from({ length: floor }, (_, fl) => (
                        <div key={fl} className="floor">
                          <span></span>
                          <span></span>
                        </div>
                      ))}
                  </div>
        );
    }
}
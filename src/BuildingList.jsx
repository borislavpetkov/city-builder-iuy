import React, { Component } from 'react';
import BuildingItem from './BuildingItem.jsx';

export default class BuildingList extends Component {
    render() {
        let buildings = this.props.buildingList;
        const trItem = buildings.map( (item,index) => 
        	<BuildingItem key={index} 
        		building={item} index={index} 
        		editBuildingSubmit={this.props.editBuildingSubmit} 
        		deleteBuilding={this.props.deleteBuilding}/>
        	)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }
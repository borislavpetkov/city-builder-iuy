import React, { Component } from 'react';
import BuildingNeighbourhood from './BuildingNeighbourhood.jsx';

export default class Neighbourhood extends Component {
    render() {
        let building = this.props.buildingList;
        const trItem = building.map((item, index) =>
            <BuildingNeighbourhood key={index} building={item} index={index} editBuildingSubmit={this.props.editBuildingSubmit} deleteBuilding={this.props.deleteBuilding}/>
        )
        return (
            <div className="neighbourhood card-body">{trItem}</div>
        );
    }
}
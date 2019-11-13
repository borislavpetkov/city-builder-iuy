import React, { Component } from 'react';
import './CityBuilder.css';
import BuildingList from './BuildingList.jsx';
import Neighbourhood from './Neighbourhood.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBuilding, deleteBuilding, updateBuilding } from './actions/buildingActions'

export class CityBuilder extends React.Component  {
    constructor(props) {
        super(props);
        this.addNewBuilding = this.addNewBuilding.bind(this);
        this.deleteBuilding = this.deleteBuilding.bind(this);
        this.editBuildingSubmit = this.editBuildingSubmit.bind(this);
    }

    addNewBuilding() {
        this.props.addBuilding({
            id: Math.max(...this.props.buildingList.map(function(o) { return o.id })) + 1,
            name: 'House',
            floor: 5,
            color: 'Belize'
        });
    }

    deleteBuilding(id) {
        this.props.deleteBuilding(id);
    }
    editBuildingSubmit(id, name, floor, color) {
        this.props.updateBuilding({ id: id, name: name, floor: floor, color: color });
    }
    render() {
        return (
            <div className="container-fluid">
                  <div className="row mt-3">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header">
                           Buildings
                          <button className="btn btn-primary pull-right float-right" onClick={this.addNewBuilding}><i className="fas fa-building"></i> Add New Building </button>
                        </div>
                          <div className="card-body">
                            <table className="table table-hover">
                               <thead className="thead-dark"><tr><th>Name</th><th>Floor</th><th>Color</th><th>Edit</th><th>Delete</th></tr></thead>
                               <BuildingList deleteBuilding={this.deleteBuilding} buildingList={this.props.buildingList} editBuildingSubmit={this.editBuildingSubmit}/>
                            </table>
                          </div>
                      </div>
                    </div>
                  </div>
                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <div className="card">
                         <Neighbourhood  buildingList={this.props.buildingList} />
                        </div>
                      </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        buildingList: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addBuilding: addBuilding,
        deleteBuilding: deleteBuilding,
        updateBuilding: updateBuilding
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityBuilder);
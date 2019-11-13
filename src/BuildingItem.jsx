import React, { Component } from 'react';


export default class BuildingItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEdit: false }
        this.editBuilding = this.editBuilding.bind(this);
        this.editBuildingSubmit = this.editBuildingSubmit.bind(this);
        this.editBuildingSave = this.editBuildingSave.bind(this);
        this.deleteBuilding = this.deleteBuilding.bind(this);
    }

    deleteBuilding() {
        const { id } = this.props.building;
        this.props.deleteBuilding(id);
    }

    editBuilding() {
        this.setState((prevState, props) => ({
            isEdit: !prevState.isEdit
        }))
    }

    editBuildingSubmit() {
        const { id } = this.props.building;
        this.props.editBuildingSubmit(id, this.nameInput.value, this.floorInput.value, this.colorInput.value);
    }

    editBuildingSave() {
        this.setState((prevState, props) => ({
            isEdit: !prevState.isEdit
        }));
    }

    render() {
        const { name, floor, color } = this.props.building;
        return (
            this.state.isEdit === true ?
            <tr className="bg-light" key={this.props.index}>
                <td>
                    <input ref={nameInput => this.nameInput = nameInput} onChange={this.editBuildingSubmit} defaultValue ={name}/>
                </td>
                <td>
                    <input type="range" min="1" max="10" step="1" onChange={this.editBuildingSubmit}  defaultValue={floor} ref={floorInput => this.floorInput = floorInput}/>
                    <br /> 
                    <span>Number of floors: {floor}</span>
                </td>
                <td>
                    <select ref={colorInput => this.colorInput = colorInput}  onChange={this.editBuildingSubmit}  value={color}>
                        <option value="Orange">Orange</option>
                        <option value="Alizarin">Alizarin</option>
                        <option value="Belize">Belize</option>
                        <option value="Emerald">Emerald</option>
                    </select>
                </td>
                <td>
                    <i className="far fa-times-circle hover" onClick={this.editBuildingSave}></i>
                </td>
                <td>
                    
                </td>
            </tr>
             :
            <tr key={this.props.index}>
                <td>{name}</td>
                <td>{floor}</td>
                <td>{color}</td>
                <td>
                    <i className="far fa-edit hover" onClick={this.editBuilding}></i>
                </td>
                <td>
                    <i className="far fa-trash-alt hover" onClick={this.deleteBuilding}></i>
                </td>
            </tr>
        );
    }
}
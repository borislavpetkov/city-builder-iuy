const buildingReducer = (state = [],action) => {
let stateCopy= [...state,action.payload]; ;
switch(action.type){

case 'ADD_BUILDING':
 stateCopy = [...state,action.payload];
localStorage.setItem('buildings',JSON.stringify(stateCopy));
return stateCopy

case 'DELETE_BUILDING':
stateCopy = state.filter( x => x.id !== action.payload);
localStorage.setItem('buildings',JSON.stringify(stateCopy));
return stateCopy
    
case 'UPDATE_BUILDING':

stateCopy = state.map((building) => {
    const {id,name,floor,color} = action.payload;
    if(building.id === id)
    {
    building.name = name;
    building.floor = floor;
    building.color = color;
    }
    return building;
})
localStorage.setItem('buildings',JSON.stringify(stateCopy));
return stateCopy

default:
    return state;
}

}
export default buildingReducer;
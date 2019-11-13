export function addBuilding(building)
{
    return {
    type:'ADD_BUILDING',
    payload:building
    }
}

export function deleteBuilding(Id)
{
    return {
    type:'DELETE_BUILDING',
    payload:Id
    }
}

export function updateBuilding(building)
{
    return {
        type:'UPDATE_BUILDING',
        payload:building
        }

}
export const SET_SELECT_VEHICLE = 'SET_SELECT_VEHICLE'

export const selectVehicle = vehicleID => {

  return {
    type: SET_SELECT_VEHICLE,
    payload: vehicleID
  }
}
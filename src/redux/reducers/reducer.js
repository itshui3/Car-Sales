import { REMOVE_FEATURE, BUY_ITEM } from '../actions/action'

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {

    case REMOVE_FEATURE:
      const updatedFeatures = state.car.features.slice(0, payload).concat(state.car.features.slice(payload+1))

      return {
        ...state,
        car: {
          ...state.car,
          features: updatedFeatures
        }
      }

    case BUY_ITEM:
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            payload
          ]
        }
      }

    default:
      return state
  }
}
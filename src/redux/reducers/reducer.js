import { 
  ADD_FEATURE,
  REMOVE_FEATURE
} from '../actions/featurePurchaseActions'
import {
  SET_SELECT_VEHICLE
} from '../actions/selectVehicleActions'
import { numericLiteral } from '@babel/types'

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  cars: [
    {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    {
      price: 333999,
      name: '3693 Hui Convertible',
      image:
        'https://mk0cfstest0sltokv8ce.kinstacdn.com/wp-content/uploads/2019/09/Cool-Cars-Feat1.jpg',
      features: []
    },
    {
      price: 176000,
      name: 'Best Boiz',
      image:
        'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/11/25/931/524/694940094001_6108767444001_6108777354001-vs.jpg?ve=1&tl=1',
      features: []
    }
  ],

  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {

    case SET_SELECT_VEHICLE:
      return {
        ...state,
        car: {
          ...state.cars[Number(payload)]
        }
      }

    case ADD_FEATURE:
      const addThis = state.additionalFeatures
        .find(feature => {
          return (feature.id === payload)
        })
      addThis.index = Date.now()
      return {
        ...state,
        additionalPrice: state.additionalPrice +  addThis.price,
        // change to reflect multiple cars
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            addThis
          ]
        }
      }
    case REMOVE_FEATURE:
      const removeThisIndex = state.car.features
        .findIndex(feature => {
          return feature.index === payload
        })

      const costDeducted = state.car.features[removeThisIndex].price

      const newFeatures = state.car.features.slice()
      newFeatures.splice(removeThisIndex, 1)

      return {
        ...state,
        car: {
          ...state.car,
          features: newFeatures,
        },
        additionalPrice: state.additionalPrice - costDeducted
      }

    default:
      return state
  }
}
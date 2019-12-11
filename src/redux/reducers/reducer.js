import { 
  ADD_FEATURE,
  REMOVE_FEATURE
} from '../actions/featurePurchaseActions'

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
}

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_FEATURE:
      const addThis = state.additionalFeatures
        .find(feature => {
          return (feature.id === payload)
        })
      addThis.index = Date.now()
      return {
        ...state,
        additionalPrice: state.additionalPrice +  addThis.price,
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
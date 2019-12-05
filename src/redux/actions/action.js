export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export function removeFeature(indexOfFeature) {
  // normalizing logic
  return {
    type: REMOVE_FEATURE,
    payload: indexOfFeature
  }
}

export const BUY_ITEM = 'BUY_ITEM'
export function buyItem(item) {
  // normalizing logic
  return {
    type: BUY_ITEM,
    payload: item
  }
}
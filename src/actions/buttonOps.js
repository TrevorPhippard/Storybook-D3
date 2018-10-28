export const ACTION_TYPE_DO_STUFF = 'operation.increment'

export function DoStuff(value ,id) {
  return {
    type: ACTION_TYPE_DO_STUFF,
    id:id,
    payload: { value }
  }
}

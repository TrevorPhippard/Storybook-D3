export const ACTION_TYPE_DO_STUFF = 'operation.increment'

export const DoStuff = (value ,id)=> {
  return ({
    type: ACTION_TYPE_DO_STUFF,
    id:id,
    payload: { value }
  })
}

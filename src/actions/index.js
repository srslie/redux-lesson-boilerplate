//action creator, needs a type and a payload
//todo is both the value and the key, so uses shorthand
export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const toggleToDo = id => ({
  type: 'TOGGLE_TODO', 
  id
})
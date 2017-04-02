interface FSA {
  type: string;
  payload?: any;
}

export default function(state: number = 0, {type, payload}: FSA) {
  switch (type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  }
}

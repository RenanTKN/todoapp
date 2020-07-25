import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

export default (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
            deleted: false,
          },
        },
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            deleted: true,
          },
        },
      };
    }
    default:
      return state;
  }
};

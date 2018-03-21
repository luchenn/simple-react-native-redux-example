import {INCREMENT, DECREMENT} from '../actions/counterActions';

const initialState = {
    count: 0
};

export default function counter(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {count: state.count + 1});
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

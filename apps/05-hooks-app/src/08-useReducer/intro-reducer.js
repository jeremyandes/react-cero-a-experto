const initialState = [
    {
        id: 1,
        todo: 'Aprender React completo',
        done: false,
    }
];

const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload];
        default:
            return state;
    }
}

let todos = todoReducer();
// todo.push({
//     id: 2,
//     todo: 'Entender los Reducer',
//     done: false,
// })

const newTodo = {
    id: 2,
    todo: 'Entender los Reducer',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
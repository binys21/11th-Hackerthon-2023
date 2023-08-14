import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
    {
        id: 1,
        hospital: "세브란스병원",
        date: "2023.07.30",
        doctor: "외과 전문의 김학선",
        done: false,
    },
    {
        id: 2,
        hospital: "아현서울이비인후과병원",
        date: "2023.07.29",
        doctor: "이비인후과 전문의 김현아",
        done: false,
    },
];

function todoReducer(state, action) {
    switch (action.type) {
        case "REMOVE":
            return state.filter((todo) => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(3);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    return useContext(TodoNextIdContext);
}

interface State {
    generatedText: string;
    useNumbers: boolean;
    useSymbols: boolean;
    length: number;
  }
  
export const initialState: State = {
    generatedText: '',
    useNumbers: true,
    useSymbols: true,
    length: 8,
};

type Action =
    | { type: 'SET_GENERATED_TEXT'; payload: string }
    | { type: 'SET_USE_NUMBERS'; payload: boolean }
    | { type: 'SET_USE_SYMBOLS'; payload: boolean }
    | { type: 'SET_LENGTH'; payload: number };

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_GENERATED_TEXT':
        return { ...state, generatedText: action.payload };
        case 'SET_USE_NUMBERS':
        return { ...state, useNumbers: action.payload };
        case 'SET_USE_SYMBOLS':
        return { ...state, useSymbols: action.payload };
        case 'SET_LENGTH':
        return { ...state, length: action.payload };
        default:
        return state;
    }
}
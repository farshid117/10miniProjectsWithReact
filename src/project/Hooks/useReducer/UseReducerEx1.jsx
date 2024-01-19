import { Button, Stack, Typography, Divider } from '@mui/material';
import { useReducer } from 'react';

/* 
    1: Make Reducer function
    2: initialization useReducer Hook
    3: dispatch action to reducer function
*/
const reducer = (state= [], action) => {
    // console.log("state: ", state);
    switch (action.type) {
        case "add":
            return { count: state.count + 1 };

        case "minus":
            return { count: state.count - 1 };

        default: return state

    }
}
const UseTransitionEx1 = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    // console.log("state: ", state ); //state is object with count property that initialized

    const add = () => {
        dispatch({ type: "add" })
    }
    const minus = () => {
        dispatch({ type: "minus" })
    }
    return (
        <div className='mt-5 text-center'>
            <p className='fw-bold fs-2'>useReducer <span className='text-primary'>Example</span></p>
            <Divider variant='middle' sx={{ mb: 3, border: "3px solid #000" }} />
            <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
                <Button variant="contained" onClick={add}>Add </Button>
                <Typography variant='h3' sx={{ mx: 2 }} dir="ltr" >{state.count}</Typography>
                <Button variant="contained" onClick={minus} color="warning">minus</Button>
            </Stack>
        </div>
    );
}

export default UseTransitionEx1;

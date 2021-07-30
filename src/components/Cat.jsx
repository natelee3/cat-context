import { useStateValue } from '../context';    

const Cat = () => {
    const [value, dispatch] = useStateValue();
    const { activity } = value;

    const _handleClick = (type) => {
        dispatch({ type });
    }

    return (
        <>
            <p>The cat is {activity} </p>
            <button type="button" onClick={()=> _handleClick('ACTION_EAT')}>Eat</button>
            <button type="button" onClick={()=> _handleClick('ACTION_PLAY')}>Play</button>
            <button type="button" onClick={()=> _handleClick('ACTION_NAP')}>Nap</button>
        </>
    )
}

export default Cat;
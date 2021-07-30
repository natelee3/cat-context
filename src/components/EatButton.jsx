import { useContext} from 'react';
import StateContext from '../context';

const EatButton = () => {
    const [value, dispatch] = useContext(StateContext);
    const { activity } = value;

    return (
        <button
            onClick={() => dispatch({
                type: 'ACTION_EAT'
            })}>
            Feed Cat
        </button>
    )
}
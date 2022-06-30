import { CircularProgress } from '@mui/material';
import Button  from '@mui/material/Button';
function HButton(props){
    const{label, onClick, loading, disabled} = props;
    return(
        <>
            <Button disabled={disabled || loading} onClick={onClick} variant="contained">
                {loading && <CircularProgress size={20}/>} {label}</Button>
        </>
    );
}

export default HButton;
import TextField from '@mui/material/TextField';
function HInput(props){
    const{label, onChange,type} = props;
  return(
    <>
          <TextField
           color="warning"
            id="standard-basic" 
            type={type}
            variant="standard"
            required={true}
           onChange={onChange}
           label={label}
             />
    </>
  )
}

export default HInput;
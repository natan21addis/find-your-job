import ClipLoader from 'react-spinner/ClipLoader';

const override={
   display:'block',
   margin:'100px auto'
}

const spinner=({loading})=>{
   return(
      <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      />
   )
}
export default Spinner;
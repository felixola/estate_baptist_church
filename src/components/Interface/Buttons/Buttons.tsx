import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';

const ReadMore = styled(Button)({
    backgroundColor: '#3d6cb9',
    border: 'none',
    fontSize: '14px',
    width: '150px', 
    height: '40px',
    color: '#FFFFFF', 
    borderRadius: '20px', 
    '&:hover': {
      backgroundColor: '#40514e',
    }
  })

  const Right = styled(Button)({
    backgroundColor: '#dee1ec',
    border: 'none',
    color: '#FFFFFF', 
    borderRadius: '20px', 
    '&:hover': {
      backgroundColor: '#40514e',
    }
  })
  
  const ViewMore = styled(Button)({
    backgroundColor: '#ffb174',
    color: '#FFFFFF',
    fontSize: '14px',
    width: '150px', 
    boxShadow: 'none',
    height: '45px', 
    // borderRadius: '25px',
    '&:hover': {
      backgroundColor: '#40514e',
    }
  })
  const Donations = styled(Button)({
    // backgroundColor: '#3d6cb9',
    border: '2px solid #FFFFFF',
    color: '#FFFFFF',
    fontSize: '14px',
    width: '150px', 
    // borderRadius: '25px',
    height: '45px', 
    '&:hover': {
      backgroundColor: '#40514e',
    }
  })
  
  const WorshipBtn = styled(Button)({
    backgroundColor: '#3d6cb9', 
    height: '50px',
    width: '270px',
    border: 'none', 
    color: '#FFFFFF', 
    '&:hover': {
      backgroundColor: '#40514e',
    }
  });

  const ArrowRight = styled(Button)({
    backgroundColor: '#3d6cb9', 
    boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.1)',
    height: '40px',
    width: '30px',
    border: 'none', 
    borderRadius: '0px',
    color: '#FFFFFF', 
    '&:hover': {
      backgroundColor: '#40514e',
    }
  })

  const InputText = styled(TextField) ({  
    border: '1px solid #FFFFFF',
    borderRadius: '0px !important',
    minWidth: '192px', 
    height: '10px !important',
    margin: 0, 
    padding: '0px !important', 
    '& fieldset': {
      borderRadius: 0,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      border: '1px solid #FFFFFF',},
      '&:active': {
        backgroundColor: 'transparent',
        border: '1px solid #FFFFFF',}
    });
  
    const InputOthers = styled(TextField) ({ 
      minWidth: '555px',  
      border: '1px solid #FFFFFF',
      borderRadius: '0px !important',
      height: '10px !important',
      margin: 0, 
      padding: '0px !important', 
      '& fieldset': {
        borderRadius: 0,
      },
      '&:hover': {
        backgroundColor: 'transparent',
        border: '1px solid #FFFFFF',},
        '&:active': {
          backgroundColor: 'transparent',
          border: '1px solid #FFFFFF',}
      });
  
      const SendMsg = styled(Button)({
        minWidth: '555px', 
        height: '50px',
        borderRadius: '0',
        boxShadow: 'none',
        backgroundColor: '#3d6cb9',
        border: 'none',
        marginTop: '10rem',
        marginBottom: '10rem',
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 500,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#4525E3',
        },
      });


  export { ReadMore, ViewMore, Donations, WorshipBtn, Right, ArrowRight, InputText, InputOthers, SendMsg }
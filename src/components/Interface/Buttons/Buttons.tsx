import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

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
    borderRadius: '25px',
    '&:hover': {
      backgroundColor: '#40514e',
    }
  })
  const Donations = styled(Button)({
    // backgroundColor: '#3d6cb9',
    border: '2px solid #3d6cb9',
    color: '#3d6cb9',
    fontSize: '14px',
    width: '150px', 
    borderRadius: '25px',
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
  })


  export { ReadMore, ViewMore, Donations, WorshipBtn, Right }
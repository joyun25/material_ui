import React from 'react'
import { Typography, Button, Container } from '@mui/material'
// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'
// import SendIcon from '@mui/icons-material/Send'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

export default function Create() {
  return (
    <div>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a New Note
        </Typography>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={() => console.log('you clicked me')}
          // startIcon={<SendIcon/>}
          endIcon={<KeyboardArrowRightIcon/>}
        >
          Submit
        </Button>

        {/* icons */}
        {/* <AcUnitOutlinedIcon/>
        <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
        <AcUnitOutlinedIcon color="secondary" fontSize="small"/>
        <AcUnitOutlinedIcon color="action" fontSize="small"/>
        <AcUnitOutlinedIcon color="error" fontSize="small"/>
        <AcUnitOutlinedIcon color="disabled" fontSize="small"/>
        <br /> */}
      </Container>
    </div>
  )
}
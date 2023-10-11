import React from 'react'
import { Typography, Button, Container } from '@mui/material'

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
        >
          Submit
        </Button>
      </Container>
    </div>
  )
}
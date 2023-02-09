import React from 'react';
import { Container, Typography } from '@mui/material';
import useStyles from './style'

function Certificate(props) {
  const {name} = props
  const classes = useStyles()
  return (
    <>
      <Container className={classes.container} >
        <Typography textAlign={'center'} variant='h3'>Kartexa</Typography>
        <Typography variant='h2'>{name}</Typography>
        <Typography>This Accomplishment goes to Name to successfully complete a 2 months Intership in Kartexa.</Typography>
      </Container>
    </>
  )
}

export default Certificate
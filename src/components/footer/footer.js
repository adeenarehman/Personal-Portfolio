import React from 'react'
import { Box, Typography } from '@mui/material'

export default function footer() {
  return (
    <Box sx={{ backgroundColor:'#000', opacity:'1', p: 3 }}>
      <Box sx={{ display: "flex", flexGrow:1, opacity:'1', justifyContent:'center'}} >
        <Typography color='#fff'>Copyright © 2023 Adeena. All Rights Reserved.</Typography>
      </Box>
    </Box>
  )
}

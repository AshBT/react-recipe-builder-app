import React from 'react';
import { Typography, Box } from '@smooth-ui/core-sc';

const Title = () => (
  <Box>
    <Typography variant="h1" textAlign="center" m={0} letterSpacing={1.5} >
      Recipe Builder
    </Typography>
    <Typography variant="h2" textAlign="center" fontSize={20} fontWeight="normal" lineHeight={1.5} m={0} px={18} mt={10} letterSpacing={1.5}>
      Enter subtitles here ...
    </Typography>
  </Box>
);

export default Title;
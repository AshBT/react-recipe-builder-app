import React from 'react';
import { Box, Typography } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

import withRowContent from '../../hocs/RowContent';
import * as Styled from './CaptureImg.style';

const CaptureImg = ({ onChange, capturedImg, onClick }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Styled.Input
      show={!capturedImg}
      type="file"
      name="image"
      accept="image/*"
      capture="environment"
      onChange={onChange}
    />
    <Box
      position="relative"
    >
      <Styled.Img
        src={capturedImg}
        alt="Camera icon"
        maxWidth="400px"
        show={!!capturedImg}
      />
      <Styled.Button
        show={!!capturedImg}
        type="button"
        name="remove"
        aria-label="Remove image"
        onClick={onClick}
      >
        &times;
      </Styled.Button>
    </Box>
    <Typography
      display={capturedImg ? 'none' : 'block'}
      variant="h2"
      textAlign="left"
      fontSize={{ xs: 22, md: 24 }}
      fontWeight="bold"
      lineHeight={1.5}
      m={0}
      px={18}
      mt={10}
      letterSpacing={1.5}
    >
      OR
    </Typography>
  </Box>
);

CaptureImg.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  capturedImg: PropTypes.string.isRequired,
};

const rowContentSetup = {
  rowMargin: {
    mb: '10px',
  },
  boxConfig: {
    as: 'section',
    role: 'region',
    display: 'flex',
    mx: 'auto',
    justifyContent: 'center',
    maxWidth: '500px',
  },
};

const WrappedCaptureImg = withRowContent(rowContentSetup)(CaptureImg);

export default WrappedCaptureImg;

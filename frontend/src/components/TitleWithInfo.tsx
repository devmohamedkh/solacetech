import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react';

interface TitleWithInfoProps {
  customStyles?: any;
  title: ReactNode;
  subTitle: ReactNode;
}

const TitleWithInfo = ({ customStyles, title, subTitle }: TitleWithInfoProps) => {
  return (
    <Box sx={[styles.root, customStyles ? customStyles : {}]}>
      <Typography sx={styles.title}>  {title} </Typography>
      <Typography sx={styles.subTitle}>  {subTitle} </Typography>
    </Box>
  )
}

const styles = {
  root: {
    textAlign: 'start'
  },
  subTitle: {
    fontWeight: '500', fontSize: '16px', color: "text.primary",
  },
  title: {
    mt: '16px', mb: "8px", fontWeight: '400', fontSize: '12px',
    color: "text.secondary",
  },
}

export default TitleWithInfo
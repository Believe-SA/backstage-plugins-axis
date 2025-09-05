import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type ProjectInfoLabelProps = {
  label: string;
  value: string | JSX.Element;
};

export const ProjectInfoLabel = ({ label, value }: ProjectInfoLabelProps) => {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{ color: theme => theme.palette.text.disabled }}
      >
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
};

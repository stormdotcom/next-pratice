// ** MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FooterContent = () => {

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}`}
        <Box component='span' sx={{ color: "error.main" }}>
        </Box>
      </Typography>
    </Box>
  );
};

export default FooterContent;

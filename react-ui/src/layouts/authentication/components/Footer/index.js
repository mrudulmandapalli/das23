// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Footer() {
  return (
    <SuiBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <SuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography
                component="a"
                href="#"
                target="_blank"
                variant="body2"
                textColor="secondary"
              >
                C
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography
                component="a"
                href="#"
                target="_blank"
                variant="body2"
                textColor="secondary"
              >
                P
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <SuiTypography
                component="a"
                href="#"
                target="_blank"
                variant="body2"
                textColor="secondary"
              >
                S
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <SuiBox display="flex" justifyContent="center" mt={1} mb={3}>
            <SuiBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </SuiBox>
            <SuiBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </SuiBox>
            <SuiBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </SuiBox>
            <SuiBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </SuiBox>
            <SuiBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={8} className="text-center">
          <SuiTypography variant="body2" textColor="secondary">
            &copy; C.
          </SuiTypography>
        </Grid>
      </Grid>
    </SuiBox>
  );
}

export default Footer;

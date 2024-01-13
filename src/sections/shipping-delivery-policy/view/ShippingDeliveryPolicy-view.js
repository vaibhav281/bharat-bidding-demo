import React from 'react';
import Container from '@mui/material/Container';
import { Box, Typography, Card, List, ListItem, ListItemText } from '@mui/material';

export default function ShippingDeliveryPolicyView() {
  return (
    <>
      <Container
        sx={{
          pb: 10,
          pt: { xs: 2, md: 3 },
          position: 'relative',
        }}
      >
        <Box sx={{ pb: 0, position: 'relative' }}>
          <Card sx={{ px: { xs: 1, sm: 1, md: 8 }, py: 3 }}>
            <Typography variant="h3" sx={{ my: { xs: 5, md: 3 }, textAlign: 'center' }}>
              Shipping Delivery Policy
            </Typography>

            <Box sx={{ my: 2, pl: 0, }}>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>Last updated January 03, 2024</Typography>
              <List>
                <ListItem dense>
                  <Typography variant="body1" fontSize={'12px'} >
                    1. General
                  </Typography>
                </ListItem >
                <ListItem dense>
                  <Typography variant="body1" fontSize={'12px'}>
                    2. Shipping Fees
                  </Typography>
                </ListItem>
                <ListItem dense>
                  <Typography variant="body1" fontSize={'12px'}>
                    3. International
                  </Typography>
                </ListItem>
                <ListItem dense>
                  <Typography variant="body1" fontSize={'12px'}>
                    4. Delivery Logistic
                  </Typography>
                </ListItem>
                <ListItem dense>
                  <Typography variant="body1" fontSize={'12px'}>
                    5. Final Details
                  </Typography>
                </ListItem>
              </List>

              <Typography variant="body2">
                This Shipping & Delivery Policy is part of our Terms of Use ("Terms") and should be therefore read alongside our main Terms:
              </Typography>
              <Typography variant="body2">
                Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.
              </Typography>
              <Typography variant="body2">
                We offer various shipping options. In some cases, a third-party supplier may be managing our inventory and will be responsible for shipping your products.Shipping Fees We offer shipping at the following rates:
              </Typography>
              <Typography variant="body2">
                All times and dates given for delivery of the products are given in good faith but are estimates only.
              </Typography>
            </Box>

            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="subtitle2">WHAT HAPPENS IF MY ORDER IS DELAYED</Typography>
              <Typography variant="body2">
                If delivery is delayed for any reason we will let you know as soon as possible and will advise you of a revised estimated date for delivery.
              </Typography>

            </Box>


          </Card>
        </Box>
      </Container >
    </>
  );
}

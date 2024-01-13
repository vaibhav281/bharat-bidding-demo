'use client';

import React from 'react';
import Container from '@mui/material/Container';
import { Box, Card, Typography, List, ListItem, } from '@mui/material';


export default function RefundPolicyView() {
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
              Refund Policy
            </Typography>

            <Box sx={{ my: 2, pl: 0, }}>
              <Typography variant="h6">RETURN POLICY</Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>Last updated January 02, 2024</Typography>
              <List>
                <ListItem dense>
                  <Typography variant="body1" fontSize="12px" >
                    1. General
                  </Typography>
                </ListItem >
                <ListItem dense>
                  <Typography variant="body1" fontSize="12px">
                    2. Return Policy
                  </Typography>
                </ListItem>
                <ListItem dense>
                  <Typography variant="body1" fontSize="12px">
                    3. Return Process
                  </Typography>
                </ListItem>
                <ListItem dense>
                  <Typography variant="body1" fontSize="12px">
                    4. Return Shipping
                  </Typography>
                </ListItem>
                <ListItem dense>
                  <Typography variant="body1" fontSize="12px">
                    5. Return Guidelines
                  </Typography>
                </ListItem>
                <ListItem dense>
                  <Typography variant="body1" fontSize="12px">
                    6. Customer Service
                  </Typography>
                </ListItem>
                <ListItem dense>
                  <Typography variant="body1" fontSize="12px">
                    7. Final Details
                  </Typography>
                </ListItem>
              </List>

              <Typography variant="body2">
                Thank you for your purchase. We hope you are happy with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for an exchange only. Please see below for more information on our return policy
              </Typography>
            </Box>

            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">RETURNS</Typography>
              <Typography variant="body2">
                All returns must be postmarked within nine (9) days of the purchase date. All returned items must be in new and unused condition, with all original tags and labels attached.
              </Typography>
            </Box>



            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">RETURN PROCESS</Typography>

              <Typography variant="body2">
                To return an item, please email customer service at bharatbidding@gmail.com to obtain a Return Merchandise Authorization (RMA) number. After receiving an RMA number, place the item securely in its original packaging and include your proof of purchase, then mail your return to the following address
              </Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: 'oblique' }}>Attn: Returns</Typography>
              <Typography variant="body2">
                You may also use the prepaid shipping label enclosed with your package. Return shipping charges will be paid or reimbursed by us.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">REFUNDS</Typography>
              <Typography variant="body2">
                After receiving your return and inspecting the condition of your item, we will process your exchange. Please allow at least seven (7) days from the receipt of your item to process your exchange. We will notify you by email when your return has been processed.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">EXCEPTIONS</Typography>
              <Typography variant="body2">
                <strong>The following items cannot be exchanged: </strong>
              </Typography>

              <List>
                <ListItem dense>
                  <Typography variant="body1" fontSize="12px" >
                    1. Manufactured products For defective or damaged products, please contact us at the contact details below to arrange a refund or exchange.
                  </Typography>
                </ListItem >
              </List>
            </Box>


          </Card>
        </Box>
      </Container >
    </>
  );
}

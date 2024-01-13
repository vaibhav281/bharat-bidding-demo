import React from 'react';
import Container from '@mui/material/Container';
import { Box, Typography, Card, List, ListItem, ListItemText } from '@mui/material';

export default function TermsConditionsView() {
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
              Terms Conditions
            </Typography>

            <Box sx={{ my: 2, pl: 0, }}>
              <Typography variant="h6">TERMS OF USE</Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>Last updated</Typography>
              <Typography variant="h6">AGREEMENT TO OUR LEGAL TERMS</Typography>

              <Typography variant="body2">
                We are
                ("Company," "we," "us," "our".
                We operate, as well as any other related products and services that refer or link to these legal terms (the
                "Legal Terms") (collectively, the "Services").

              </Typography>
              <Typography variant="body2">
                You can contact us by email at
                _or by mail to
              </Typography>
              <Typography variant="body2">
                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and
                - concerning your access to and use of the Services. You agree
                that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms
              </Typography>
              <Typography variant="body2">
                IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY
              </Typography>
              <Typography variant="body2">
                Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                We recommend that you print a copy of these Legal Terms for your records.
              </Typography>
            </Box>

            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">TABLE OF CONTENTS</Typography>
              <List>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >1. OUR SERVICES</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >2. INTELLECTUAL PROPERTY RIGHTS</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >3. USER REPRESENTATIONS</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >4. PROHIBITED ACTIVITIES</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >5. USER-GENERATED CONTRIBUTIONS</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >6. HOW LONG DO WE KEEP YOUR INFORMATION?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >7. CONTRIBUTION LICENSE</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >8. SERVICES MANAGEMENT</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >9. TERM AND TERMINATION</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >10. CONTROLS FOR DO-NOT-TRACK FEATURES</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >11. MODIFICATIONS AND INTERRUPTIONS</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >12. GOVERNING LAW</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >13. DISPUTE RESOLUTION</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >14. CORRECTIONS</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >15. DISCLAIMER</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >16. LIMITATIONS OF LIABILITY</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >17. INDEMNIFICATION</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >18. USER DATA</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >19. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</Typography>
                </ListItem>
              </List>
            </Box>

            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">1. OUR SERVICES</Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: 'oblique' }}>Personal information you disclose to us</Typography>

              <Typography variant="body2">
                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
              </Typography>


            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">2. INTELLECTUAL PROPERTY RIGHTS</Typography>
              <Typography variant="body2">
                <strong>Our intellectual property </strong>
              </Typography>
              <Typography variant="body2">
                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
              </Typography>
              <Typography variant="body2">
                The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">3. USER REPRESENTATIONS</Typography>
              <Typography variant="body2">
                By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.
              </Typography>
              <Typography variant="body2">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any current or future use of the Services (or any portion thereof).
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">4. PROHIBITED ACTIVITIES</Typography>
              <Typography variant="body2">
                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">5. USER GENERATED CONTRIBUTIONS</Typography>
              <Typography variant="body2">
                The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that:
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">6. CONTRIBUTION LICENSE</Typography>
              <Typography variant="body2">
                You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
                By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
              </Typography>
              <Typography variant="body2">
                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any responsibility and to refrain from any legal action against us regarding your Contributions.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">7. SERVICES MANAGEMENT</Typography>
              <Typography variant="body2">
                We reserve the right, but not the obligation, to (1) monitor the Services for violations of these Legal Terms;
                (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems, and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.

              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">8. TERM AND TERMINATION</Typography>
              <Typography variant="body2">
                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
              </Typography>
              <Typography variant="body2">
                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">9. MODIFICATIONS AND INTERRUPTIONS</Typography>
              <Typography variant="body2">
                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
              </Typography>
            </Box>

          </Card>
        </Box>
      </Container >
    </>
  );
}

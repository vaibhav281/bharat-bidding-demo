import React from 'react';
import Container from '@mui/material/Container';
import { Box, Typography, Card, List, ListItem, ListItemText } from '@mui/material';

export default function PrivacyPolicyView() {
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
              Privacy Policy
            </Typography>

            <Box sx={{ my: 2, pl: 0, }}>
              <Typography variant="h6">PRIVACY NOTICE</Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>Last updated January 02, 2024</Typography>

              <Typography variant="body2">
                This privacy notice for ("we," "us," or "our"), describes how and why we might collect, store, use, and share ("process") your information when you use our services ("Services"), such as when you:
              </Typography>

              <List>
                <ListItem dense>
                  <Typography variant="body1" fontSize={'12px'} >
                    1. Visit our website or any website of ours that links to this privacy notice
                  </Typography>
                </ListItem >
                <ListItem dense>
                  <Typography variant="body1" fontSize={'12px'}>
                    2. Engage with us in other related ways, including any sales, marketing, or events
                  </Typography>
                </ListItem>
              </List>

              <Typography variant="body2">
                Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you disagree with our policies and practices, please do not use our Services.
              </Typography>
            </Box>

            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">SUMMARY OF KEY POINTS</Typography>
              <Typography variant="body2">
                This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for
              </Typography>
              <Typography variant="body2">
                What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about the personal information you disclose to us.
              </Typography>
              <Typography variant="body2">
                Do we process any sensitive personal information? We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about the sensitive information we process.
              </Typography>
              <Typography variant="body2">
                Do we receive any information from third parties? We do not receive any information from third parties.
              </Typography>
              <Typography variant="body2">
                How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
              </Typography>
              <Typography variant="body2">
                In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
                How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.
              </Typography>
              <Typography variant="body2">
                What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
              </Typography>
              <Typography variant="body2">
                How do you exercise your rights? The easiest way to exercise your rights is by visiting
                _____ or by
                contacting us. We will consider and act upon any request by applicable data protection laws.
                Want to learn more about what we do with any information we collect? Review the privacy notice in full.
              </Typography>
            </Box>

            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">TABLE OF CONTENTS</Typography>
              <List>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >1. WHAT INFORMATION DO WE COLLECT?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >2. HOW DO WE PROCESS YOUR INFORMATION?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >6. HOW LONG DO WE KEEP YOUR INFORMATION?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >7. HOW DO WE KEEP YOUR INFORMATION SAFE?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >8. DO WE COLLECT INFORMATION FROM MINORS?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >9. WHAT ARE YOUR PRIVACY RIGHTS?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >10. CONTROLS FOR DO-NOT-TRACK FEATURES</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >11. DO WE MAKE UPDATES TO THIS NOTICE?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >13. HOW HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Typography>
                </ListItem>
              </List>
            </Box>

            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">1. WHAT INFORMATION DO WE COLLECT?</Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: 'oblique' }}>Personal information you disclose to us</Typography>
              <Typography variant="body2">
                <strong>In Short: </strong> We collect personal information that you provide to us.
              </Typography>
              <Typography variant="body2">
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services when you participate in activities on the Services, or otherwise when you contact us.
              </Typography>
              <Typography variant="body2">
                Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontStyle: 'oblique' }}>
                The personal information we collect may include the following:
              </Typography>
              <List>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; names</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; phone numbers</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; email addresses</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; mailing addresses</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; job titles</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; usernames</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; passwords</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; contact preferences</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; contact or authentication data</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; billing addresses</Typography>
                </ListItem>
              </List>
              <Typography variant="body2">
                Sensitive Information. When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
              </Typography>

              <List>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; financial data</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; social security numbers or other government identifiers</Typography>
                </ListItem>
                <ListItem dense >
                  <Typography variant="body1" fontSize={'12px'} >&#8226; GST number of the company</Typography>
                </ListItem>

              </List>

            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">2.  HOW DO WE PROCESS YOUR INFORMATION?</Typography>
              <Typography variant="body2">
                <strong>In Short: </strong>  We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
              </Typography>
              <Typography variant="body2">
                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Typography>
              <Typography variant="body2">
                <strong>In Short: </strong>  We may need to share your personal information in the following situations:
              </Typography>
              <Typography variant="body2">
                Business Transfers. We may share or transfer your information in connection with or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</Typography>
              <Typography variant="body2">
                <strong>In Short: </strong> We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise our Services but are not affiliated with our Services.
              </Typography>
              <Typography variant="body2">
                The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Typography>
              <Typography variant="body2">
                Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
              </Typography>
              <Typography variant="body2">
                We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">6. HOW LONG DO WE KEEP YOUR INFORMATION?</Typography>
              <Typography variant="body2">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than the period in which users have an account with us.
              </Typography>
              <Typography variant="body2">
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</Typography>
              <Typography variant="body2">
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cyber criminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">8. DO WE COLLECT INFORMATION FROM MINORS?</Typography>
              <Typography variant="body2">
                <strong>In Short: </strong> We do not knowingly collect data from or market to children under 18 years of age.
                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under the age 18, please contact us at ___________
              </Typography>
            </Box>
            <Box sx={{ my: 2, pl: 0 }}>
              <Typography variant="h6">9. WHAT ARE YOUR PRIVACY RIGHTS?</Typography>
              <Typography variant="body2">
                <strong>In Short: </strong>  You may review, change, or terminate your account at any time.
                Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
              </Typography>
              <Typography variant="body2">
                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
              </Typography>
            </Box>

          </Card>
        </Box>
      </Container >
    </>
  );
}

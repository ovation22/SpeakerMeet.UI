import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BreadCrumbs from '../components/BreadCrumbs';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 24,
  },
});

export default function Privacy() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" style={{ padding: 24 }}>
        <BreadCrumbs />
        <Paper className={classes.root} align="left">
          <Typography variant="h4" paragraph>
            PRIVACY NOTICE
          </Typography>

          <Typography variant="subtitle1" paragraph>
            Last updated July 11, 2020
          </Typography>

          <Typography paragraph>
            Thank you for choosing to be part of our community at SpeakerMeet (&quot;Company&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your
            personal information and your right to privacy. If you have any questions or concerns
            about this privacy notice, or our practices with regards to your personal information,
            please contact us at privacy@speakermeet.net.
          </Typography>

          <Typography paragraph>
            When you visit our website https://www.speakermeet.net (the &quot;Website&quot;), and
            more generally, use any of our services (the &quot;Services&quot;, which include the
            Website), we appreciate that you are trusting us with your personal information. We take
            your privacy very seriously. In this privacy notice, we seek to explain to you in the
            clearest way possible what information we collect, how we use it and what rights you
            have in relation to it. We hope you take some time to read through it carefully, as it
            is important. If there are any terms in this privacy notice that you do not agree with,
            please discontinue use of our Services immediately.
          </Typography>

          <Typography paragraph>
            This privacy notice applies to all information collected through our Services (which, as
            described above, includes our Website), as well as any related services, sales,
            marketing or events.
          </Typography>

          <Typography paragraph>
            Please read this privacy notice carefully as it will help you understand what we do with
            the information that we collect.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            TABLE OF CONTENTS
          </Typography>
          <ol>
            <li>WHAT INFORMATION DO WE COLLECT?</li>
            <li>HOW DO WE USE YOUR INFORMATION?</li>
            <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
            <li>DO WE USE GOOGLE MAPS?</li>
            <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
            <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
            <li>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          </ol>
          <Typography variant="subtitle2" paragraph>
            1. WHAT INFORMATION DO WE COLLECT?
          </Typography>

          <Typography paragraph>Personal information you disclose to us</Typography>

          <Typography paragraph>
            In Short: We collect information that you provide to us.
          </Typography>

          <Typography paragraph>
            We collect personal information that you voluntarily provide to us when you register on
            the Website, express an interest in obtaining information about us or our products and
            Services, when you participate in activities on the Website (such as by posting messages
            in our online forums or entering competitions, contests or giveaways) or otherwise when
            you contact us.
          </Typography>

          <Typography paragraph>
            The personal information that we collect depends on the context of your interactions
            with us and the Website, the choices you make and the products and features you use. The
            personal information we collect may include the following:
          </Typography>

          <Typography paragraph>
            Personal Information Provided by You. We collect names; email addresses; job titles;
            usernames; passwords; contact preferences; contact or authentication data; and other
            similar information.
          </Typography>

          <Typography paragraph>
            Social Media Login Data. We may provide you with the option to register with us using
            your existing social media account details, like your Facebook, Twitter or other social
            media account. If you choose to register in this way, we will collect the information
            described in the section called &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS&quot; below.
            All personal information that you provide to us must be true, complete and accurate, and
            you must notify us of any changes to such personal information.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            Information automatically collected
          </Typography>

          <Typography paragraph>
            In Short: Some information — such as your Internet Protocol (IP) address and/or browser
            and device characteristics — is collected automatically when you visit our Website.
          </Typography>

          <Typography paragraph>
            We automatically collect certain information when you visit, use or navigate the
            Website. This information does not reveal your specific identity (like your name or
            contact information) but may include device and usage information, such as your IP
            address, browser and device characteristics, operating system, language preferences,
            referring URLs, device name, country, location, information about who and when you use
            our Website and other technical information. This information is primarily needed to
            maintain the security and operation of our Website, and for our internal analytics and
            reporting purposes.
          </Typography>

          <Typography paragraph>
            Like many businesses, we also collect information through cookies and similar
            technologies.
          </Typography>

          <Typography paragraph>The information we collect includes:</Typography>

          <Typography paragraph>
            Log and Usage Data. Log and usage data is service-related, diagnostic usage and
            performance information our servers automatically collect when you access or use our
            Website and which we record in log files. Depending on how you interact with us, this
            log data may include your IP address, device information, browser type and settings and
            information about your activity in the Website (such as the date/time stamps associated
            with your usage, pages and files viewed, searches and other actions you take such as
            which features you use), device event information (such as system activity, error
            reports (sometimes called &apos;crash dumps&apos;) and hardware settings).
          </Typography>

          <Typography paragraph>
            Device Data. We collect device data such as information about your computer, phone,
            tablet or other device you use to access the Website. Depending on the device used, this
            device data may include information such as your IP address (or proxy server), device
            application identification numbers, location, browser type, hardware model Internet
            service provider and/or mobile carrier, operating system configuration information.
          </Typography>

          <Typography paragraph>
            Location Data. We collect information data such as information about your device&apos;s
            location, which can be either precise or imprecise. How much information we collect
            depends on the type of settings of the device you use to access the Website. For
            example, we may use GPS and other technologies to collect geolocation data that tells us
            your current location (based on your IP address). You can opt out of allowing us to
            collect this information either by refusing access to the information or by disabling
            your Locations settings on your device. Note however, if you choose to opt out, you may
            not be able to use certain aspects of the Services.
          </Typography>

          <Typography paragraph>Information collected from other sources</Typography>

          <Typography paragraph>
            In Short: We may collect limited data from public databases, marketing partners, social
            media platforms, and other outside sources.
          </Typography>

          <Typography paragraph>
            In order to enhance our ability to provide relevant marketing, offers and services to
            you and update our records, we may obtain information about you from other sources, such
            as public databases, joint marketing partners, affiliate programs, data providers,
            social media platforms, as well as from other third parties. This information includes
            mailing addresses, job titles, email addresses, phone numbers, intent data (or user
            behavior data), Internet Protocol (IP) addresses, social media profiles, social media
            URLs and custom profiles, for purposes of targeted advertising and event promotion. If
            you interact with us on a social media platform using your social media account (e.g.
            Facebook or Twitter), we receive personal information about you such as your name, email
            address, and gender. Any personal information that we collect from your social media
            account depends on your social media account&apos;s privacy settings.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            2. HOW DO WE USE YOUR INFORMATION?
          </Typography>

          <Typography paragraph>
            In Short: We process your information for purposes based on legitimate business
            interests, the fulfillment of our contract with you, compliance with our legal
            obligations, and/or your consent.
          </Typography>

          <Typography paragraph>
            We use personal information collected via our Website for a variety of business purposes
            described below. We process your personal information for these purposes in reliance on
            our legitimate business interests, in order to enter into or perform a contract with
            you, with your consent, and/or for compliance with our legal obligations. We indicate
            the specific processing grounds we rely on next to each purpose listed below.
          </Typography>

          <Typography paragraph>We use the information we collect or receive:</Typography>

          <Typography paragraph>
            To facilitate account creation and logon process. If you choose to link your account
            with us to a third-party account (such as your Google or Facebook account), we use the
            information you allowed us to collect from those third parties to facilitate account
            creation and logon process for the performance of the contract. See the section below
            headed &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS&quot; for further information.
          </Typography>

          <Typography paragraph>
            To post testimonials. We post testimonials on our Website that may contain personal
            information. Prior to posting a testimonial, we will obtain your consent to use your
            name and the consent of the testimonial. If you wish to update, or delete your
            testimonial, please contact us at privacy@speakermeet.net and be sure to include your
            name, testimonial location, and contact information.
          </Typography>

          <Typography paragraph>
            Request feedback. We may use your information to request feedback and to contact you
            about your use of our Website.
          </Typography>

          <Typography paragraph>
            To enable user-to-user communications. We may use your information in order to enable
            user-to-user communications with each user&apos;s consent.
          </Typography>

          <Typography paragraph>
            To manage user accounts. We may use your information for the purposes of managing our
            account and keeping it in working order.
          </Typography>

          <Typography paragraph>
            To send administrative information to you. We may use your personal information to send
            you product, service and new feature information and/or information about changes to our
            terms, conditions, and policies.
          </Typography>

          <Typography paragraph>
            To protect our Services. We may use your information as part of our efforts to keep our
            Website safe and secure (for example, for fraud monitoring and prevention).
          </Typography>

          <Typography paragraph>
            To enforce our terms, conditions and policies for business purposes, to comply with
            legal and regulatory requirements or in connection with our contract.
          </Typography>

          <Typography paragraph>
            To respond to legal requests and prevent harm. If we receive a subpoena or other legal
            request, we may need to inspect the data we hold to determine how to respond.
          </Typography>

          <Typography paragraph>
            To send you marketing and promotional communications. We and/or our third-party
            marketing partners may use the personal information you send to us for our marketing
            purposes, if this is in accordance with your marketing preferences. For example, when
            expressing an interest in obtaining information about us or our Website, subscribing to
            marketing or otherwise contacting us, we will collect personal information from you. You
            can opt-out of our marketing emails at any time (see the &quot;WHAT ARE YOUR PRIVACY
            RIGHTS&quot; below).
          </Typography>

          <Typography paragraph>
            Deliver targeted advertising to you. We may use your information to develop and display
            personalized content and advertising (and work with third parties who do so) tailored to
            your interests and/or location and to measure its effectiveness.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
          </Typography>

          <Typography paragraph>
            In Short: We only share information with your consent, to comply with laws, to provide
            you with services, to protect your rights, or to fulfill business obligations.
          </Typography>

          <Typography paragraph>
            We may process or share your data that we hold based on the following legal basis:
          </Typography>

          <Typography paragraph>
            Consent: We may process your data if you have given us specific consent to use your
            personal information in a specific purpose.
          </Typography>

          <Typography paragraph>
            Legitimate Interests: We may process your data when it is reasonably necessary to
            achieve our legitimate business interests.
          </Typography>

          <Typography paragraph>
            Performance of a Contract: Where we have entered into a contract with you, we may
            process your personal information to fulfill the terms of our contract.
          </Typography>

          <Typography paragraph>
            Legal Obligations: We may disclose your information where we are legally required to do
            so in order to comply with applicable law, governmental requests, a judicial proceeding,
            court order, or legal process, such as in response to a court order or a subpoena
            (including in response to public authorities to meet national security or law
            enforcement requirements).
          </Typography>

          <Typography paragraph>
            Vital Interests: We may disclose your information where we believe it is necessary to
            investigate, prevent, or take action regarding potential violations of our policies,
            suspected fraud, situations involving potential threats to the safety of any person and
            illegal activities, or as evidence in litigation in which we are involved.
          </Typography>

          <Typography paragraph>
            More specifically, we may need to process your data or share your personal information
            in the following situations:
          </Typography>

          <Typography paragraph>
            Business Transfers. We may share or transfer your information in connection with, or
            during negotiations of, any merger, sale of company assets, financing, or acquisition of
            all or a portion of our business to another company.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </Typography>

          <Typography paragraph>
            In Short: We may use cookies and other tracking technologies to collect and store your
            information.
          </Typography>

          <Typography paragraph>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to
            access or store information. Specific information about how we use such technologies and
            how you can refuse certain cookies is set out in our Cookie Notice.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            5. DO WE USE GOOGLE MAPS?
          </Typography>

          <Typography paragraph>
            In Short: Yes, we use Google Maps for the purpose of providing better service.
          </Typography>

          <Typography paragraph>
            This Website uses Google Maps APIs which is subject to Google&apos;s Terms of Service.
            You may find the Google Maps APIs Terms of Service here. To find out more about Google’s
            Privacy Policy, please refer to this link. We obtain and store on your device
            (&apos;cache&apos;) your location. You may revoke your consent anytime by contacting us
            at the contact details provided at the end of this document.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </Typography>

          <Typography paragraph>
            In Short: If you choose to register or log in to our services using a social media
            account, we may have access to certain information about you.
          </Typography>

          <Typography paragraph>
            Our Website offers you the ability to register and login using your third-party social
            media account details (like your Facebook or Twitter logins). Where you choose to do
            this, we will receive certain profile information about you from your social media
            provider. The profile Information we receive may vary depending on the social media
            provider concerned, but will often include your name, email address, friends list,
            profile picture as well as other information you choose to make public on such social
            media platform.
          </Typography>

          <Typography paragraph>
            We will use the information we receive only for the purposes that are described in this
            privacy notice or that are otherwise made clear to you on the relevant Website. Please
            note that we do not control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend that you review
            their privacy notice to understand how they collect, use and share your personal
            information, and how you can set your privacy preferences on their sites and apps.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
          </Typography>

          <Typography paragraph>
            In Short: We may transfer, store, and process your information in countries other than
            your own.
          </Typography>

          <Typography paragraph>
            Our servers are located in United States. If you are accessing our Website from outside
            United States, please be aware that your information may be transferred to, stored, and
            processed by us in our facilities and by those third parties with whom we may share your
            personal information (see &quot;WILL YOUR INFORMATION BE SHARED WITH ANYONE?&quot;
            above), in United States, and other countries.
          </Typography>

          <Typography paragraph>
            If you are a resident in the European Economic Area, then these countries may not
            necessarily have data protection laws or other similar laws as comprehensive as those in
            your country. We will however take all necessary measures to protect your personal
            information in accordance with this privacy notice and applicable law.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            8. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
          </Typography>

          <Typography paragraph>
            In Short: We are not responsible for the safety of any information that you share with
            third-party providers who advertise, but are not affiliated with, our Website.
          </Typography>

          <Typography paragraph>
            The Website may contain advertisements from third parties that are not affiliated with
            us and which may link to other websites, online services or mobile applications. We
            cannot guarantee the safety and privacy of data you provide to any third parties. Any
            data collected by third parties is not covered by this privacy notice. We are not
            responsible for the content or privacy and security practices and policies of any third
            parties, including other websites, services or applications that may be linked to or
            from the Website. You should review the policies of such third parties and contact them
            directly to respond to your questions.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            9. HOW LONG DO WE KEEP YOUR INFORMATION?
          </Typography>

          <Typography paragraph>
            In Short: We keep your information for as long as necessary to fulfill the purposes
            outlined in this privacy notice unless otherwise required by law.
          </Typography>

          <Typography paragraph>
            We will only keep your personal information for as long as it is necessary for the
            purposes set out in this privacy notice, unless a longer retention period is required or
            permitted by law (such as tax, accounting or other legal requirements). No purpose in
            this notice will require us keeping your personal information for longer than three (3)
            months past the termination of the user&apos;s account.
          </Typography>

          <Typography paragraph>
            When we have no ongoing legitimate business need to process your personal information,
            we will either delete or anonymize such information, or, if this is not possible (for
            example, because your personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from any further processing
            until deletion is possible.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            10. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </Typography>

          <Typography paragraph>
            In Short: We aim to protect your personal information through a system of organizational
            and technical security measures.
          </Typography>

          <Typography paragraph>
            We have implemented appropriate technical and organizational security measures designed
            to protect the security of any personal information we process. However, despite our
            safeguards and efforts to secure your information, no electronic transmission over the
            Internet or information storage technology can be guaranteed to be 100% secure, so we
            cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third
            parties will not be able to defeat our security, and improperly collect, access, steal,
            or modify your information. Although we will do our best to protect your personal
            information, transmission of personal information to and from our Website is at your own
            risk. You should only access the Website within a secure environment.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            11. WHAT ARE YOUR PRIVACY RIGHTS?
          </Typography>

          <Typography paragraph>
            In Short: In some regions, such as the European Economic Area, you have rights that
            allow you greater access to and control over your personal information. You may review,
            change, or terminate your account at any time.
          </Typography>

          <Typography paragraph>
            In some regions (like the European Economic Area), you have certain rights under
            applicable data protection laws. These may include the right (i) to request access and
            obtain a copy of your personal information, (ii) to request rectification or erasure;
            (iii) to restrict the processing of your personal information; and (iv) if applicable,
            to data portability. In certain circumstances, you may also have the right to object to
            the processing of your personal information. To make such a request, please use the
            contact details provided below. We will consider and act upon any request in accordance
            with applicable data protection laws.
          </Typography>

          <Typography paragraph>
            If we are relying on your consent to process your personal information, you have the
            right to withdraw your consent at any time. Please note however that this will not
            affect the lawfulness of the processing before its withdrawal, nor will it affect the
            processing of your personal information conducted in reliance on lawful processing
            grounds other than consent.
          </Typography>

          <Typography paragraph>
            If you are resident in the European Economic Area and you believe we are unlawfully
            processing your personal information, you also have the right to complain to your local
            data protection supervisory authority. You can find their contact details here:
            http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
          </Typography>

          <Typography paragraph>
            If you are resident in Switzerland, the contact details for the data protection
            authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.
          </Typography>

          <Typography paragraph>Account Information</Typography>

          <Typography paragraph>
            If you would at any time like to review or change the information in your account or
            terminate your account, you can:
          </Typography>

          <Typography paragraph>
            ■ Log in to your account settings and update your user account.
          </Typography>

          <Typography paragraph>
            Upon your request to terminate your account, we will deactivate or delete your account
            and information from our active databases. However, we may retain some information in
            our files to prevent fraud, troubleshoot problems, assist with any investigations,
            enforce our Terms of Use and/or comply with applicable legal requirements.
          </Typography>

          <Typography paragraph>
            Cookies and similar technologies: Most Web browsers are set to accept cookies by
            default. If you prefer, you can usually choose to set your browser to remove cookies and
            to reject cookies. If you choose to remove cookies or reject cookies, this could affect
            certain features or services of our Website. To opt-out of interest-based advertising by
            advertisers on our Website visit http://www.aboutads.info/choices/.
          </Typography>

          <Typography paragraph>
            Opting out of email marketing: You can unsubscribe from our marketing email list at any
            time by clicking on the unsubscribe link in the emails that we send or by contacting us
            using the details provided below. You will then be removed from the marketing email list
            – however, we may still communicate with you, for example to send you service-related
            emails that are necessary for the administration and use of your account, to respond to
            service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
          </Typography>

          <Typography paragraph>
            ■ Access your account settings and update your preferences.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            12. CONTROLS FOR DO-NOT-TRACK FEATURES
          </Typography>

          <Typography paragraph>
            Most web browsers and some mobile operating systems and mobile applications include a
            Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your
            privacy preference not to have data about your online browsing activities monitored and
            collected. At this stage, no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not currently respond to DNT
            browser signals or any other mechanism that automatically communicates your choice not
            to be tracked online. If a standard for online tracking is adopted that we must follow
            in the future, we will inform you about that practice in a revised version of this
            privacy notice.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </Typography>

          <Typography paragraph>
            In Short: Yes, if you are a resident of California, you are granted specific rights
            regarding access to your personal information.
          </Typography>

          <Typography paragraph>
            California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot;
            law, permits our users who are California residents to request and obtain from us, once
            a year and free of charge, information about categories of personal information (if any)
            we disclosed to third parties for direct marketing purposes and the names and addresses
            of all third parties with which we shared personal information in the immediately
            preceding calendar year. If you are a California resident and would like to make such a
            request, please submit your request in writing to us using the contact information
            provided below.
          </Typography>

          <Typography paragraph>
            If you are under 18 years of age, reside in California, and have a registered account
            with the Website, you have the right to request removal of unwanted data that you
            publicly post on the Website. To request removal of such data, please contact us using
            the contact information provided below, and include the email address associated with
            your account and a statement that you reside in California. We will make sure the data
            is not publicly displayed on the Website, but please be aware that the data may not be
            completely or comprehensively removed from all our systems (e.g. backups, etc.).
          </Typography>

          <Typography paragraph>CCPA Privacy Notice</Typography>

          <Typography paragraph>
            The California Code of Regulations defines a &quot;resident&quot; as:
          </Typography>

          <Typography paragraph>
            (1) every individual who is in the State of California for other than a temporary or
            transitory purpose and
          </Typography>

          <Typography paragraph>
            (2) every individual who is domiciled in the State of California who is outside the
            State of California for a temporary or transitory purpose All other individuals are
            defined as &quot;non-residents.&quot;
          </Typography>

          <Typography paragraph>
            If this definition of &quot;resident&quot; applies to you, certain rights and
            obligations apply regarding your personal information.
          </Typography>

          <Typography paragraph>What categories of personal information do we collect?</Typography>

          <Typography paragraph>
            We have collected the following categories of personal information in the past twelve
            (12) months:
          </Typography>

          <Typography paragraph>Category Examples Collected</Typography>

          <Typography paragraph>
            A. Identifiers Contact details, such as real name, alias, postal address, telephone or
            mobile contact number, unique personal identifier, online identifier, Internet Protocol
            address, email address and account name
          </Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>
            B. Personal information categories listed in the California Customer Records statute
            Name, contact information, education, employment, employment history and financial
            information
          </Typography>

          <Typography paragraph>YES</Typography>

          <Typography paragraph>
            C. Protected classification characteristics under California or federal law Gender and
            date of birth
          </Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>
            D. Commercial information Transaction information, purchase history, financial details
            and payment information
          </Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>E. Biometric information Fingerprints and voiceprints</Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>
            F. Internet or other similar network activity Browsing history, search history, online
            behavior, interest data, and interactions with our and other websites, applications,
            systems and advertisements
          </Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>G. Geolocation data Device location</Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>
            H. Audio, electronic, visual, thermal, olfactory, or similar information Images and
            audio, video or call recordings created in connection with our business activities
          </Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>
            I. Professional or employment-related information Business contact details in order to
            provide you our services at a business level, job title as well as work history and
            professional qualifications if you apply for a job with us
          </Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>
            J. Education Information Student records and directory information
          </Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>
            K. Inferences drawn from other personal information Inferences drawn from any of the
            collected personal information listed above to create a profile or summary about, for
            example, an individual’s preferences and characteristics
          </Typography>

          <Typography paragraph>NO</Typography>

          <Typography paragraph>
            We may also collect other personal information outside of these categories in instances
            where you interact with us in-person, online, or by phone or mail in the context of:
          </Typography>

          <Typography paragraph>Receiving help through our customer support channels</Typography>

          <Typography paragraph>Participation in customer surveys or contests; and</Typography>

          <Typography paragraph>
            Facilitation in the delivery of our Services and to respond to your inquiries
          </Typography>

          <Typography paragraph>How do we use and share your personal information?</Typography>

          <Typography paragraph>
            More information about our data collection and sharing practices can be found in this
            privacy notice.
          </Typography>

          <Typography paragraph>
            You may contact us by email at privacy@speakermeet.net, by visiting
            https://www.speakermeet.net, or by referring to the contact details at the bottom of
            this document.
          </Typography>

          <Typography paragraph>
            If you are using an authorized agent to exercise your right to opt-out, we may deny a
            request if the authorized agent does not submit proof that they have been validly
            authorized to act on your behalf.
          </Typography>

          <Typography paragraph>Will your information be shared with anyone else?</Typography>

          <Typography paragraph>
            We may disclose your personal information with our service providers pursuant to a
            written contract between us and each service provider. Each service provider is a
            for-profit entity that processes the information on our behalf.
          </Typography>

          <Typography paragraph>
            We may use your personal information for our own business purposes, such as for
            undertaking internal research for technological development and demonstration. This is
            not considered to be &quot;selling&quot; of your personal data.
          </Typography>

          <Typography paragraph>
            SpeakerMeet has not disclosed or sold any personal information to third parties for a
            business or commercial purpose in the preceding twelve (12) months. SpeakerMeet will not
            sell personal information in the future belonging to website visitors, users and other
            consumers.
          </Typography>

          <Typography paragraph>Your rights with respect to your personal data</Typography>

          <Typography paragraph>
            Right to request deletion of the data - Request to delete
          </Typography>

          <Typography paragraph>
            You can ask for the deletion of your personal information. If you ask us to delete your
            personal information, we will respect your request and delete your personal information,
            subject to certain exceptions provided by law, such as (but not limited to) the exercise
            by another consumer of his or her right to free speech, our compliance requirements
            resulting from a legal obligation or any processing that may be required to protect
            against illegal activities.
          </Typography>

          <Typography paragraph>Right to be informed - Request to know</Typography>

          <Typography paragraph>
            Depending on the circumstances, you have a right to know:
          </Typography>

          <Typography paragraph>whether we collect and use your personal information;</Typography>

          <Typography paragraph>the categories of personal information that we collect;</Typography>

          <Typography paragraph>
            the purposes for which the collected personal information is used;
          </Typography>

          <Typography paragraph>
            whether we sell your personal information to third parties;
          </Typography>

          <Typography paragraph>
            the categories of personal information that we sold or disclosed for a business purpose;
          </Typography>

          <Typography paragraph>
            the categories of third parties to whom the personal information was sold or disclosed
            for a business purpose; and
          </Typography>

          <Typography paragraph>
            the business or commercial purpose for collecting or selling personal information.
          </Typography>

          <Typography paragraph>
            In accordance with applicable law, we are not obligated to provide or delete consumer
            information that is de-identified in response to a consumer request or to re-identify
            individual data to verify a consumer request.
          </Typography>

          <Typography paragraph>
            Right to Non-Discrimination for the Exercise of a Consumer&apos;s Privacy Rights
          </Typography>

          <Typography paragraph>
            We will not discriminate against you if you exercise your privacy rights.
          </Typography>

          <Typography paragraph>Verification process</Typography>

          <Typography paragraph>
            Upon receiving your request, we will need to verify your identity to determine you are
            the same person about whom we have the information in our system. These verification
            efforts require us to ask you to provide information so that we can match it with the
            information you have previously provided us. For instance, depending on the type of
            request you submit, we may ask you to provide certain information so that we can match
            the information you provide with the information we already have on file, or we may
            contact you through a communication method (e.g. phone or email) that you have
            previously provided to us. We may also use other verification methods as the
            circumstances dictate.
          </Typography>

          <Typography paragraph>
            We will only use personal information provided in your request to verify your identity
            or authority to make the request. To the extent possible, we will avoid requesting
            additional information from you for the purposes of verification. If, however, if we
            cannot verify your identity from the information already maintained by us, we may
            request that you provide additional information for the purposes of verifying your
            identity, and for security or fraud-prevention purposes. We will delete such
            additionally provided information as soon as we finish verifying you.
          </Typography>

          <Typography paragraph>Other privacy rights</Typography>

          <Typography paragraph>you may object to the processing of your personal data</Typography>

          <Typography paragraph>
            you may request correction of your personal data if it is incorrect or no longer
            relevant, or ask to restrict the processing of the data
          </Typography>

          <Typography paragraph>
            you can designate an authorized agent to make a request under the CCPA on your behalf.
            We may deny a request from an authorized agent that does not submit proof that they have
            been validly authorized to act on your behalf in accordance with the CCPA.
          </Typography>

          <Typography paragraph>
            you may request to opt-out from future selling of your personal information to third
            parties. Upon receiving a request to opt-out, we will act upon the request as soon as
            feasibly possible, but no later than 15 days from the date of the request submission.
          </Typography>

          <Typography paragraph>
            To exercise these rights, you can contact us by email at privacy@speakermeet.net, by
            visiting https://www.speakermeet.net, or by referring to the contact details at the
            bottom of this document. If you have a complaint about how we handle your data, we would
            like to hear from you.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            14. DO WE MAKE UPDATES TO THIS NOTICE?
          </Typography>

          <Typography paragraph>
            In Short: Yes, we will update this notice as necessary to stay compliant with relevant
            laws.
          </Typography>

          <Typography paragraph>
            We may update this privacy notice from time to time. The updated version will be
            indicated by an updated &quot;Revised&quot; date and the updated version will be
            effective as soon as it is accessible. If we make material changes to this privacy
            notice, we may notify you either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this privacy notice
            frequently to be informed of how we are protecting your information.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </Typography>

          <Typography paragraph>
            If you have questions or comments about this notice, you may email us at
            privacy@speakermeet.net or by post to:
          </Typography>

          <Typography paragraph>
            SpeakerMeet
            <br />
            Tampa, FL 33635
            <br />
            United States
            <br />
            privacy@speakermeet.net
          </Typography>

          <Typography variant="subtitle2" paragraph>
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </Typography>

          <Typography paragraph>
            Based on the applicable laws of your country, you may have the right to request access
            to the personal information we collect from you, change that information, or delete it
            in some circumstances. To request to review, update, or delete your personal
            information, please visit: https://www.speakermeet.net. We will respond to your request
            within 30 days.
          </Typography>
        </Paper>
      </Container>
    </>
  );
}

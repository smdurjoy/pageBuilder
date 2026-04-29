import API_BASE from "@/config/domain";

export default defineEventHandler(() => {
  return {
    teamAvatar: `${API_BASE}/our-team/team-avatar.png`,
    hero: {
      logo: `${API_BASE}/our-team/logo.png`,
      logoLight: `${API_BASE}/our-team/logo-light.png`,
      logoNormal: `${API_BASE}/our-team/logo-normal.png`,
      heroImageMask: `${API_BASE}/our-team/hero-mask.png`,

      nav: [
        { name: "Home", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Our Services", link: "#" },
        { name: "Our Team", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contact Us", link: "#" },
      ],

      title: "Terms and Conditions",
      description: "Do you have questions about our terms? Contact us",
      buttonText: "Request Legal Consultation",
    },

    ppDetails: {
      c1: "Privacy Policy",
      c2: "Do you have questions about our policy? Contact us",
    },

    details: {
      c1: "Last updated: January 16, 2026. Please read these terms and conditions carefully before using this website. By using the site or any of its services, you agree to comply with these terms as a user of the site.",
      c2: "Welcome to our law firm's website. This website aims to provide general information about our legal services and is not a substitute for direct legal consultation.",
      points: [
        {
          title: "1. Use of the Website",
          description:
            "The user must be 18 years of age or older to use this website. The user agrees to use the website for lawful purposes only and in a manner that does not violate the applicable laws and regulations in the Kingdom of Saudi Arabia.",
        },
        {
          title: "2. Nature of Content",
          description:
            "All information and content available on the website are for general informational purposes only and do not constitute binding legal advice under any circumstances. No attorney-client relationship is created through the use of this website unless there is a formal written agreement.",
        },
        {
          title: "3. Legal Consultations",
          description:
            "Any consultation request submitted through the website or contact forms does not constitute a commitment to provide legal services until the request is reviewed and approved by the firm. The firm has the right to accept or reject any request at its professional discretion.",
        },
        {
          title: "4. Intellectual Property",
          description:
            "All texts, logos, designs, and content displayed on the website are owned by the firm or licensed for use and may not be copied, reused, or published without prior written permission.",
        },
        {
          title: "5. Limitation of Liability",
          description:
            "The firm shall not be held liable for any direct or indirect damages arising from the use of the website or reliance on its content. The website does not guarantee that it is free from technical errors or service interruptions.",
        },
        {
          title: "6. Amendments to Terms",
          description:
            "The firm reserves the right to modify these terms and conditions at any time without prior notice. Users are advised to review this page regularly to stay informed of any changes.",
        },
        {
          title: "7. Governing Law",
          description:
            "These terms and conditions are governed by and interpreted in accordance with the laws applicable in the Kingdom of Saudi Arabia. Any disputes arising from them shall be subject to the exclusive jurisdiction of the courts of the Kingdom.",
        },
      ],
    },

    footer: {
      logo: `${API_BASE}/home/logo-dark.png`,

      nav: [
        {
          title: "Quick Links",
          items: [
            { name: "Home", link: "#" },
            { name: "About Us", link: "#" },
            { name: "Services", link: "#" },
            { name: "Our Team", link: "#" },
            { name: "Blog", link: "#" },
            { name: "Careers", link: "#" },
          ],
        },
        {
          title: "Our Services",
          items: [
            { name: "Legal Consultations", link: "#" },
            { name: "Litigation and Court Representation", link: "#" },
            { name: "Corporate and Commercial Law", link: "#" },
            { name: "Contract Drafting and Review", link: "#" },
            { name: "Civil and Criminal Cases", link: "#" },
            { name: "Arbitration and Dispute Resolution", link: "#" },
          ],
        },
        {
          title: "Blog",
          items: [
            { name: "Contracts and Agreements", link: "#" },
            { name: "Commercial Law and Companies", link: "#" },
            { name: "Civil Cases", link: "#" },
            { name: "Criminal Cases", link: "#" },
            { name: "Arbitration and Dispute Resolution", link: "#" },
            { name: "Saudi Laws and Regulations", link: "#" },
            { name: "Governance and Compliance", link: "#" },
          ],
        },
      ],

      contact: {
        title: "Contact Information",
        items: [
          { title: "Phone:", value: "05XXXXXXXX" },
          { title: "Email:", value: "info@lawfirm.sa" },
          { title: "Address:", value: "Kingdom of Saudi Arabia" },
        ],
      },

      socials: [
        {
          name: "instagram",
          icon: `${API_BASE}/home/social/instagram.svg`,
          link: "#",
        },
        {
          name: "facebook",
          icon: `${API_BASE}/home/social/facebook.svg`,
          link: "#",
        },
        {
          name: "twitter",
          icon: `${API_BASE}/home/social/twitter.svg`,
          link: "#",
        },
        {
          name: "linkedin",
          icon: `${API_BASE}/home/social/linkedin.svg`,
          link: "#",
        },
        {
          name: "youtube",
          icon: `${API_BASE}/home/social/youtube.svg`,
          link: "#",
        },
      ],

      copyright: "© All rights reserved - Law Firm",
    },
  };
});

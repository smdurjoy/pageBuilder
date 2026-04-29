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

      title: "How Can We Help You?",
      description:
        "Our specialized legal team is ready to answer your inquiries and provide the necessary support in various legal matters. Whether you need legal consultation, case follow-up, or clarification regarding the services we offer, we are here to assist you.",
      buttonText: "Request Legal Consultation",
    },

    formLabels: {
      title: "Contact Us Now",
      description:
        "Fill in your details and we will get back to you as soon as possible",
      labels: [
        {
          label: "Name",
          placeholder: "Enter your name",
        },
        {
          label: "Email",
          placeholder: "Enter your email",
        },
        {
          label: "Phone",
          placeholder: "+966",
        },
        {
          label: "Subject",
          placeholder: "Enter the subject title",
        },
        {
          label: "Message",
          placeholder: "",
        },
      ],
    },

    contactInfo: {
      title: "Get in Touch Easily",
      description:
        "We are here to answer your questions and assist you at any time. Do not hesitate to contact us via phone or email, or visit us at the address below. We are always happy to hear from you!",
      items: [
        {
          icon: `${API_BASE}/contact-us/phone.png`,
          title: "Phone",
          description: "+96600000000",
        },
        {
          icon: `${API_BASE}/contact-us/email.png`,
          title: "Email",
          description: "info@example.sa",
        },
        {
          icon: `${API_BASE}/contact-us/address.png`,
          title: "Address",
          description: "Kingdom of Saudi Arabia, Riyadh",
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
            { name: "Saudi Regulations and Laws", link: "#" },
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

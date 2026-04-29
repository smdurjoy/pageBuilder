export type LandingPage2Response = {
  hero: {
    logo: string;
    logoLight: string;
    heroImage: string;
    heroImageLight: string;
    nav: { name: string; link: string }[];
    title: string;
    description: string;
    buttonText: string;
  };
  trust: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  services: {
    title: string;
    description: string;
    items: {
      icon: string;
      title: string;
      description: string;
      linkText: string;
      arrowIcon: string;
    }[];
  };
  team: {
    title: string;
    description: string;
    items: {
      image: string;
      title: string;
      description: string;
      linkText: string;
      arrowIcon: string;
    }[];
  };
  accreditations: {
    title: string;
    description: string;
    items: {
      image: string;
      title: string;
      description: string;
      linkText: string;
      arrowIcon: string;
    }[];
  };
  blog: {
    title: string;
    description: string;
    items: {
      image: string;
      title: string;
      description: string;
      linkText: string;
      arrowIcon: string;
    }[];
  };
  reviews: {
    title: string;
    description: string;
    items: {
      review: string;
      name: string;
      role: string;
    }[];
  };
  legalSupport: {
    title: string;
    description: string;
    buttonText: string;
  };
  footer: {
    logo: string;

    nav: {
      title: string;
      items: {
        name: string;
        link: string;
      }[];
    }[];

    contact: {
      title: string;
      items: {
        title: string;
        value: string;
      }[];
    };

    socials: {
      name: string;
      icon: string;
      link: string;
    }[];

    copyright: string;
  };
};

export type BlogType = {
  title: string;
  description: string;
  items: {
    image: string;
    title: string;
    description: string;
    linkText: string;
    arrowIcon: string;
  }[];
};

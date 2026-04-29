export type OurTeamResponse = {
  teamAvatar: string;
  hero: {
    logo: string;
    logoLight: string;
    logoNormal: string;
    heroImageMask: string;
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
  lawyersDetails: {
    breadCrumbs: string[];
    image: string;
    title: string;
    description: string;
    buttonText: string;
    aboutLawyer: {
      title: string;
      description: string;
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

export type TrustType = {
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
};

export type ServicesType = {
  title: string;
  description: string;
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
};

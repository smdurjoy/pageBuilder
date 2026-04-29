export type TACResponse = {
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

  ppDetails: {
    c1: string;
    c2: string;
  };
  formLabels: {
    title: string;
    description: string;
    labels: {
      label: string;
      placeholder: string;
    }[];
  };
  contactInfo: {
    title: string;
    description: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
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
  blogs: {
    image: string;
    title: string;
    description: string;
    linkText: string;
    arrowIcon: string;
  }[];
  blogs2: {
    sectionTitle: string;
    sectionLinkText: string;
    items: {
      image: string;
      title: string;
      description: string;
      linkText: string;
      arrowIcon: string;
    }[];
  }[];
  blogDetails: {
    breadCrumbs: string[];
    title: string;
    description: string;
    description2: string;
    p1Title: string;
    p1Description: string;
    p2Title: string;
    p2Description: string;
    p3Title: string;
    p3Description: string;
    p4Title: string;
    p4Description: string;
    p5Title: string;
    p5Description: string;
    p6Title: string;
    p6Description: string;
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

  details: {
    c1: string;
    c2: string;
    points: {
      title: string;
      description: string;
    }[];
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

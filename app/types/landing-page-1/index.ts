export type LandingPage1Response = {
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
      image: string;
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
    buttonText: string;
  };

  accreditations: {
    title: string;
    description: string;
    items: {
      image: string;
      title: string;
      description: string;
    }[];
  };

  reviews: {
    title: string;
    description: string;
    items: {
      review: string;
      name: string;
      role: string;
      rating: number; // 👈 added because UI shows stars
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

export type TrustItem = {
  title: string;
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
    image: string;
    title: string;
    description: string;
    linkText: string;
    arrowIcon: string;
  }[];
};

export type TeamType = {
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
  buttonText: string;
};

export type AccreditationsType = {
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

export type ReviewType = {
  title: string;
  description: string;
  items: {
    review: string;
    name: string;
    role: string;
  }[];
};

export type LegalSupportType = {
  title: string;
  description: string;
  buttonText: string;
};

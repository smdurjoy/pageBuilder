<script setup>
const pages = [
  {
    title: "Home",
    items: [
      { title: "Landing Page 1 Arabic", link: "/ar/landing-page-1" },
      { title: "Landing Page 2 Arabic", link: "/ar/landing-page-2" },
      { title: "Landing Page 3 Arabic", link: "/ar/landing-page-3" },
      { title: "Landing Page 4 Arabic", link: "/ar/landing-page-4" },
      { title: "Landing Page 5 Arabic", link: "/ar/landing-page-5" },

      { title: "Landing Page 1 English", link: "/en/landing-page-1" },
      { title: "Landing Page 2 English", link: "/en/landing-page-2" },
      { title: "Landing Page 3 English", link: "/en/landing-page-3" },
      { title: "Landing Page 4 English", link: "/en/landing-page-4" },
      { title: "Landing Page 5 English", link: "/en/landing-page-5" },

      { title: "Home Page English", link: "/en/home" },
      { title: "Home Page Arabic", link: "/ar/home" },
    ],
  },
  {
    title: "About Us",
    items: [
      { title: "About Us 1 Arabic", link: "/ar/about-us-1" },
      { title: "About Us 2 Arabic", link: "/ar/about-us-2" },
      { title: "About Us 3 Arabic", link: "/ar/about-us-3" },
      { title: "About Us 4 Arabic", link: "/ar/about-us-4" },
      { title: "About Us 5 Arabic", link: "/ar/about-us-5" },

      { title: "About Us 1 English", link: "/en/about-us-1" },
      { title: "About Us 2 English", link: "/en/about-us-2" },
      { title: "About Us 3 English", link: "/en/about-us-3" },
      { title: "About Us 4 English", link: "/en/about-us-4" },
      { title: "About Us 5 English", link: "/en/about-us-5" },
    ],
  },
  {
    title: "Our Services",
    items: [
      { title: "Our Services 1 Arabic", link: "/ar/our-services-1" },
      { title: "Our Services 2 Arabic", link: "/ar/our-services-2" },
      { title: "Our Services 3 Arabic", link: "/ar/our-services-3" },
      { title: "Our Services 4 Arabic", link: "/ar/our-services-4" },
      { title: "Our Services 5 Arabic", link: "/ar/our-services-5" },

      { title: "Our Services 1 English", link: "/en/our-services-1" },
      { title: "Our Services 2 English", link: "/en/our-services-2" },
      { title: "Our Services 3 English", link: "/en/our-services-3" },
      { title: "Our Services 4 English", link: "/en/our-services-4" },
      { title: "Our Services 5 English", link: "/en/our-services-5" },
    ],
  },
  {
    title: "Our Team",
    items: [
      { title: "Our Team 1 Arabic", link: "/ar/our-team-1" },
      { title: "Our Team 2 Arabic", link: "/ar/our-team-2" },
      { title: "Our Team 3 Arabic", link: "/ar/our-team-3" },
      { title: "Lawyer Details 1 Arabic", link: "/ar/lawyer-details-1" },
      { title: "Lawyer Details 2 Arabic", link: "/ar/lawyer-details-2" },
      { title: "Lawyer Details 3 Arabic", link: "/ar/lawyer-details-3" },

      { title: "Our Team 1 English", link: "/en/our-team-1" },
      { title: "Our Team 2 English", link: "/en/our-team-2" },
      { title: "Our Team 3 English", link: "/en/our-team-3" },
      { title: "Lawyer Details 1 English", link: "/en/lawyer-details-1" },
      { title: "Lawyer Details 2 English", link: "/en/lawyer-details-2" },
      { title: "Lawyer Details 3 English", link: "/en/lawyer-details-3" },
    ],
  },
  {
    title: "Blogs",
    items: [
      { title: "Blogs 1 Arabic", link: "/ar/blogs-1" },
      { title: "Blogs 2 Arabic", link: "/ar/blogs-2" },
      { title: "Blogs 3 Arabic", link: "/ar/blogs-3" },
      { title: "Blogs 4 Arabic", link: "/ar/blogs-4" },
      { title: "Blogs 5 Arabic", link: "/ar/blogs-5" },
      { title: "Blogs 6 Arabic", link: "/ar/blogs-6" },
      { title: "Blogs 7 Arabic", link: "/ar/blogs-7" },
      { title: "Blogs 8 Arabic", link: "/ar/blogs-8" },
      { title: "Blogs 9 Arabic", link: "/ar/blogs-9" },
      { title: "Blogs 10 Arabic", link: "/ar/blogs-10" },

      { title: "Blogs 1 English", link: "/en/blogs-1" },
      { title: "Blogs 2 English", link: "/en/blogs-2" },
      { title: "Blogs 3 English", link: "/en/blogs-3" },
      { title: "Blogs 4 English", link: "/en/blogs-4" },
      { title: "Blogs 5 English", link: "/en/blogs-5" },
      { title: "Blogs 6 English", link: "/en/blogs-6" },
      { title: "Blogs 7 English", link: "/en/blogs-7" },
      { title: "Blogs 8 English", link: "/en/blogs-8" },
      { title: "Blogs 9 English", link: "/en/blogs-9" },
      { title: "Blogs 10 English", link: "/en/blogs-10" },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { title: "Contact Us 1 Arabic", link: "/ar/contact-us-1" },
      { title: "Contact Us 2 Arabic", link: "/ar/contact-us-2" },
      { title: "Contact Us 3 Arabic", link: "/ar/contact-us-3" },
      { title: "Contact Us 1 English", link: "/en/contact-us-1" },
      { title: "Contact Us 2 English", link: "/en/contact-us-2" },
      { title: "Contact Us 3 English", link: "/en/contact-us-3" },
    ],
  },
  {
    title: "Terms and Conditions",
    items: [
      { title: "TAC 1 Arabic", link: "/ar/tac-1" },
      { title: "TAC 2 Arabic", link: "/ar/tac-2" },
      { title: "TAC 3 Arabic", link: "/ar/tac-3" },
      { title: "TAC 1 English", link: "/en/tac-1" },
      { title: "TAC 2 English", link: "/en/tac-2" },
      { title: "TAC 3 English", link: "/en/tac-3" },
    ],
  },
  {
    title: "Privacy Policy",
    items: [
      { title: "Privacy Policy 1 Arabic", link: "/ar/privacy-policy-1" },
      { title: "Privacy Policy 2 Arabic", link: "/ar/privacy-policy-2" },
      { title: "Privacy Policy 3 Arabic", link: "/ar/privacy-policy-3" },
      { title: "Privacy Policy 1 English", link: "/en/privacy-policy-1" },
      { title: "Privacy Policy 2 English", link: "/en/privacy-policy-2" },
      { title: "Privacy Policy 3 English", link: "/en/privacy-policy-3" },
    ],
  },
];

const pbComponents = [
  {
    title: "Headers",
    items: [
      { title: "Headers Arabic", link: "/page-builder/ar/headers" },
      { title: "Headers English", link: "/page-builder/en/headers" },
    ],
  },
  {
    title: "Heros",
    items: [
      { title: "Heros Arabic", link: "/page-builder/ar/hero-components/heros" },
      {
        title: "Heros English",
        link: "/page-builder/en/hero-components/heros",
      },
      {
        title: "Heros 2 Arabic",
        link: "/page-builder/ar/hero-components/heros-2",
      },
      {
        title: "Heros 2 English",
        link: "/page-builder/en/hero-components/heros-2",
      },
      {
        title: "Heros 3 Arabic",
        link: "/page-builder/ar/hero-components/heros-3",
      },
      {
        title: "Heros 3 English",
        link: "/page-builder/en/hero-components/heros-3",
      },
      {
        title: "Heros 4 Arabic",
        link: "/page-builder/ar/hero-components/heros-4",
      },
      {
        title: "Heros 4 English",
        link: "/page-builder/en/hero-components/heros-4",
      },
      {
        title: "Heros 5 Arabic",
        link: "/page-builder/ar/hero-components/heros-5",
      },
      {
        title: "Heros 5 English",
        link: "/page-builder/en/hero-components/heros-5",
      },
      {
        title: "Heros 6 Arabic",
        link: "/page-builder/ar/hero-components/heros-6",
      },
      {
        title: "Heros 6 English",
        link: "/page-builder/en/hero-components/heros-6",
      },
    ],
  },
  {
    title: "Our Services",
    items: [
      {
        title: "Our Services Arabic",
        link: "/page-builder/ar/our-services-components/our-services",
      },
      {
        title: "Our Services English",
        link: "/page-builder/en/our-services-components/our-services",
      },
      {
        title: "Our Services 2 Arabic",
        link: "/page-builder/ar/our-services-components/our-services-2",
      },
      {
        title: "Our Services 2 English",
        link: "/page-builder/en/our-services-components/our-services-2",
      },
      {
        title: "Our Services 3 Arabic",
        link: "/page-builder/ar/our-services-components/our-services-3",
      },
      {
        title: "Our Services 3 English",
        link: "/page-builder/en/our-services-components/our-services-3",
      },
      {
        title: "Our Services 4 Arabic",
        link: "/page-builder/ar/our-services-components/our-services-4",
      },
      {
        title: "Our Services 4 English",
        link: "/page-builder/en/our-services-components/our-services-4",
      },
      {
        title: "Our Services 5 Arabic",
        link: "/page-builder/ar/our-services-components/our-services-5",
      },
      {
        title: "Our Services 5 English",
        link: "/page-builder/en/our-services-components/our-services-5",
      },
    ],
  },
  {
    title: "Our Team",
    items: [
      {
        title: "Our Team Arabic",
        link: "/page-builder/ar/our-team-components/our-team",
      },
      {
        title: "Our Team English",
        link: "/page-builder/en/our-team-components/our-team",
      },
      {
        title: "Our Team 2 Arabic",
        link: "/page-builder/ar/our-team-components/our-team-2",
      },
      {
        title: "Our Team 2 English",
        link: "/page-builder/en/our-team-components/our-team-2",
      },
      {
        title: "Our Team 3 Arabic",
        link: "/page-builder/ar/our-team-components/our-team-3",
      },
      {
        title: "Our Team 3 English",
        link: "/page-builder/en/our-team-components/our-team-3",
      },
      {
        title: "Our Team 4 Arabic",
        link: "/page-builder/ar/our-team-components/our-team-4",
      },
      {
        title: "Our Team 4 English",
        link: "/page-builder/en/our-team-components/our-team-4",
      },
      {
        title: "Our Team 5 Arabic",
        link: "/page-builder/ar/our-team-components/our-team-5",
      },
      {
        title: "Our Team 5 English",
        link: "/page-builder/en/our-team-components/our-team-5",
      },
      {
        title: "Our Team 6 Arabic",
        link: "/page-builder/ar/our-team-components/our-team-6",
      },
      {
        title: "Our Team 6 English",
        link: "/page-builder/en/our-team-components/our-team-6",
      },
      {
        title: "Our Team 7 Arabic",
        link: "/page-builder/ar/our-team-components/our-team-7",
      },
      {
        title: "Our Team 7 English",
        link: "/page-builder/en/our-team-components/our-team-7",
      },
    ],
  },
  {
    title: "Footers",
    items: [
      {
        title: "Footer 1 Arabic",
        link: "/page-builder/ar/footers/footer-1",
      },
      {
        title: "Footer 1 English",
        link: "/page-builder/en/footers/footer-1",
      },
      {
        title: "Footer 2 Arabic",
        link: "/page-builder/ar/footers/footer-2",
      },
      {
        title: "Footer 2 English",
        link: "/page-builder/en/footers/footer-2",
      },
      {
        title: "Footer 3 Arabic",
        link: "/page-builder/ar/footers/footer-3",
      },
      {
        title: "Footer 3 English",
        link: "/page-builder/en/footers/footer-3",
      },
      {
        title: "Footer 4 Arabic",
        link: "/page-builder/ar/footers/footer-4",
      },
      {
        title: "Footer 4 English",
        link: "/page-builder/en/footers/footer-4",
      },
      {
        title: "Footer 5 Arabic",
        link: "/page-builder/ar/footers/footer-5",
      },
      {
        title: "Footer 5 English",
        link: "/page-builder/en/footers/footer-5",
      },
      {
        title: "Footer 6 Arabic",
        link: "/page-builder/ar/footers/footer-6",
      },
      {
        title: "Footer 6 English",
        link: "/page-builder/en/footers/footer-6",
      },
    ],
  },
  {
    title: "Videos",
    items: [
      {
        title: "Video 1 Arabic",
        link: "/page-builder/ar/video-components/video-1",
      },
      {
        title: "Video 1 English",
        link: "/page-builder/en/video-components/video-1",
      },
      {
        title: "Video 2 Arabic",
        link: "/page-builder/ar/video-components/video-2",
      },
      {
        title: "Video 2 English",
        link: "/page-builder/en/video-components/video-2",
      },
      {
        title: "Video 3 Arabic",
        link: "/page-builder/ar/video-components/video-3",
      },
      {
        title: "Video 3 English",
        link: "/page-builder/en/video-components/video-3",
      },
      {
        title: "Video 4 Arabic",
        link: "/page-builder/ar/video-components/video-4",
      },
      {
        title: "Video 4 English",
        link: "/page-builder/en/video-components/video-4",
      },
      {
        title: "Video 5 Arabic",
        link: "/page-builder/ar/video-components/video-5",
      },
      {
        title: "Video 5 English",
        link: "/page-builder/en/video-components/video-5",
      },
      {
        title: "Video 6 Arabic",
        link: "/page-builder/ar/video-components/video-6",
      },
      {
        title: "Video 6 English",
        link: "/page-builder/en/video-components/video-6",
      },
      {
        title: "Video 7 English",
        link: "/page-builder/en/video-components/video-7",
      },
      {
        title: "Video 7 Arabic",
        link: "/page-builder/ar/video-components/video-7",
      },
      {
        title: "Video 8 English",
        link: "/page-builder/en/video-components/video-8",
      },
      {
        title: "Video 8 Arabic",
        link: "/page-builder/ar/video-components/video-8",
      },
      {
        title: "Video 9 English",
        link: "/page-builder/en/video-components/video-9",
      },
      {
        title: "Video 9 Arabic",
        link: "/page-builder/ar/video-components/video-9",
      },
    ],
  },
  {
    title: "Banners",
    items: [
      {
        title: "Banner 1 Arabic",
        link: "/page-builder/ar/banner-components/banner-1",
      },
      {
        title: "Banner 1 English",
        link: "/page-builder/en/banner-components/banner-1",
      },
      {
        title: "Banner 2 Arabic",
        link: "/page-builder/ar/banner-components/banner-2",
      },
      {
        title: "Banner 2 English",
        link: "/page-builder/en/banner-components/banner-2",
      },
      {
        title: "Banner 3 Arabic",
        link: "/page-builder/ar/banner-components/banner-3",
      },
      {
        title: "Banner 3 English",
        link: "/page-builder/en/banner-components/banner-3",
      },
      {
        title: "Banner 4 Arabic",
        link: "/page-builder/ar/banner-components/banner-4",
      },
      {
        title: "Banner 4 English",
        link: "/page-builder/en/banner-components/banner-4",
      },
      {
        title: "Banner 5 Arabic",
        link: "/page-builder/ar/banner-components/banner-5",
      },
      {
        title: "Banner 5 English",
        link: "/page-builder/en/banner-components/banner-5",
      },
      {
        title: "Banner 6 Arabic",
        link: "/page-builder/ar/banner-components/banner-6",
      },
      {
        title: "Banner 6 English",
        link: "/page-builder/en/banner-components/banner-6",
      },
      {
        title: "Banner 7 English",
        link: "/page-builder/en/banner-components/banner-7",
      },
      {
        title: "Banner 7 Arabic",
        link: "/page-builder/ar/banner-components/banner-7",
      },
      {
        title: "Banner 8 English",
        link: "/page-builder/en/banner-components/banner-8",
      },
      {
        title: "Banner 8 Arabic",
        link: "/page-builder/ar/banner-components/banner-8",
      },
      {
        title: "Banner 9 English",
        link: "/page-builder/en/banner-components/banner-9",
      },
      {
        title: "Banner 9 Arabic",
        link: "/page-builder/ar/banner-components/banner-9",
      },
      {
        title: "Banner 10 English",
        link: "/page-builder/en/banner-components/banner-10",
      },
      {
        title: "Banner 10 Arabic",
        link: "/page-builder/ar/banner-components/banner-10",
      },
    ],
  },
  {
    title: "Abouts",
    items: [
      {
        title: "About 1 Arabic",
        link: "/page-builder/ar/about-components/about-1",
      },
      {
        title: "About 1 English",
        link: "/page-builder/en/about-components/about-1",
      },
      {
        title: "About 2 Arabic",
        link: "/page-builder/ar/about-components/about-2",
      },
      {
        title: "About 2 English",
        link: "/page-builder/en/about-components/about-2",
      },
      {
        title: "About 3 Arabic",
        link: "/page-builder/ar/about-components/about-3",
      },
      {
        title: "About 3 English",
        link: "/page-builder/en/about-components/about-3",
      },
      {
        title: "About 4 Arabic",
        link: "/page-builder/ar/about-components/about-4",
      },
      {
        title: "About 4 English",
        link: "/page-builder/en/about-components/about-4",
      },
      {
        title: "About 5 Arabic",
        link: "/page-builder/ar/about-components/about-5",
      },
      {
        title: "About 5 English",
        link: "/page-builder/en/about-components/about-5",
      },
      {
        title: "About 6 Arabic",
        link: "/page-builder/ar/about-components/about-6",
      },
      {
        title: "About 6 English",
        link: "/page-builder/en/about-components/about-6",
      },
      {
        title: "About 7 English",
        link: "/page-builder/en/about-components/about-7",
      },
      {
        title: "About 7 Arabic",
        link: "/page-builder/ar/about-components/about-7",
      },
      {
        title: "About 8 English",
        link: "/page-builder/en/about-components/about-8",
      },
      {
        title: "About 8 Arabic",
        link: "/page-builder/ar/about-components/about-8",
      },
      {
        title: "About 9 English",
        link: "/page-builder/en/about-components/about-9",
      },
      {
        title: "About 9 Arabic",
        link: "/page-builder/ar/about-components/about-9",
      },
    ],
  },
  {
    title: "Contacts",
    items: [
      {
        title: "Contact 1 Arabic",
        link: "/page-builder/ar/contact-components/contact-1",
      },
      {
        title: "Contact 1 English",
        link: "/page-builder/en/contact-components/contact-1",
      },
      {
        title: "Contact 2 Arabic",
        link: "/page-builder/ar/contact-components/contact-2",
      },
      {
        title: "Contact 2 English",
        link: "/page-builder/en/contact-components/contact-2",
      },
      {
        title: "Contact 3 Arabic",
        link: "/page-builder/ar/contact-components/contact-3",
      },
      {
        title: "Contact 3 English",
        link: "/page-builder/en/contact-components/contact-3",
      },
      {
        title: "Contact 4 Arabic",
        link: "/page-builder/ar/contact-components/contact-4",
      },
      {
        title: "Contact 4 English",
        link: "/page-builder/en/contact-components/contact-4",
      },
      {
        title: "Contact 5 Arabic",
        link: "/page-builder/ar/contact-components/contact-5",
      },
      {
        title: "Contact 5 English",
        link: "/page-builder/en/contact-components/contact-5",
      },
      {
        title: "Contact 6 Arabic",
        link: "/page-builder/ar/contact-components/contact-6",
      },
      {
        title: "Contact 6 English",
        link: "/page-builder/en/contact-components/contact-6",
      },
      {
        title: "Contact 7 English",
        link: "/page-builder/en/contact-components/contact-7",
      },
      {
        title: "Contact 7 Arabic",
        link: "/page-builder/ar/contact-components/contact-7",
      },
      {
        title: "Contact 8 English",
        link: "/page-builder/en/contact-components/contact-8",
      },
      {
        title: "Contact 8 Arabic",
        link: "/page-builder/ar/contact-components/contact-8",
      },
      {
        title: "Contact 9 English",
        link: "/page-builder/en/contact-components/contact-9",
      },
      {
        title: "Contact 9 Arabic",
        link: "/page-builder/ar/contact-components/contact-9",
      },
    ],
  },
];
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold mb-5">Pages</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-8">
      <div v-for="page in pages" :key="page.title" class="mb-8">
        <h2 class="text-2xl font-semibold mb-3">{{ page.title }}</h2>
        <ul class="list-disc list-inside">
          <li v-for="item in page.items" :key="item.link" class="mb-1">
            <NuxtLink :to="item.link" class="text-blue-500 hover:underline">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Page Builder Components Section -->
    <h1 class="text-3xl font-bold mt-10 mb-5">Page Builder Components</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-8">
      <div v-for="section in pbComponents" :key="section.title" class="mb-8">
        <h2 class="text-2xl font-semibold mb-3">{{ section.title }}</h2>
        <ul class="list-disc list-inside">
          <li v-for="item in section.items" :key="item.link" class="mb-1">
            <NuxtLink :to="item.link" class="text-blue-500 hover:underline">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

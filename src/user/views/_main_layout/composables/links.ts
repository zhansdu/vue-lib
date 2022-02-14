export type link = {
  label: string;
  link: string;
  target?: string;
  dropdown?: {
    links: Array<link>;
  };
};
export const links: Array<link> = [
  {
    label: "about",
    link: "https://sdu-kz.libguides.com/about_us",
  },
  {
    label: "services",
    link: "https://sdu-kz.libguides.com/libservices",
  },
  {
    label: "ask_a_librarian",
    link: "https://sdu-kz.libguides.com/ask-a-librarian_page",
  },
  {
    label: "quick_links",
    target: "",
    link: "javascript:;",
    dropdown: {
      links: [
        {
          label: "az",
          link: "https://sdu-kz.libguides.com/az.php",
          target: "_blank",
        },
        {
          label: "bookpurchase",
          link: "https://sdu-kz.libguides.com/libservices/bookpurchase",
          target: "_blank",
        },
        {
          label: "lib_guides",
          link: "https://sdu-kz.libguides.com/",
          target: "_blank",
        },
        {
          label: "ill",
          link: "https://sdu-kz.libguides.com/libservices/ill",
          target: "_blank",
        },
        {
          label: "booking",
          link: "https://sdu-kz.libguides.com/libservices/booking",
          target: "_blank",
        },
        {
          label: "appointments",
          link: "https://sdu-kz.libcal.com/appointments",
          target: "_blank",
        },
        {
          label: "subject",
          link: "https://sdu-kz.libguides.com/sl_profiles/page",
          target: "_blank",
        },
        {
          label: "digest",
          link: "https://sdu-kz.libguides.com/LibReview",
          target: "_blank",
        },
        {
          label: "moodle",
          link: "https://sdu-kz.libguides.com/libservices/moodle",
          target: "_blank",
        },
      ],
    },
  },
  {
    label: "research_consultations",
    link: "https://sdu-kz.libguides.com/research_consultations",
  },
  {
    label: "instructor_support",
    link: "https://sdu-kz.libguides.com/instructor_support",
  },
].map((link) => {
  const label = link.label;
  link.label = "links." + label;
  if (link.dropdown) {
    link.dropdown.links.forEach((d_link) => {
      d_link.label = link.label + "." + d_link.label;
    });
    link.label += ".title";
  }
  return link;
});

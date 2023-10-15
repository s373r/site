/** @jsx h */

import blog, { h } from "blog";

blog({
  author: "Dima Pristupa",

  avatar: "avatar.png",
  avatarClass: "rounded-full",

  title: "Dima Pristupa",
  description:
    "A Kyiv-based SDE in love with Rust, TypeScript, C++, Python, Haskell and GNU/Linux",

  links: [
    { title: "Email", url: "mailto:dima@pristupa.dev" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/dima-pristupa/" },
    { title: "GitHub", url: "https://github.com/s373r" },
    {
      title: "CV",
      url: "https://github.com/s373r",
      icon: <div className="font-bold">CV</div>,
    },
  ],

  // NOTE(DP): Remove when posts are added
  footer: <div />,

  // NOTE(DP): Custom style:
  style: `
/* Make avatar bigger */
a.bg-cover { width: 9rem; height: 9rem }
`,
});

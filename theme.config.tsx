import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  primaryHue: 260,
  primarySaturation: 90,
  sidebar: {
    autoCollapse: true,
    toggleButton: true,
  },
  logo: <img src="/images/Universe.png" width="45" />,
  chat: {
    link: "https://sh.rxserver.net/discord",
  },
  footer: {
    text: "The Universe Docs",
  },
};

export default config;

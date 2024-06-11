import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  primaryHue: 284,
  primarySaturation: 90,
  sidebar: {
    autoCollapse: true,
    toggleButton: true,
  },
  logo: <img src="/images/Universe.png" width="45" />,
  project: {
    link: "https://github.com/reality-exe/universe-docs"
  },
  footer: {
    text: "The Universe Docs",
  },
  docsRepositoryBase: "https://github.com/reality-exe/universe-docs/tree/main",
};

export default config;

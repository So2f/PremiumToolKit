import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  options: {
    storySort: {
      order: ["Overview", "Foundations", "Atoms", "Molecules"],
    },
  },

  backgrounds: {
    values: [
      {
        name: "light",
        value: "#ffffff",
      },
      {
        name: "dark",
        value: "#0D0D0D",
      },
    ],
  },

  grid: {
    gridOn: false,
    gap: 32,
    gutter: 80,
    maxWidth: 1072,
  },
  viewport: {
    viewports: {
      phone: {
        name: "Mobile (S)",
        styles: {
          width: "376px",
          height: "800px",
        },
        type: "mobile",
      },
      tablet: {
        name: "Tablet (M)",
        styles: {
          width: "768px",
          height: "800px",
        },
        type: "tablet",
      },
      smallDesktop: {
        name: "Small Desktop (L)",
        styles: {
          width: "1024px",
          height: "800px",
        },
        type: "desktop",
      },
      largeDesktop: {
        name: "Large Desktop (XL)",
        styles: {
          width: "1384px",
          height: "800px",
        },
        type: "desktop",
      },
    },
    defaultViewport: "largeDesktop",
  },
};

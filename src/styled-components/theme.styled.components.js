const theme = {
  light: {
    primaryColor: '#fbfbfb',
    secondaryColor: '#2b2b2b',
    tertiaryColor: '#8b8b8b',
  },

  dark: {
    primaryColor: '#2b2b2b',
    secondaryColor: '#fbfbfb',
    tertiaryColor: '#9d9d9d',
  },

  iconColor: '#b5b5b5',
  favColor: '#e9da83',

  fontSize: {
    xSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xLarge: '24px',
  },

  borderRadius: '6px',

  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xLarge: '30px',
  },

  fontWeight: {
    regular: 400,
    bold: 700,
  },

  zIndex: {
    modal: 1000,
    btnCard: 500,
    header: 9999,
  },

  position: {
    fixed: 'fixed',
    absolute: 'absolute',
    relative: 'relative',
    sticky: 'sticky',
    inherit: 'inherit',
  },

  flex: {
    display: `display: flex;`,
    column: `flex-direction: column;`,
    center: `
      justify-content: center;
      align-items: center;
    `,
    row: `flex-direction: row;`,
    alignItems: {
      center: 'center',
      flexStart: 'flex-start',
      flexEnd: 'flex-end',
      start: 'start',
    },
    justifyContent: {
      center: 'center',
      flexStart: 'flex-start',
      flexEnd: 'flex-end',
      spaceBetween: 'space-between',
      spaceAround: 'space-around',
      spaceEvenly: 'space-evenly',
    },
    alignSelf: {
      flexStart: 'flex-start',
    },
    wrap: `flex-wrap: wrap;`,
  },

  grid: {
    display: `display: grid;`,
    containerSmall: `grid-template-columns: 100%;`,
    containerMedium: `grid-template-columns: repeat(3, 25vw);`,
    containerLarge: `grid-template-columns: repeat(4, 20vw)`,
    containerXL: `grid-template-columns: repeat(4, 260px)`,
    autoFlow: 'row',
    smallAutoRows: `grid-auto-rows: 30vw;`,
    mediumAutoRows: `grid-auto-rows: 28vw;`,
    largeAutoRows: `grid-auto-rows: 380px;`,
    gapSmall: `gap: 1rem;`,
    gapMedium: `gap: 1.3rem;`,
    gapLarge: `gap: 1.85rem;`,
  },

  headings: {
    h1FontSize: '16px',
    h2FontSize: '14px',
    h3FontSize: '10px',
  },

  breakpoints: {
    maxXS: '500px',
    minSmall: '599px',
    maxSmall: '600px',
    minMedium: '760px',
    maxMedium: '761px',
    minLarge: '900px',
    maxLarge: '901px',
    minXL: '1200px',
    maxXL: '1201px',
    minXXL: '1299px',
    maxXXL: '1300px',
  },
};

export default theme;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Lato, sans-serif'],
      body: ['Lato, sans-serif'],
      mono: ['Roboto Mono'],
    },
    extend: {
      animation: {
        shake: 'shake 0.4s linear 4',
        'spin-fast': 'spin 0.5s linear infinite',
      },
      cursor: {
        help: 'help',
      },
      // each color category in a theme has a single base color with the variations acheived by adjusting lightness (dark and hover variants) and lightness and saturation for muted variants
      colors: {
        'gradient-start': '#AFD803',
        'gradient-mid': '#F2C94C',
        'gradient-end': '#E54033',
        'mango-theme': {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 52%)',
          },
          button: {
            DEFAULT: 'hsl(251, 41%, 48%)',
            hover: 'hsl(251, 41%, 38%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 37%)' },
          down: {
            DEFAULT: 'hsl(4, 93%, 60%)',
            dark: 'hsl(4, 93%, 50%)',
            muted: 'hsl(4, 53%, 50%)',
          },
          up: {
            DEFAULT: 'hsl(72, 97%, 41%)',
            dark: 'hsl(72, 97%, 31%)',
            muted: 'hsl(72, 57%, 31%)',
          },
          error: 'hsl(4, 93%, 60%)',
          success: 'hsl(72, 97%, 41%)',
          warning: 'hsl(33, 100%, 57%)',
          'bkg-1': 'hsl(256, 18%, 12%)',
          'bkg-2': 'hsl(256, 18%, 17%)',
          'bkg-3': 'hsl(256, 18%, 22%)',
          'bkg-4': 'hsl(256, 18%, 27%)',
          'fgd-1': 'hsl(253, 19%, 91%)',
          'fgd-2': 'hsl(253, 19%, 81%)',
          'fgd-3': 'hsl(253, 19%, 71%)',
          'fgd-4': 'hsl(253, 19%, 61%)',
        },
        'light-theme': {
          active: {
            DEFAULT: 'hsl(33, 100%, 57%)',
            dark: 'hsl(33, 100%, 47%)',
          },
          button: {
            DEFAULT: 'hsl(251, 41%, 56%)',
            hover: 'hsl(251, 41%, 46%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 37%)' },
          down: {
            DEFAULT: 'hsl(0, 67%, 48%)',
            dark: 'hsl(0, 67%, 38%)',
            muted: 'hsl(0, 27%, 38%)',
          },
          up: {
            DEFAULT: 'hsl(111, 47%, 53%)',
            dark: 'hsl(111, 47%, 43%)',
            muted: 'hsl(111, 7%, 43%)',
          },
          error: 'hsl(0, 67%, 48%)',
          success: 'hsl(111, 47%, 53%)',
          warning: 'hsl(33, 100%, 57%)',
          'bkg-1': 'hsl(0, 0%, 99%)',
          'bkg-2': 'hsl(0, 0%, 94%)',
          'bkg-3': 'hsl(0, 0%, 89%)',
          'bkg-4': 'hsl(0, 0%, 84%)',
          'fgd-1': 'hsl(188, 71%, 8%)',
          'fgd-2': 'hsl(188, 71%, 18%)',
          'fgd-3': 'hsl(188, 71%, 28%)',
          'fgd-4': 'hsl(188, 71%, 38%))',
        },
        'dark-theme': {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 52%)',
          },
          button: {
            DEFAULT: 'hsl(251, 41%, 48%)',
            hover: 'hsl(251, 41%, 38%)',
          },
          link: { DEFAULT: 'hsl(45, 86%, 62%)', hover: 'hsl(45, 86%, 42%)' },
          down: {
            DEFAULT: 'hsl(0, 67%, 48%)',
            dark: 'hsl(0, 67%, 38%)',
            muted: 'hsl(0, 27%, 38%)',
          },
          up: {
            DEFAULT: 'hsl(111, 47%, 53%)',
            dark: 'hsl(111, 47%, 43%)',
            muted: 'hsl(111, 7%, 43%)',
          },
          error: 'hsl(0, 67%, 48%)',
          success: 'hsl(111, 47%, 53%)',
          warning: 'hsl(45, 86%, 62%)',
          'bkg-1': 'hsl(240, 6%, 7%)',
          'bkg-2': 'hsl(240, 6%, 12%)',
          'bkg-3': 'hsl(240, 6%, 17%)',
          'bkg-4': 'hsl(240, 6%, 22%)',
          'fgd-1': 'hsl(0, 0%, 82%)',
          'fgd-2': 'hsl(0, 0%, 72%)',
          'fgd-3': 'hsl(0, 0%, 62%)',
          'fgd-4': 'hsl(0, 0%, 52%)',
        },
        'th-bkg-1': 'var(--bkg-1)',
        'th-bkg-2': 'var(--bkg-2)',
        'th-bkg-3': 'var(--bkg-3)',
        'th-bkg-4': 'var(--bkg-4)',
        'th-fgd-1': 'var(--fgd-1)',
        'th-fgd-2': 'var(--fgd-2)',
        'th-fgd-3': 'var(--fgd-3)',
        'th-fgd-4': 'var(--fgd-4)',
        'th-active': 'var(--active)',
        'th-active-dark': 'var(--active-dark)',
        'th-error': 'var(--error)',
        'th-success': 'var(--success)',
        'th-warning': 'var(--warning)',
        'th-down': 'var(--down)',
        'th-down-dark': 'var(--down-dark)',
        'th-down-muted': 'var(--down-muted)',
        'th-up': 'var(--up)',
        'th-up-dark': 'var(--up-dark)',
        'th-up-muted': 'var(--up-muted)',
        'th-link': 'var(--link)',
        'th-link-hover': 'var(--link-hover)',
        'th-button': 'var(--button)',
        'th-button-hover': 'var(--button-hover)',
        'th-warning': 'var(--warning)',
      },
      fontSize: {
        xxs: '.65rem',
      },
      keyframes: {
        shake: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '20%, 60%': {
            transform: 'rotate(6deg)',
          },
          '40%, 80%': {
            transform: 'rotate(-6deg)',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      backgroundImage: {
        'long-loss': "url('/share_images/bg-long-loss.png')",
        'long-profit': "url('/share_images/bg-long-profit.png')",
        'short-loss': "url('/share_images/bg-short-loss.png')",
        'short-profit': "url('/share_images/bg-short-profit.png')",
      },
      screens: {
        xl: '1600px',
      },
    },
  },
  // variants: {
  //   extend: {
  //     cursor: ['hover', 'focus', 'disabled'],
  //     opacity: ['disabled'],
  //     backgroundColor: ['disabled'],
  //     textColor: ['disabled'],
  //   },
  // },
  plugins: [],
}

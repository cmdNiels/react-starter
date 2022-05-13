module.exports = {
	purge: ["./src/**/*.jsx"],
	theme: {
		themeVariants: [],
		variants: {},
		extend: {
			colors: {
				main: {
					100: "#ECEFF4",
					200: "#E5E9F0",
					300: "#D8DEE9",
					400: "#4C566A",
					500: "#434C5E",
					600: "#3B4252",
					700: "#2E3440",
					800: "#292E39",
					900: "#000510"
				},
				uiwhite: "#ECEFF4",
				uiblue: "#5E81AC",
				uigreen: "#A3BE8C",
				uiorange: "#D08770",
				uired: "#BF616A",
				uiyellow: "#EBCB8B",
				uipurple: "#B48EAD",
			},
		},
	},
	future: {
    	removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
  	},
	variants: {},
	plugins: [],
};

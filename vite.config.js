// @ts-check
import reactPlugin from "vite-plugin-react";

/**
 * @type { import('vite').UserConfig }
 */
const config = {
	jsx: "react",
	plugins: [reactPlugin],
	silent: false,
};

export default config;

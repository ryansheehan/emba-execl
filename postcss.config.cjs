const autoprefixer = require('autoprefixer');
const postcssJitProps = require('postcss-jit-props');
const openProps = require('open-props');

const config = {
	plugins: [
		postcssJitProps(openProps),
		autoprefixer,
	]
};

module.exports = config;

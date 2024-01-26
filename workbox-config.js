module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,js,svg,mp4,png,jpg,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
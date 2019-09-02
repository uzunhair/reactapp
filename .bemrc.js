module.exports = {
	root: true,
	modules: {
		"bem-tools": {
			plugins: {
				create: {
					templateFolder: 'core/templates',
					techs: ["js", "index.js"],
					levels: {
						"src/component": {
							techs: ["js", 'index.js'],
						}
					}
				}
			}
		}
	}
};
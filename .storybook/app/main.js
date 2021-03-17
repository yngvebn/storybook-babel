module.exports = {
    stories: [
        '../../App/**/*.stories.@(tsx|mdx|ts)',
        '../../UI/**/*.stories.@(tsx|mdx|ts)',
    ],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-actions/preset',
        '@storybook/addon-knobs',
        '@storybook/addon-links',
        '@storybook/addon-backgrounds',
        '@storybook/addon-viewport',
    ],
    typescript: {
        check: true,
    },
    webpackFinal: async (config) => {
        config.module.strictExportPresence = false;
        config.stats = {
            warningsFilter: /export .* was not found in/
        }
        config.devServer = {
            ...config.devServer,
            clientLogLevel: 'error'
        };
        config.devtool = false;
        config.performance = {
            hints: false,
            maxEntrypointSize: 15120000,
            maxAssetSize: 15120000
        }
        return config;
    },
    core: {
      builder: 'webpack4',
    }
};


/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
    "stories": [
        "../resources/js/Stories/**/*.mdx",
        "../resources/js/Stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions"
    ],
    "framework": {
        "name": "@storybook/vue3-vite",
        "options": {}
    },
    staticDirs: [
        {from: '../public', to: '/'},
    ],
};
export default config;

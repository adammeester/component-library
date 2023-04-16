import type { StorybookConfig } from '@storybook/react-webpack5';
import { RuleSetRule } from 'webpack';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
// @ts-ignore
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: (config) => {
    config.module = config.module ?? {};
    config.module.rules = config.module.rules ?? [];

    config.plugins = [
      ...(config.plugins ?? []),
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin(),
    ];

    config.module.rules
      .filter(
        (rule) =>
          typeof rule === 'string' ||
          (rule.test && (rule.test as RegExp).test('test.css'))
      )
      .forEach((rule) => ((rule as RuleSetRule).exclude = /\.vanilla\.css$/i));

    config.module.rules = [
      {
        test: /\.vanilla\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
        ],
      },
      ...config.module.rules,
    ];
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;

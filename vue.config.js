const path = require('path');
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            [process.env.VUE_APP_API]: {
                target: process.env.VUE_APP_TAGET,
                chageOrigin: true,
                ws: false,
                secure: false,
                pathRewrite: {
                    [`^${process.env.VUE_APP_API}`]: ''
                }
            }
        }
    },
    transpileDependencies: true,
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import './src/styles/main.scss';`
            }
        }
    },
    chainWebpack: config => {
        const svg_sprite_loader = 'svg-sprite-loader';
        const svg = config.module.rule('svg');
        const icons = config.module.rule('icons');

        svg.uses.clear();
        svg.exclude.add(path.join(__dirname, 'src/assets')).end();

        icons.uses.clear();
        icons
            .test(/\.svg$/)
            .include.add(path.join(__dirname, 'src/assets')).end()
            .use(svg_sprite_loader)
            .loader(svg_sprite_loader)
            .options({
                symbolId: 'icon-[name]',
                include: ['./src/assets']
            }).end();
    }
});
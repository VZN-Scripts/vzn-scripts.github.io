import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

const config: DocsThemeConfig = {
    head: () => {
        const { asPath } = useRouter();
        const { frontMatter, title } = useConfig();
        const defaultDescription = "Documentation for VZN Scripts assets";
        const url = `https://docs.vzn-scripts.com/${asPath}`;

        const googleId = "G-XV58K6R2PX"

        const fullTitle = `${title} | VZN Scripts Docs`


        return (
            <>
                <title>{fullTitle}</title>
                <Script
                    strategy='lazyOnload'
                    src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
                />

                <Script id='' strategy='lazyOnload'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${googleId}');
                    `}
                </Script>
                <link rel="icon" type="image/png" href="/logo.png" />

                <meta httpEquiv="Content-Language" content="en" />
                <meta
                    name="description"
                    content={frontMatter.description || defaultDescription}
                />
                <meta
                    name="og:title"
                    content={fullTitle || "VZN Scripts Documentation"}
                />
                <meta name="og:url" content={url} />
                <meta
                    name="og:description"
                    content={frontMatter.description || defaultDescription}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </>
        );
    },
    logo: (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
            }}
        >
            <div
                style={{
                    width: "38px",
                    height: "38px",
                    background:
                        "url('https://avatars.githubusercontent.com/u/175264237?s=38') no-repeat left",
                    backgroundSize: "38px",
                    borderRadius: "50%",
                }}
            ></div>
            <span
                style={{
                    fontWeight: 550,
                    lineHeight: "38px",
                }}
            ></span>
            VZN Scripts
        </div>
    ),
    project: {
        link: "https://github.com/VZN-Scripts",
    },
    chat: {
        link: "https://discord.gg/wqzrVM3QYk",
    },
    docsRepositoryBase:
        "https://github.com/VZN-Scripts/vzn-scripts.github.io/blob/main",
    footer: {
        content: <>VZN-Scripts</>,
    },
    color: {
        hue: 203,
        saturation: 100
    },
    toc: {
        backToTop: true,
    },
    navigation: true
};

export default config;

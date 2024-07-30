import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
    head: () => {
        const { asPath } = useRouter();
        const { frontMatter, title } = useConfig();
        const defaultDescription = "Documentation for VZN Scripts assets";
        const url = `https://docs.vzn-scripts.com/${asPath}`;

        return (
            <>
                <link rel="icon" type="image/png" href="/logo.png" />

                <meta httpEquiv="Content-Language" content="en" />
                <meta
                    name="description"
                    content={frontMatter.description || defaultDescription}
                />
                <meta
                    name="og:title"
                    content={title || "VZN Scripts Documentation"}
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
    useNextSeoProps: () => {
        // credits for overextended for this function
        const { asPath } = useRouter();
        const arr = asPath.replace(/[-_]/g, " ").split("/");
        const category = (arr[1][0] !== "#" && arr[1]) || "VZN Scripts";
        const rawTitle = arr[arr.length - 1];
        const title =
            /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

        return {
            titleTemplate: `${title} | ${
                rawTitle === category
                    ? "Documentation"
                    : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
            }`,
        };
    },
    project: {
        link: "https://github.com/VZN-Scripts",
    },
    chat: {
        link: "https://discord.gg/wqzrVM3QYk",
    },
    docsRepositoryBase:
        "https://github.com/VZN-Scripts/vzn-scripts.github.io/blob/main",
    footer: {
        text: "VZN Scripts",
    },
    primaryHue: 203,
    primarySaturation: 100,
    toc: {
        backToTop: true,
    },
    navigation: true
};

export default config;

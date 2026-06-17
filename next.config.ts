import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        loader: "custom",
        loaderFile: "./image-loader.ts",
        qualities: [75, 100],
    },
};

export default nextConfig;

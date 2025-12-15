import type { NextConfig } from "next";

// ? condiguracion para dev
// const nextConfig: NextConfig = {
//   /* config options here */
// };

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // obligatorio para export
  }, 
  trailingSlash: true    // rutas /pagina/ → /pagina/index.html
}

export default nextConfig;

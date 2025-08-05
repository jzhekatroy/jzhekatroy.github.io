import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Включаем standalone режим для Docker
  output: 'standalone',
  
  // Экспериментальные функции
  experimental: {
    // Включаем инструментацию для Prisma
    instrumentationHook: true,
  },

  // Настройки для продакшена
  poweredByHeader: false,
  compress: true,

  // Настройки изображений
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;

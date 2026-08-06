import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: 5173,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      // Code splitting for better performance
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
      // Chunk size limit
      chunkSizeWarningLimit: 300,
    },
    // Define environment variables for runtime access
    define: {
      __APP_CONFIG__: {
        whatsappNumber: JSON.stringify(env.VITE_WHATSAPP_NUMBER || '919098667176'),
        siteName: JSON.stringify(env.VITE_SITE_NAME || 'DEMOCLEAN'),
        contactEmail: JSON.stringify(env.VITE_CONTACT_EMAIL || 'vishalandvishal70@gmail.com'),
        contactPhone: JSON.stringify(env.VITE_CONTACT_PHONE || '+91 9098667176'),
      },
    },
  };
});

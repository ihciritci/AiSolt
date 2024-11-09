import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.businessapp.app',
  appName: 'Business-App',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
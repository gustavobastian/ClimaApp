import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gabiot.climaapp',
  appName: 'ClimaApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

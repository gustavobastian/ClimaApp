npm install @capacitor/assets

To use this mode, create a single logo.png or icon.png with an optional logo-dark.png in assets/ (the tool also supports using SVG files as source images, substitue .svg as needed):

assets/
├── logo.png
└── logo-dark.png

npx capacitor-assets generate --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222' --splashBackgroundColor '#eeeeee' --splashBackgroundColorDark '#111111'

This mode provides full control over the assets used to generate icons and splash screens, but requires more source files. To use this mode, provide custom icons and splash screen source images as shown below:

assets/
├── icon-only.png
├── icon-foreground.png
├── icon-background.png
├── splash.png
└── splash-dark.png
assets/icon-only.(png|jpg) must be at least 1024×1024px
assets/icon-(foreground|background).(png|jpg) must be at least 1024×1024px
assets/splash[-dark].(png|jpg) must be at least 2732×2732px
To generate resources with all the default options, just run:

npx capacitor-assets generate

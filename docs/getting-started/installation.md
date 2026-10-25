---
title: Installation
order: 2
---

# Installation

Diabase is available for Linux, Windows, and macOS. Pre-built packages are published as GitHub releases, so you can download the right format for your platform and start using Diabase in minutes.

## Download

Go to the [GitHub Releases](https://github.com/jsenjoyer123/Diabase/releases) page and download the latest version for your operating system. Each release includes packages for all supported platforms.

## Linux

Linux users have three package formats to choose from. Pick the one that matches your distribution.

### AppImage (all distributions)

The AppImage is a self-contained executable that works on any Linux distribution without installation. This is the simplest option if you are not sure which format to use.

1. Download the `.AppImage` file from the releases page.
2. Make it executable:
   ```bash
   chmod +x Diabase-*.AppImage
   ```
3. Run it:
   ```bash
   ./Diabase-*.AppImage
   ```

You can move the AppImage to any directory you like, such as `~/Applications/` or `/opt/`. To integrate it with your desktop environment (application menu, file associations), consider using a tool like [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher).

### Debian / Ubuntu (.deb)

For Debian-based distributions (Debian, Ubuntu, Linux Mint, Pop!_OS, elementary OS, etc.):

1. Download the `.deb` file from the releases page.
2. Install it with `dpkg`:
   ```bash
   sudo dpkg -i diabase_*.deb
   ```
3. If there are missing dependencies, fix them with:
   ```bash
   sudo apt-get install -f
   ```
4. Launch Diabase from your application menu or run `diabase` from the terminal.

To uninstall:
```bash
sudo apt-get remove diabase
```

### Fedora / openSUSE (.rpm)

For RPM-based distributions (Fedora, openSUSE, CentOS, RHEL, etc.):

1. Download the `.rpm` file from the releases page.
2. Install it:
   ```bash
   # Fedora
   sudo dnf install diabase-*.rpm

   # openSUSE
   sudo zypper install diabase-*.rpm
   ```
3. Launch Diabase from your application menu or run `diabase` from the terminal.

To uninstall:
```bash
# Fedora
sudo dnf remove diabase

# openSUSE
sudo zypper remove diabase
```

## Windows

1. Download the `.exe` installer from the releases page.
2. Run the installer. Windows may show a SmartScreen warning because the app is not signed with a paid code-signing certificate. Click "More info" and then "Run anyway" to proceed.
3. Follow the NSIS installer steps. By default, Diabase installs to `C:\Users\<your-username>\AppData\Local\Programs\Diabase\`.
4. Once installed, Diabase appears in your Start menu. You can also pin it to your taskbar.

To uninstall, use "Add or remove programs" in Windows Settings, or run the uninstaller from the Diabase installation directory.

## macOS

1. Download the `.dmg` file from the releases page.
2. Open the DMG and drag Diabase to your Applications folder.
3. On first launch, macOS may block the app because it is not signed with an Apple Developer certificate. To open it:
   - Right-click (or Control-click) the Diabase icon in Applications.
   - Select "Open" from the context menu.
   - Click "Open" in the dialog that appears.
   - macOS remembers this choice, so you only need to do it once.

To uninstall, drag Diabase from Applications to the Trash.

## Auto-updater

Diabase includes a built-in auto-updater powered by `tauri-plugin-updater`. When a new version is available on GitHub Releases, the app detects it and offers to download and install the update.

- **Checking for updates** happens automatically when the app starts, or you can trigger it manually from Settings.
- **Download and install** -- When an update is found, Diabase downloads it in the background. Once the download completes, you are prompted to restart the app to apply the update.
- **Automatic updates** are enabled by default. You can disable them in Settings if you prefer to update manually.

The auto-updater works with all package formats: AppImage on Linux, the NSIS installer on Windows, and the DMG on macOS.

## Prerequisites for development

If you want to run Diabase from source rather than using a pre-built package, you need:

- **Node.js** 18 or later
- **npm** (comes with Node.js)
- **Git** (required for GitHub sync features)

Clone the repository and start the development server:

```bash
git clone https://github.com/jsenjoyer123/Diabase.git
cd Diabase/desktop
npm install
npm run dev
```

This starts both the Next.js dev server (on port 3456) and the Tauri window simultaneously.

## Building from source

To build distributable packages yourself:

```bash
cd Diabase/desktop
npm run build
```

Build outputs go to `desktop/dist/`. The build process generates packages for your current platform:

| Platform | Output formats |
|---|---|
| Linux | AppImage, .deb, .rpm |
| Windows | .exe (NSIS installer) |
| macOS | .dmg |

## Mobile app

The mobile app (Android and iOS) is built with Expo and React Native. It is currently a work in progress -- all features ship to desktop first, then come to mobile.

To run the mobile app in development:

```bash
cd Diabase/phone
npm install
npx expo start
```

From the Expo dev server, you can open the app on an Android device or emulator (`npx expo start --android`) or an iOS simulator (`npx expo start --ios`).

## Verifying your installation

After installing, launch Diabase. If this is your first time running the app, you will see the setup wizard, which walks you through creating your first vault. If the app starts and shows the wizard, your installation is working correctly.

If you run into issues, check the [GitHub Issues](https://github.com/jsenjoyer123/Diabase/issues) page or open a new issue with details about your platform and the error you encountered.

## Next steps

Once Diabase is installed, head to the [Quickstart](quickstart.md) guide to create your first vault and start writing.

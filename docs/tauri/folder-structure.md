# Tauri Folder Structure

Understanding the anatomy of a Tauri project and how files are organized.

## Overview

A typical Tauri project combines a frontend web application with a Rust backend, creating a hybrid structure that bridges web and native development.

## Root Directory Structure

```
my-tauri-app/
├── src/                    # Frontend source code
├── src-tauri/             # Tauri/Rust backend
├── public/                # Static assets
├── dist/                  # Built frontend (generated)
├── node_modules/          # Node.js dependencies
├── package.json           # Frontend dependencies & scripts
├── package-lock.json      # Dependency lock file
├── index.html            # Main HTML entry point
├── vite.config.js        # Build tool configuration
└── README.md             # Project documentation
```

## Frontend Structure (`src/`)

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   └── Button.jsx
├── pages/               # Application pages/routes
│   ├── Home.jsx
│   ├── Settings.jsx
│   └── About.jsx
├── utils/               # Utility functions
│   ├── api.js
│   └── helpers.js
├── styles/              # CSS/styling files
│   ├── main.css
│   └── components.css
├── assets/              # Images, fonts, etc.
│   ├── images/
│   └── fonts/
├── hooks/               # Custom React hooks (if using React)
├── context/             # React context providers
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## Tauri Backend Structure (`src-tauri/`)

```
src-tauri/
├── src/                 # Rust source code
│   ├── main.rs         # Main Rust entry point
│   ├── lib.rs          # Library definitions
│   ├── commands.rs     # Tauri command handlers
│   ├── menu.rs         # Application menu definitions
│   ├── setup.rs        # App initialization logic
│   └── utils.rs        # Rust utility functions
├── Cargo.toml          # Rust dependencies & metadata
├── Cargo.lock          # Rust dependency lock file
├── tauri.conf.json     # Tauri configuration
├── build.rs            # Build script (optional)
├── icons/              # Application icons
│   ├── 32x32.png
│   ├── 128x128.png
│   ├── icon.ico        # Windows icon
│   └── icon.icns       # macOS icon
└── target/             # Rust build output (generated)
    ├── debug/          # Debug builds
    └── release/        # Production builds
```

## Key Configuration Files

### `tauri.conf.json`
Main Tauri configuration file controlling:
- App metadata (name, version, description)
- Window properties (size, resizable, etc.)
- Security settings (CSP, allowed origins)
- Build settings (targets, bundle formats)
- Plugin configurations

```json
{
  "package": {
    "productName": "My Tauri App",
    "version": "1.0.0"
  },
  "tauri": {
    "allowlist": {
      "all": false,
      "fs": {
        "all": true
      }
    },
    "windows": [{
      "title": "My Tauri App",
      "width": 800,
      "height": 600
    }]
  }
}
```

### `Cargo.toml` (Rust Dependencies)
```toml
[package]
name = "my-tauri-app"
version = "1.0.0"
edition = "2021"

[build-dependencies]
tauri-build = { version = "1.0", features = [] }

[dependencies]
serde_json = "1.0"
serde = { version = "1.0", features = ["derive"] }
tauri = { version = "1.0", features = ["api-all"] }
```

### `package.json` (Frontend Dependencies)
```json
{
  "name": "my-tauri-app",
  "scripts": {
    "tauri": "tauri",
    "tauri:dev": "tauri dev",
    "tauri:build": "tauri build",
    "dev": "vite",
    "build": "vite build"
  },
  "devDependencies": {
    "@tauri-apps/cli": "^1.0.0"
  }
}
```

## Generated Directories

### `dist/` - Frontend Build Output
Contains the compiled frontend code that Tauri serves:
```
dist/
├── index.html          # Processed HTML
├── assets/             # Bundled CSS/JS
│   ├── index.css
│   └── index.js
└── favicon.ico         # Static assets
```

### `src-tauri/target/` - Rust Build Output
```
target/
├── debug/              # Development builds
│   └── my-tauri-app    # Debug executable
└── release/            # Production builds
    ├── my-tauri-app    # Release executable
    └── bundle/         # Platform packages
        ├── dmg/        # macOS disk image
        ├── deb/        # Linux package
        └── msi/        # Windows installer
```

## Project Types & Variations

### React + Tauri
```
src/
├── components/
├── hooks/
├── context/
├── App.jsx
└── main.jsx
```

### Vue + Tauri
```
src/
├── components/
├── views/
├── router/
├── store/
├── App.vue
└── main.js
```

### Vanilla JS + Tauri
```
src/
├── js/
├── css/
├── assets/
└── main.js
```

### SvelteKit + Tauri
```
src/
├── routes/
├── lib/
├── app.html
└── app.js
```

## Development vs Production

### Development Structure
- Source files remain separate
- Hot reload watches `src/` and `src-tauri/src/`
- Rust code compiles in debug mode
- Frontend served by development server

### Production Structure
- Frontend built into `dist/`
- Rust compiled with optimizations
- Single executable bundles everything
- Platform-specific installers created

## Best Practices

### File Organization
```
src/
├── features/           # Feature-based organization
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── api.js
│   └── dashboard/
│       ├── components/
│       └── utils.js
└── shared/             # Shared utilities
    ├── components/
    ├── hooks/
    └── utils/
```

### Rust Backend Organization
```
src-tauri/src/
├── commands/           # Tauri commands by feature
│   ├── auth.rs
│   ├── file_system.rs
│   └── database.rs
├── utils/              # Shared utilities
│   ├── crypto.rs
│   └── validation.rs
├── models/             # Data structures
│   ├── user.rs
│   └── settings.rs
└── services/           # Business logic
    ├── auth_service.rs
    └── file_service.rs
```

## Common Patterns

### Environment-Specific Configs
```
src-tauri/
├── tauri.conf.json         # Base config
├── tauri.dev.conf.json     # Development overrides
└── tauri.prod.conf.json    # Production overrides
```

### Multi-Platform Assets
```
src-tauri/icons/
├── icon.png              # Base icon
├── Square30x30Logo.png   # Windows
├── Square44x44Logo.png   # Windows
├── icon.ico              # Windows
├── icon.icns             # macOS
└── icon@2x.png           # macOS retina
```

## Integration Points

### Frontend ↔ Backend Communication
- **Commands**: Frontend calls Rust functions
- **Events**: Backend emits events to frontend
- **File System**: Shared access through Tauri APIs
- **Configuration**: Shared settings in `tauri.conf.json`

### Build Integration
- Frontend builds first (`npm run build`)
- Tauri bundles frontend into Rust binary
- Platform-specific packaging
- Code signing and notarization (production)

## Next Steps

- Learn about [Basic Commands](./basic-commands.md) for development workflow
- Explore Tauri APIs for frontend-backend communication
- Configure `tauri.conf.json` for your specific needs
- Set up proper folder structure based on your frontend framework
# Tauri Basic Commands

Essential commands for Tauri development workflow.

## Development Commands

### Start Development Server
```bash
npm run tauri dev
```
Starts the development server with hot reload enabled. This command:
- Builds the frontend in development mode
- Launches the Tauri app window
- Enables hot reload for both frontend and backend changes
- Shows console logs and error messages

### Build for Production
```bash
npm run tauri build
```
Creates a production-ready build of your Tauri app:
- Optimizes frontend assets
- Compiles Rust backend for target platform
- Creates platform-specific installer/executable
- Output location: `src-tauri/target/release/`

### Build for Development (Debug)
```bash
npm run tauri build --debug
```
Creates a debug build with:
- Debug symbols included
- Faster compilation time
- Larger file size
- Better error messages

## Setup and Initialization

### Create New Tauri Project
```bash
# Using npm
npm create tauri-app@latest

# Using yarn
yarn create tauri-app

# Using pnpm
pnpm create tauri-app@latest
```

### Add Tauri to Existing Project
```bash
npm install --save-dev @tauri-apps/cli
npm run tauri init
```

## Platform-Specific Builds

### Build for Specific Target
```bash
# Windows
npm run tauri build --target x86_64-pc-windows-msvc

# macOS Intel
npm run tauri build --target x86_64-apple-darwin

# macOS Apple Silicon
npm run tauri build --target aarch64-apple-darwin

# Linux
npm run tauri build --target x86_64-unknown-linux-gnu
```

## Error Checking and Debugging

### Check Tauri Info
```bash
npm run tauri info
```
Displays:
- Tauri version
- Operating system details
- Rust version and toolchain
- Node.js version
- Frontend framework details
- WebView version

### Validate Configuration
```bash
npm run tauri dev --verbose
```
Shows detailed logs for debugging configuration issues.

### Check Rust Setup
```bash
rustc --version
cargo --version
```

### Verify Prerequisites
```bash
# Check if Rust is installed
rustup --version

# Update Rust toolchain
rustup update

# Install required targets
rustup target add x86_64-pc-windows-msvc  # Windows
rustup target add x86_64-apple-darwin     # macOS Intel
rustup target add aarch64-apple-darwin    # macOS M1/M2
```

## Common Troubleshooting Commands

### Clear Build Cache
```bash
# Clear Tauri cache
rm -rf src-tauri/target

# Clear npm cache
npm cache clean --force

# Rebuild everything
npm install
npm run tauri build
```

### Fix WebView Issues
```bash
# Update WebView2 (Windows)
# Download from Microsoft WebView2 page

# macOS/Linux - usually handled automatically
npm run tauri dev --verbose
```

### Permission Issues (macOS)
```bash
# Allow unsigned builds for development
sudo spctl --master-disable

# Re-enable after development
sudo spctl --master-enable
```

## Development Workflow

### Typical Development Cycle
```bash
# 1. Start development
npm run tauri dev

# 2. Make changes to frontend/backend
# 3. Hot reload automatically updates

# 4. Test production build
npm run tauri build --debug

# 5. Final production build
npm run tauri build
```

### Frontend Development
```bash
# Frontend only (useful for UI development)
npm run dev

# Then separately run Tauri
npm run tauri dev
```

## Useful Flags

### Development Flags
```bash
# Verbose output
npm run tauri dev --verbose

# Specific port
npm run tauri dev -- --port 3001

# Different config
npm run tauri dev --config tauri.dev.conf.json
```

### Build Flags
```bash
# Debug build
npm run tauri build --debug

# Specific bundles
npm run tauri build --bundles deb,appimage  # Linux
npm run tauri build --bundles dmg,app       # macOS
npm run tauri build --bundles msi,nsis      # Windows
```

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run tauri dev` | Start development server |
| `npm run tauri build` | Production build |
| `npm run tauri info` | System information |
| `npm run tauri init` | Initialize Tauri in existing project |
| `rustup update` | Update Rust toolchain |
| `cargo clean` | Clear Rust build cache |

## Next Steps

- Check out [Folder Structure](./folder-structure.md) to understand project organization
- Learn about Tauri configuration in `tauri.conf.json`
- Explore Tauri API documentation for frontend-backend communication
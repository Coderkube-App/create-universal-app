# 🚀 create-js-universal-app

An interactive, high-performance CLI scaffolding tool to spin up modern, pre-configured frontend projects in seconds.

Pick your platform, name your project, and start coding — no boilerplate headaches.

---

## 🎬 Demo

<p align="center">
  <img src="https://raw.githubusercontent.com/Coderkube-App/create-universal-app/main/assets/cli_demo.gif" alt="CLI Demo" width="800" />
</p>

> 🖥️ [**View Interactive Demo**](https://coderkube-app.github.io/create-universal-app/assets/cli_demo.html) — open the animated terminal simulation in your browser.

---

## ✨ Supported Platforms

| Platform            | Template Key | Bundler          | Description                           |
| ------------------- | ------------ | ---------------- | ------------------------------------- |
| **React.js (Bare)** | `react-bare` | Webpack + Babel  | Standard production bundler setup     |
| **React.js (Vite)** | `react-vite` | Vite             | Ultra-fast HMR development            |
| **Next.js**         | `nextjs`     | Next.js built-in | SSR & App Router framework            |
| **Vue.js**          | `vue`        | Vite             | Composition API with SFC support      |
| **Angular**         | `angular`    | Angular CLI      | Enterprise-ready TypeScript framework |
| **Vanilla JS**      | `vanilla`    | Vite             | Pure JavaScript, HTML & CSS           |

---

## 🚀 Quick Start

Run the scaffolder anywhere using `npx` (no installation required):

```bash
npx create-js-universal-app
```

You will be guided through a simple interactive prompt:

1. **Enter your project name** (e.g., `my-cool-app`).
2. **Select your framework/platform** from the 6 options above.
3. The CLI copies the template, customizes `package.json`, and outputs the starting commands.

---

## 🛠️ Local Development & Testing

If you are developing this CLI locally or customizing its templates:

### 1. Direct Execution

Test the script immediately from the package root:

```bash
node ./bin/index.js
```

### 2. Global Link Testing

Simulate a full `npx` run by linking the package executable to your system globally:

```bash
# Link the CLI
npm link

# Run it from any folder on your machine
create-js-universal-app
```

_To remove the global link when you are done testing:_

```bash
npm unlink -g create-js-universal-app
```

---

## 📂 Project Structure

```text
create-js-universal-app/
├── bin/
│   └── index.js              # Interactive CLI entrypoint
├── templates/
│   ├── react-bare/            # React + Webpack + Babel
│   ├── react-vite/            # React + Vite
│   ├── nextjs/                # Next.js (App Router)
│   ├── vue/                   # Vue 3 + Vite
│   ├── angular/               # Angular 18 (Standalone)
│   └── vanilla/               # Vanilla JS + Vite
├── package.json
└── README.md
```

---

## 📂 Adding Custom Templates

You can easily extend the CLI to support new frameworks (e.g., Svelte, Astro, Solid):

1. Add your pre-configured boilerplate folder under `templates/` (e.g., `templates/svelte`).
2. Open `bin/index.js` and add an entry in the `options` array:
   ```javascript
   { value: 'svelte', label: 'Svelte (Vite)', hint: 'Compiler-first UI framework' }
   ```
3. Add the label to the `platformLabels` object:
   ```javascript
   'svelte': 'Svelte',
   ```
4. Republish the package to npm.

## 📅 Maintenance & Update Schedule

To keep this scaffolding tool robust, secure, and modern, follow this recommended maintenance schedule:

### 🔄 Every 3 Months (Quarterly Checkup)

- **Dependency Audit**: Run `npm audit` inside the root folder and in each template directory to patch security vulnerabilities.
- **Minor Upgrades**: Upgrade minor versions of packages inside the template `package.json` files (e.g., updating Vite or React minor patches).

### 🚀 Every 6 Months (Major Framework Alignment)

- **Major Upgrades**: Check for major releases of Next.js, Angular, React, and Vue.
- **Template Updates**: Update the code inside the corresponding templates if any APIs are deprecated by new framework versions.

---

## 📄 License

MIT

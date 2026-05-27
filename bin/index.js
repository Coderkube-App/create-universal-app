#!/usr/bin/env node

import { intro, outro, text, select, spinner } from '@clack/prompts';
import pc from 'picocolors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
import minimist from 'minimist';

// Resolve directory paths for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatesDir = path.resolve(__dirname, '../templates');

async function main() {
  // Parse command-line args (e.g. if name is provided: npx create-universal-app my-app)
  const argv = minimist(process.argv.slice(2));
  let defaultProjectName = argv._[0] || 'my-universal-project';

  console.log(''); // Spacing
  intro(pc.bgCyan(pc.black(' 🚀 UNIVERSAL SCAFFOLDER ')));

  // 1. Prompt for Project Name
  const projectName = await text({
    message: 'What is your project name?',
    placeholder: defaultProjectName,
    validate(value) {
      if (value.trim().length === 0) return 'Project name is required!';
      if (/[<>:"/\\|?*]/.test(value)) return 'Project name contains invalid characters!';
    },
  });

  // Handle Ctrl+C / Cancel
  if (typeof projectName === 'symbol') {
    outro(pc.yellow('Scaffolding cancelled.'));
    process.exit(0);
  }

  const cleanProjectName = projectName.trim();

  // 2. Prompt for Platform / Framework Choice
  const platform = await select({
    message: 'Select your target framework / platform:',
    options: [
      { value: 'react-bare', label: 'React.js (Bare / Webpack)', hint: 'Standard production bundler with Babel' },
      { value: 'react-vite', label: 'React.js (Vite)', hint: 'Ultra-fast hot-reloading development' },
      { value: 'nextjs', label: 'Next.js', hint: 'React framework with SSR & App Router' },
      { value: 'vue', label: 'Vue.js (Vite)', hint: 'Performant, modular framework' },
      { value: 'angular', label: 'Angular', hint: 'Enterprise-ready TypeScript framework' },
      { value: 'vanilla', label: 'Vanilla JS', hint: 'Pure JavaScript, HTML & CSS' },
    ],
  });

  if (typeof platform === 'symbol') {
    outro(pc.yellow('Scaffolding cancelled.'));
    process.exit(0);
  }

  // Friendly display names for terminal output
  const platformLabels = {
    'react-bare': 'React (Webpack)',
    'react-vite': 'React (Vite)',
    'nextjs': 'Next.js',
    'vue': 'Vue.js',
    'angular': 'Angular',
    'vanilla': 'Vanilla JS',
  };

  const targetDir = path.resolve(process.cwd(), cleanProjectName);
  const templatePath = path.resolve(templatesDir, platform);

  // 3. Clone & Customize Project
  const s = spinner();
  s.start(pc.cyan(`Scaffolding your ${platformLabels[platform]} app...`));

  try {
    // Check if template folder exists
    if (!await fs.pathExists(templatePath)) {
      throw new Error(`Template for "${platform}" not found in CLI bundle!`);
    }

    // Ensure target folder is empty or doesn't exist
    if (await fs.pathExists(targetDir) && (await fs.readdir(targetDir)).length > 0) {
      throw new Error(`Target directory "${cleanProjectName}" is not empty!`);
    }

    // Copy template directory
    await fs.copy(templatePath, targetDir);

    // Customize package.json with the new project name
    const pkgPath = path.join(targetDir, 'package.json');
    if (await fs.pathExists(pkgPath)) {
      const pkg = await fs.readJson(pkgPath);
      pkg.name = cleanProjectName;
      await fs.writeJson(pkgPath, pkg, { spaces: 2 });
    }

    s.stop(pc.green(`${platformLabels[platform]} project created successfully!`));

    // 4. Output Success & Next Steps
    const devCommand = platform === 'react-bare' ? 'npm start' : 'npm run dev';

    console.log('');
    outro(pc.green('✨ Scaffolding complete! Run the following commands to get started:'));
    console.log('');
    console.log(pc.bold(pc.white(`   cd ${cleanProjectName}`)));
    console.log(pc.bold(pc.white('   npm install')));
    console.log(pc.bold(pc.white(`   ${devCommand}`)));
    console.log('');

  } catch (error) {
    s.stop(pc.red('Failed to scaffold project.'));
    console.error(pc.red(`\nError: ${error.message}`));
    outro(pc.red('Scaffolding failed.'));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

#!/usr/bin/env node

/**
 * MUI to JUNO Import Migration Script
 *
 * This script helps migrate direct @material-ui/* imports to use
 * @ringcentral/juno's MUI re-exports with "Mui" prefix.
 *
 * Usage:
 *   node scripts/migrate-mui-imports.js <project-directory> [options]
 *
 * Options:
 *   --dry-run     Preview changes without modifying files
 *   --no-backup   Don't create .bak backup files (use with caution)
 *   --verbose     Show detailed output for each file
 *
 * Examples:
 *   # Preview changes (recommended first step)
 *   node scripts/migrate-mui-imports.js /path/to/fiji-project --dry-run
 *
 *   # Run migration with backups
 *   node scripts/migrate-mui-imports.js /path/to/fiji-project
 *
 *   # Run without backups (if using version control)
 *   node scripts/migrate-mui-imports.js /path/to/fiji-project --no-backup
 *
 * What it does:
 *   - Finds all .ts and .tsx files in the specified directory
 *   - Replaces @material-ui/* imports with @ringcentral/juno imports
 *   - Uses Mui prefix for components (e.g., Fab → MuiFab)
 *   - Uses mui prefix for utilities (e.g., darken → muiDarken)
 *
 * Supported migrations:
 *   @material-ui/core: Fab, Collapse, Slide, ListItem, TextField, etc.
 *   @material-ui/lab: Autocomplete
 *   @material-ui/core/styles: darken, lighten, alpha, makeStyles, etc.
 *   @material-ui/core/useMediaQuery
 *   @material-ui/styles: StylesProvider, jssPreset, etc.
 */

const fs = require('fs');
const path = require('path');

// ============================================
// Migration Mapping Configuration
// ============================================

// Components: original name → Mui prefixed name
const COMPONENT_MAPPINGS = {
  // @material-ui/core
  Fab: 'MuiFab',
  Collapse: 'MuiCollapse',
  Slide: 'MuiSlide',
  ListItem: 'MuiListItem',
  ListItemText: 'MuiListItemText',
  ListItemIcon: 'MuiListItemIcon',
  TextField: 'MuiTextField',
  Input: 'MuiInput',
  InputLabel: 'MuiInputLabel',
  InputAdornment: 'MuiInputAdornment',
  FormHelperText: 'MuiFormHelperText',
  CircularProgress: 'MuiCircularProgress',
  CardContent: 'MuiCardContent',
  // @material-ui/lab
  Autocomplete: 'MuiAutocomplete',
};

// Type exports mapping
const TYPE_MAPPINGS = {
  FabProps: 'MuiFabProps',
  CollapseProps: 'MuiCollapseProps',
  SlideProps: 'MuiSlideProps',
  ListItemProps: 'MuiListItemProps',
  ListItemTextProps: 'MuiListItemTextProps',
  ListItemIconProps: 'MuiListItemIconProps',
  TextFieldProps: 'MuiTextFieldProps',
  InputProps: 'MuiInputProps',
  InputLabelProps: 'MuiInputLabelProps',
  InputAdornmentProps: 'MuiInputAdornmentProps',
  FormHelperTextProps: 'MuiFormHelperTextProps',
  CircularProgressProps: 'MuiCircularProgressProps',
  CardContentProps: 'MuiCardContentProps',
  AutocompleteProps: 'MuiAutocompleteProps',
};

// Hooks: original name → Mui prefixed name
const HOOK_MAPPINGS = {
  useMediaQuery: 'MuiUseMediaQuery',
  useIsFocusVisible: 'MuiUseIsFocusVisible',
};

// Style/Theme APIs: original name → Mui prefixed name
const STYLE_MAPPINGS = {
  createTheme: 'MuiCreateTheme',
  useTheme: 'MuiUseTheme',
  makeStyles: 'MuiMakeStyles',
  withStyles: 'MuiWithStyles',
  StylesProvider: 'MuiStylesProvider',
  createGenerateClassName: 'MuiCreateGenerateClassName',
  jssPreset: 'MuiJssPreset',
};

// Color utilities: original name → mui prefixed name (lowercase)
const COLOR_UTIL_MAPPINGS = {
  darken: 'muiDarken',
  lighten: 'muiLighten',
  alpha: 'muiAlpha',
  fade: 'muiFade',
  emphasize: 'muiEmphasize',
  getContrastRatio: 'muiGetContrastRatio',
  getLuminance: 'muiGetLuminance',
  hexToRgb: 'muiHexToRgb',
  rgbToHex: 'muiRgbToHex',
  hslToRgb: 'muiHslToRgb',
  decomposeColor: 'muiDecomposeColor',
  recomposeColor: 'muiRecomposeColor',
};

// Theme type exports
const THEME_TYPE_MAPPINGS = {
  Theme: 'MuiTheme',
  ThemeOptions: 'MuiThemeOptions',
};

// Transition constants
const TRANSITION_MAPPINGS = {
  duration: 'MuiTransitionDuration',
  easing: 'MuiTransitionEasing',
};

// All mappings combined for easy lookup
const ALL_MAPPINGS = {
  ...COMPONENT_MAPPINGS,
  ...TYPE_MAPPINGS,
  ...HOOK_MAPPINGS,
  ...STYLE_MAPPINGS,
  ...COLOR_UTIL_MAPPINGS,
  ...THEME_TYPE_MAPPINGS,
  ...TRANSITION_MAPPINGS,
};

// ============================================
// CLI Argument Parsing
// ============================================

const args = process.argv.slice(2);
const projectDir = args.find((arg) => !arg.startsWith('--'));
const dryRun = args.includes('--dry-run');
const noBackup = args.includes('--no-backup');
const verbose = args.includes('--verbose');

if (!projectDir) {
  console.error(
    'Usage: node migrate-mui-imports.js <project-directory> [--dry-run] [--no-backup] [--verbose]',
  );
  process.exit(1);
}

const resolvedDir = path.resolve(projectDir);
if (!fs.existsSync(resolvedDir)) {
  console.error(`Error: Directory not found: ${resolvedDir}`);
  process.exit(1);
}

// ============================================
// File Discovery
// ============================================

function findTsFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip node_modules and hidden directories
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) {
        continue;
      }
      findTsFiles(fullPath, files);
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

// ============================================
// Import Pattern Matching
// ============================================

// Patterns to match @material-ui imports
const MUI_IMPORT_PATTERNS = [
  // import { X, Y } from '@material-ui/core'
  /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/core['"]/g,
  // import { X } from '@material-ui/core/ComponentName'
  /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/core\/([^'"]+)['"]/g,
  // import X from '@material-ui/core/ComponentName'
  /import\s+(\w+)\s+from\s+['"]@material-ui\/core\/([^'"]+)['"]/g,
  // import { X } from '@material-ui/lab'
  /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/lab['"]/g,
  // import { X } from '@material-ui/lab/ComponentName'
  /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/lab\/([^'"]+)['"]/g,
  // import X from '@material-ui/lab/ComponentName'
  /import\s+(\w+)\s+from\s+['"]@material-ui\/lab\/([^'"]+)['"]/g,
  // import { X } from '@material-ui/styles'
  /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/styles['"]/g,
  // import { X } from '@material-ui/core/styles'
  /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/core\/styles['"]/g,
];

// ============================================
// Migration Logic
// ============================================

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;
  const changes = [];

  // Track imports to add to @ringcentral/juno
  const junoImports = new Set();
  const linesToRemove = [];

  // Process each line
  const lines = content.split('\n');
  const newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if line contains @material-ui import
    if (line.includes('@material-ui')) {
      const migrated = migrateLine(line, junoImports);
      if (migrated.changed) {
        changes.push({ line: i + 1, original: line, migrated: migrated.line });
        if (migrated.remove) {
          // Line should be removed (imports moved to juno)
          continue;
        }
        newLines.push(migrated.line);
      } else {
        newLines.push(line);
      }
    } else {
      newLines.push(line);
    }
  }

  // If we have juno imports to add, find existing juno import or add new one
  if (junoImports.size > 0) {
    const junoImportLine = `import { ${Array.from(junoImports)
      .sort()
      .join(', ')} } from '@ringcentral/juno';`;

    // Find existing @ringcentral/juno import
    let junoImportIndex = newLines.findIndex(
      (line) =>
        line.includes("from '@ringcentral/juno'") ||
        line.includes('from "@ringcentral/juno"'),
    );

    if (junoImportIndex !== -1) {
      // Merge with existing import
      const existingLine = newLines[junoImportIndex];
      const existingImports = extractImportsFromLine(existingLine);
      const allImports = new Set([...existingImports, ...junoImports]);
      newLines[junoImportIndex] = `import { ${Array.from(allImports)
        .sort()
        .join(', ')} } from '@ringcentral/juno';`;
    } else {
      // Find first import line and add after it
      const firstImportIndex = newLines.findIndex((line) =>
        line.startsWith('import '),
      );
      if (firstImportIndex !== -1) {
        newLines.splice(firstImportIndex + 1, 0, junoImportLine);
      } else {
        newLines.unshift(junoImportLine);
      }
    }
  }

  const newContent = newLines.join('\n');

  return {
    changed: newContent !== originalContent,
    content: newContent,
    changes,
  };
}

function extractImportsFromLine(line) {
  const match = line.match(/import\s+\{([^}]+)\}/);
  if (match) {
    return match[1]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function migrateLine(line, junoImports) {
  // Check for various @material-ui patterns
  let changed = false;
  let newLine = line;

  // Pattern: import { X, Y } from '@material-ui/core'
  const coreImportMatch = line.match(
    /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/core['"]/,
  );
  if (coreImportMatch) {
    const imports = coreImportMatch[1]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const migratable = [];
    const nonMigratable = [];

    for (const imp of imports) {
      // Handle "X as Y" syntax
      const [name, alias] = imp.split(/\s+as\s+/).map((s) => s.trim());
      if (ALL_MAPPINGS[name]) {
        const newName = ALL_MAPPINGS[name];
        junoImports.add(alias ? `${newName} as ${alias}` : newName);
        migratable.push(name);
      } else {
        nonMigratable.push(imp);
      }
    }

    if (migratable.length > 0) {
      changed = true;
      if (nonMigratable.length === 0) {
        return { changed: true, remove: true, line: '' };
      }
      newLine = line.replace(coreImportMatch[1], nonMigratable.join(', '));
    }
  }

  // Pattern: import X from '@material-ui/core/ComponentName'
  const defaultImportMatch = line.match(
    /import\s+(\w+)\s+from\s+['"]@material-ui\/core\/(\w+)['"]/,
  );
  if (defaultImportMatch && !changed) {
    const [, importName, componentName] = defaultImportMatch;
    if (ALL_MAPPINGS[componentName]) {
      const newName = ALL_MAPPINGS[componentName];
      junoImports.add(
        importName !== componentName ? `${newName} as ${importName}` : newName,
      );
      return { changed: true, remove: true, line: '' };
    }
  }

  // Pattern: import { X } from '@material-ui/core/styles'
  const stylesImportMatch = line.match(
    /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/core\/styles['"]/,
  );
  if (stylesImportMatch && !changed) {
    const imports = stylesImportMatch[1]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const migratable = [];
    const nonMigratable = [];

    for (const imp of imports) {
      const [name, alias] = imp.split(/\s+as\s+/).map((s) => s.trim());
      if (ALL_MAPPINGS[name]) {
        const newName = ALL_MAPPINGS[name];
        junoImports.add(alias ? `${newName} as ${alias}` : newName);
        migratable.push(name);
      } else {
        nonMigratable.push(imp);
      }
    }

    if (migratable.length > 0) {
      changed = true;
      if (nonMigratable.length === 0) {
        return { changed: true, remove: true, line: '' };
      }
      newLine = line.replace(stylesImportMatch[1], nonMigratable.join(', '));
    }
  }

  // Pattern: import useMediaQuery from '@material-ui/core/useMediaQuery'
  const hookImportMatch = line.match(
    /import\s+(\w+)\s+from\s+['"]@material-ui\/core\/useMediaQuery['"]/,
  );
  if (hookImportMatch && !changed) {
    const importName = hookImportMatch[1];
    junoImports.add(
      importName !== 'useMediaQuery'
        ? `MuiUseMediaQuery as ${importName}`
        : 'MuiUseMediaQuery',
    );
    return { changed: true, remove: true, line: '' };
  }

  // Pattern: import { X } from '@material-ui/lab'
  const labImportMatch = line.match(
    /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/lab['"]/,
  );
  if (labImportMatch && !changed) {
    const imports = labImportMatch[1]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const migratable = [];
    const nonMigratable = [];

    for (const imp of imports) {
      const [name, alias] = imp.split(/\s+as\s+/).map((s) => s.trim());
      if (ALL_MAPPINGS[name]) {
        const newName = ALL_MAPPINGS[name];
        junoImports.add(alias ? `${newName} as ${alias}` : newName);
        migratable.push(name);
      } else {
        nonMigratable.push(imp);
      }
    }

    if (migratable.length > 0) {
      changed = true;
      if (nonMigratable.length === 0) {
        return { changed: true, remove: true, line: '' };
      }
      newLine = line.replace(labImportMatch[1], nonMigratable.join(', '));
    }
  }

  // Pattern: import { X } from '@material-ui/styles'
  const muiStylesMatch = line.match(
    /import\s+\{([^}]+)\}\s+from\s+['"]@material-ui\/styles['"]/,
  );
  if (muiStylesMatch && !changed) {
    const imports = muiStylesMatch[1]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const migratable = [];
    const nonMigratable = [];

    for (const imp of imports) {
      const [name, alias] = imp.split(/\s+as\s+/).map((s) => s.trim());
      if (ALL_MAPPINGS[name]) {
        const newName = ALL_MAPPINGS[name];
        junoImports.add(alias ? `${newName} as ${alias}` : newName);
        migratable.push(name);
      } else {
        nonMigratable.push(imp);
      }
    }

    if (migratable.length > 0) {
      changed = true;
      if (nonMigratable.length === 0) {
        return { changed: true, remove: true, line: '' };
      }
      newLine = line.replace(muiStylesMatch[1], nonMigratable.join(', '));
    }
  }

  return { changed, line: newLine, remove: false };
}

// ============================================
// Main Execution
// ============================================

function main() {
  console.log('🔄 MUI to JUNO Import Migration Script');
  console.log('=====================================');
  console.log(`📁 Project directory: ${resolvedDir}`);
  console.log(
    `🔍 Mode: ${dryRun ? 'DRY RUN (no files will be modified)' : 'LIVE'}`,
  );
  console.log(`💾 Backup: ${noBackup ? 'DISABLED' : 'ENABLED (.bak files)'}`);
  console.log('');

  // Find all TypeScript files
  console.log('🔍 Scanning for .ts and .tsx files...');
  const files = findTsFiles(resolvedDir);
  console.log(`   Found ${files.length} files\n`);

  // Filter files that contain @material-ui imports
  const filesWithMui = files.filter((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    return content.includes('@material-ui');
  });

  console.log(`📋 Files with @material-ui imports: ${filesWithMui.length}\n`);

  if (filesWithMui.length === 0) {
    console.log('✅ No @material-ui imports found. Nothing to migrate.');
    return;
  }

  let migratedCount = 0;
  let skippedCount = 0;
  const allChanges = [];

  for (const filePath of filesWithMui) {
    const relativePath = path.relative(resolvedDir, filePath);
    const result = migrateFile(filePath);

    if (result.changed) {
      migratedCount++;
      allChanges.push({ file: relativePath, changes: result.changes });

      if (verbose) {
        console.log(`📝 ${relativePath}`);
        for (const change of result.changes) {
          console.log(`   Line ${change.line}:`);
          console.log(`   - ${change.original.trim()}`);
          if (!change.migrated) {
            console.log(
              `   + (removed - merged into @ringcentral/juno import)`,
            );
          }
        }
        console.log('');
      }

      if (!dryRun) {
        // Create backup if enabled
        if (!noBackup) {
          fs.writeFileSync(
            `${filePath}.bak`,
            fs.readFileSync(filePath, 'utf-8'),
          );
        }
        // Write migrated content
        fs.writeFileSync(filePath, result.content);
      }
    } else {
      skippedCount++;
      if (verbose) {
        console.log(`⏭️  ${relativePath} (no migratable imports found)`);
      }
    }
  }

  // Summary
  console.log('\n=====================================');
  console.log('📊 Migration Summary');
  console.log('=====================================');
  console.log(`✅ Files migrated: ${migratedCount}`);
  console.log(`⏭️  Files skipped (no supported imports): ${skippedCount}`);
  console.log(`📁 Total files scanned: ${files.length}`);

  if (dryRun) {
    console.log('\n⚠️  DRY RUN - No files were modified');
    console.log('   Run without --dry-run to apply changes');
  } else if (migratedCount > 0) {
    console.log(`\n✅ Migration complete!`);
    if (!noBackup) {
      console.log(`   Backup files created with .bak extension`);
      console.log(
        `   To remove backups: find ${resolvedDir} -name "*.bak" -delete`,
      );
    }
  }

  // Show detailed changes summary
  if (allChanges.length > 0 && !verbose) {
    console.log('\n📝 Changed files:');
    for (const { file, changes } of allChanges) {
      console.log(`   - ${file} (${changes.length} import(s) migrated)`);
    }
    console.log('\n   Run with --verbose for detailed change log');
  }
}

// Run the script
main();

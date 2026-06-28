#!/usr/bin/env node
/**
 * UTM Tagging Script for DELE C2 Site
 * Ensures all App Store links have proper UTM/campaign parameters.
 * Run: node scripts/tag-ctas.js
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.resolve(__dirname, '..');
const APP_STORE_BASE = 'https://apps.apple.com/app/id6772564355';

function findHtmlFiles(dir) {
  let results = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'scripts') {
      results = results.concat(findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

function getPageSlug(filePath) {
  const relative = path.relative(SITE_DIR, filePath);
  const dir = path.dirname(relative);
  if (dir === '.' || dir === '') return 'home';
  return dir.replace(/\//g, '-').replace(/^en-/, 'en-');
}

function tagFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Find App Store links without proper parameters
  const regex = /https:\/\/apps\.apple\.com\/app\/id6772564355(?!\?)/g;
  if (regex.test(content)) {
    const slug = getPageSlug(filePath);
    const lang = filePath.includes('/en/') ? 'en' : 'es';
    content = content.replace(
      /https:\/\/apps\.apple\.com\/app\/id6772564355(?!\?)/g,
      `https://apps.apple.com/app/id6772564355?pt=126845029&ct=site-${slug}-${lang}&mt=8`
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Tagged: ${path.relative(SITE_DIR, filePath)}`);
  }
}

// Main
const htmlFiles = findHtmlFiles(SITE_DIR);
console.log(`Found ${htmlFiles.length} HTML files`);
htmlFiles.forEach(tagFile);
console.log('Done!');

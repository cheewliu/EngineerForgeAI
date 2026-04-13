type TagColor = { bg: string; text: string; dot: string };

const TAG_PALETTE: Record<string, TagColor> = {
  claude:                 { bg: '#ede9fe', text: '#5b21b6', dot: '#7c3aed' },
  'claude-code':          { bg: '#ede9fe', text: '#5b21b6', dot: '#7c3aed' },
  'prompt-engineering':   { bg: '#e0f2fe', text: '#075985', dot: '#0284c7' },
  opentap:                { bg: '#dcfce7', text: '#14532d', dot: '#16a34a' },
  'test-automation':      { bg: '#dcfce7', text: '#14532d', dot: '#16a34a' },
  ptem:                   { bg: '#ccfbf1', text: '#134e4a', dot: '#0d9488' },
  csharp:                 { bg: '#fce7f3', text: '#9d174d', dot: '#db2777' },
  json:                   { bg: '#fff7ed', text: '#9a3412', dot: '#ea580c' },
  benchmark:              { bg: '#fee2e2', text: '#7f1d1d', dot: '#dc2626' },
  productivity:           { bg: '#fee2e2', text: '#7f1d1d', dot: '#dc2626' },
  cost:                   { bg: '#fef9c3', text: '#713f12', dot: '#ca8a04' },
  'token-optimization':   { bg: '#fef9c3', text: '#713f12', dot: '#ca8a04' },
  workflow:               { bg: '#dbeafe', text: '#1e3a5f', dot: '#2563eb' },
  cli:                    { bg: '#dbeafe', text: '#1e3a5f', dot: '#2563eb' },
  tips:                   { bg: '#dbeafe', text: '#1e3a5f', dot: '#2563eb' },
  debugging:              { bg: '#d1fae5', text: '#064e3b', dot: '#059669' },
  'ci-cd':                { bg: '#f3e8ff', text: '#4c1d95', dot: '#9333ea' },
  devops:                 { bg: '#f3e8ff', text: '#4c1d95', dot: '#9333ea' },
  meta:                   { bg: '#f1f5f9', text: '#334155', dot: '#64748b' },
  introduction:           { bg: '#f1f5f9', text: '#334155', dot: '#64748b' },
};

const DARK_TAG_PALETTE: Record<string, TagColor> = {
  claude:                 { bg: 'rgba(124,58,237,0.15)', text: '#c4b5fd', dot: '#8b5cf6' },
  'claude-code':          { bg: 'rgba(124,58,237,0.15)', text: '#c4b5fd', dot: '#8b5cf6' },
  'prompt-engineering':   { bg: 'rgba(2,132,199,0.15)',  text: '#7dd3fc', dot: '#0ea5e9' },
  opentap:                { bg: 'rgba(22,163,74,0.15)',   text: '#86efac', dot: '#22c55e' },
  'test-automation':      { bg: 'rgba(22,163,74,0.15)',   text: '#86efac', dot: '#22c55e' },
  ptem:                   { bg: 'rgba(13,148,136,0.15)',  text: '#5eead4', dot: '#14b8a6' },
  csharp:                 { bg: 'rgba(219,39,119,0.15)',  text: '#f9a8d4', dot: '#ec4899' },
  json:                   { bg: 'rgba(234,88,12,0.15)',   text: '#fdba74', dot: '#f97316' },
  benchmark:              { bg: 'rgba(220,38,38,0.15)',   text: '#fca5a5', dot: '#ef4444' },
  productivity:           { bg: 'rgba(220,38,38,0.15)',   text: '#fca5a5', dot: '#ef4444' },
  cost:                   { bg: 'rgba(202,138,4,0.15)',   text: '#fde047', dot: '#eab308' },
  'token-optimization':   { bg: 'rgba(202,138,4,0.15)',   text: '#fde047', dot: '#eab308' },
  workflow:               { bg: 'rgba(37,99,235,0.15)',   text: '#93c5fd', dot: '#3b82f6' },
  cli:                    { bg: 'rgba(37,99,235,0.15)',   text: '#93c5fd', dot: '#3b82f6' },
  tips:                   { bg: 'rgba(37,99,235,0.15)',   text: '#93c5fd', dot: '#3b82f6' },
  debugging:              { bg: 'rgba(5,150,105,0.15)',   text: '#6ee7b7', dot: '#10b981' },
  'ci-cd':                { bg: 'rgba(147,51,234,0.15)',  text: '#d8b4fe', dot: '#a855f7' },
  devops:                 { bg: 'rgba(147,51,234,0.15)',  text: '#d8b4fe', dot: '#a855f7' },
  meta:                   { bg: 'rgba(100,116,139,0.15)', text: '#94a3b8', dot: '#64748b' },
  introduction:           { bg: 'rgba(100,116,139,0.15)', text: '#94a3b8', dot: '#64748b' },
};

const DEFAULT_LIGHT: TagColor = { bg: '#f1f5f9', text: '#334155', dot: '#64748b' };
const DEFAULT_DARK:  TagColor = { bg: 'rgba(100,116,139,0.15)', text: '#94a3b8', dot: '#64748b' };

export function getTagColor(tag: string, dark = false): TagColor {
  const palette = dark ? DARK_TAG_PALETTE : TAG_PALETTE;
  const def    = dark ? DEFAULT_DARK : DEFAULT_LIGHT;
  return palette[tag] ?? def;
}

/** CSS gradient for hero/card placeholder when no cover image exists */
const COVER_GRADIENTS: Record<string, string> = {
  claude:               'linear-gradient(135deg,#4c1d95 0%,#1e1b4b 100%)',
  'claude-code':        'linear-gradient(135deg,#4c1d95 0%,#1e1b4b 100%)',
  'prompt-engineering': 'linear-gradient(135deg,#0c4a6e 0%,#082f49 100%)',
  opentap:              'linear-gradient(135deg,#064e3b 0%,#022c22 100%)',
  'test-automation':    'linear-gradient(135deg,#064e3b 0%,#022c22 100%)',
  ptem:                 'linear-gradient(135deg,#134e4a 0%,#042f2e 100%)',
  csharp:               'linear-gradient(135deg,#831843 0%,#3b0764 100%)',
  benchmark:            'linear-gradient(135deg,#7f1d1d 0%,#1c0a00 100%)',
  cost:                 'linear-gradient(135deg,#78350f 0%,#1c0700 100%)',
  'token-optimization': 'linear-gradient(135deg,#78350f 0%,#1c0700 100%)',
  workflow:             'linear-gradient(135deg,#1e3a5f 0%,#0c1a2e 100%)',
  debugging:            'linear-gradient(135deg,#14532d 0%,#042714 100%)',
  'ci-cd':              'linear-gradient(135deg,#4c1d95 0%,#1e1b4b 100%)',
};

export function getCoverGradient(firstTag: string): string {
  return COVER_GRADIENTS[firstTag] ?? 'linear-gradient(135deg,#1e1e2e 0%,#0a0a0f 100%)';
}

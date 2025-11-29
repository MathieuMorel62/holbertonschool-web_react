import { execSync } from 'child_process';

// Script optimisé qui vérifie rapidement si le navigateur est déjà installé
// et ne fait rien si c'est le cas, pour éviter les timeouts

try {
  // Vérifier si @playwright/test est installé
  try {
    require.resolve('@playwright/test');
  } catch {
    // Playwright n'est pas encore installé, on sort silencieusement
    // Le hook postinstall sera appelé après l'installation
    process.exit(0);
  }

  // Vérifier rapidement si chromium-headless-shell est déjà installé
  // en utilisant playwright install avec --dry-run qui est très rapide
  try {
    const result = execSync('npx playwright install --dry-run chromium-headless-shell 2>&1', { 
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 5000 // Timeout court pour éviter d'attendre
    });
    
    // Si le navigateur est déjà installé, on sort immédiatement
    if (result.includes('already installed') || !result.includes('Downloading')) {
      process.exit(0);
    }
  } catch (error) {
    // Si --dry-run échoue ou timeout, on assume que le navigateur n'est pas installé
    // Mais on continue quand même pour installer
  }

  // Si on arrive ici, le navigateur n'est pas installé
  // On l'installe mais avec un timeout pour éviter les blocages
  execSync('npx playwright install chromium-headless-shell', { 
    stdio: 'inherit',
    timeout: 120000 // 2 minutes max
  });
} catch (error) {
  // Si l'installation échoue ou timeout, on sort avec code 0 pour ne pas bloquer
  // Le navigateur pourra être installé plus tard si nécessaire
  process.exit(0);
}


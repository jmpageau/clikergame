# Phase 1 – Clicker MVP

## Objectif
Créer un premier prototype jouable centré sur l’élevage (clicker), permettant de :
- Cliquer pour générer de l’XP par famille de monstres.
- Level up manuellement un monstre.
- Stocker les données en local pour conserver la progression.

---

## Micro-tâches (implémentation progressive)

### ✅ 1. Structure de base du projet
1. Créer un projet React Native avec Expo (`expo init`).
2. Installer les dépendances nécessaires :
   - `@react-navigation/native` & `@react-navigation/stack` (navigation simple).
   - `@react-native-async-storage/async-storage` (sauvegarde locale).
3. Créer un dossier `screens/` et `components/`.

---

### ✅ 2. Écran principal – GameScreen
1. **GameScreen.js** :
   - Affichage du **nom du monstre actif**.
   - Affichage de l’**XP actuelle** pour sa famille.
   - Bouton ou zone tactile centrale → **+1 XP par clic**.
   - Texte indiquant le **nombre total de clics**.

---

### ✅ 3. Gestion de l’XP
1. Créer un **hook personnalisé** (`useMonsterXP.js`) pour gérer :
   - `xpByFamily` : objet `{ familyName: xp }`.
   - Fonction `addXP(familyName)` → incrémente de +1.
   - Fonction `getXP(familyName)` → retourne l’XP actuelle.

2. Sauvegarder les données avec AsyncStorage :
   - Sauvegarde automatique à chaque clic.
   - Chargement au démarrage du jeu.

---

### ✅ 4. Level Up du monstre
1. Ajouter un bouton **"Level Up"** sous la zone de clic.
2. Règle simple pour le MVP :
   - **Coût en XP** = `10 * niveau actuel`.
   - Quand validé :
     - Niveau +1.
     - Retirer l’XP du coût.
3. Afficher le **niveau actuel** du monstre.

---

### ✅ 5. Sélection du monstre actif (option MVP simplifiée)
1. Créer une petite liste statique de monstres (`data/monsters.js`) :
   ```js
   export const monsters = [
     { id: "m1", name: "Fluffar", family: "fluff", level: 1 },
     { id: "m2", name: "Zyrr", family: "zyrr", level: 1 }
   ];

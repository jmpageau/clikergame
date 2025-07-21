# Monster Clicker Collector – Core Gameplay Loop

## 1. Boucle Principale (MVP – Phase 1)
### Objectif
Permettre au joueur d’interagir immédiatement via une mécanique clicker simple et gratifiante, tout en posant la base de la progression des monstres.

### Séquence du joueur
1. **Sélectionner un monstre actif** (dans la section élevage du vaisseau).
2. **Cliquer dans la zone d’élevage** → +1 XP pour la *famille* du monstre actif.
3. **Accumuler de l’XP de famille** → Utilisable pour :
   - Level up le monstre actif.
   - Level up un autre monstre de la même famille (farm partagé par famille).
4. **Level Up** :
   - Débloque des passifs améliorés (ex : clics automatiques, bonus expédition, etc.).
   - Évolution visuelle et statistique du monstre.

### Ressources gérées
- **XP par famille** : principale ressource pour la progression immédiate.
- **Niveaux des monstres** : augmentent la puissance des passifs.

### But du MVP
- Tester le **feeling du clicker**.
- Avoir un système stable de stockage de l’XP (local + Firebase).
- Permettre le **level up manuel** d’un monstre.

---

## 2. Boucles Secondaires (Phases futures)

### A. **Expédition (Phase 2)**
1. Sélectionner un PNJ + 1 ou plusieurs monstres → envoyer en expédition.
2. Attendre X minutes/heures.
3. Récupérer un résultat :
   - Ressources.
   - Œufs de nouvelles espèces.
4. Les passifs des monstres influencent les chances de loot (ex : rareté augmentée).

### B. **Exploration de planètes (Phase 3)**
1. Choisir une planète depuis la carte stellaire.
2. Voyager (coût en carburant ou ressources).
3. Chaque planète a :
   - Liste d’espèces spécifiques.
   - Ressources particulières.
   - Rareté des espèces.
4. Possibilité de farmer plusieurs fois une même planète.

### C. **Gestion de l’équipage & du vaisseau (Phase 4)**
- PNJ avec rôles spécifiques (exploration, élevage, maintenance).
- Amélioration du vaisseau pour débloquer de nouvelles fonctionnalités.

---

## 3. Boucle Long Terme (Fidélisation)
- **Collection complète des espèces**.
- **Optimisation des passifs pour automatiser le clicker** (idle game).
- **Déverrouillage progressif de nouvelles planètes et ressources rares**.
- **Retour régulier du joueur grâce aux temps d’attente (expédition, incubation d’œufs)**.

---

## 4. Prochaine Étape Technique
1. Implémenter le **clicker basique avec XP par famille** (MVP).
2. Système de **sélection du monstre actif**.
3. Interface d’**élevage simple** (zone de clic + affichage XP).
4. Stockage des données en local (AsyncStorage), puis synchronisation Firebase.


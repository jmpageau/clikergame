# Monster Clicker Collector – Phases de Développement

## Objectif
Structurer le développement du jeu en étapes claires, du MVP jusqu’à une version complète et monétisable.

---

## ✅ Phase 1 – Clicker MVP
### But
Créer un premier prototype jouable centré sur l’élevage (clicker) pour valider le gameplay et la progression basique.

### Fonctionnalités
1. Sélection d’un **monstre actif** (liste simplifiée).
2. **Zone de clic** → Gagner de l’XP pour la famille du monstre actif.
3. **Interface d’élevage** :
   - Affichage XP total par famille.
   - Bouton pour **level up** le monstre actif.
4. Stockage local (AsyncStorage) :
   - XP par famille.
   - Niveau des monstres.
5. Synchronisation simple avec **Firebase** (optionnel pour le MVP initial).

---

## ✅ Phase 2 – Expéditions Simples
### But
Introduire la gestion du temps et l’équipage pour engager les joueurs sur le long terme.

### Fonctionnalités
1. Liste de PNJ + sélection d’un monstre pour partir en expédition.
2. Timer en temps réel (X minutes/heures).
3. Récompenses :
   - Ressources.
   - Œufs à incuber.
4. Bonus passifs des monstres appliqués sur les expéditions.

---

## ✅ Phase 3 – Carte Stellaire & Exploration de Planètes
### But
Donner un vrai sentiment d’exploration et d’univers partagé.

### Fonctionnalités
1. Carte stellaire (2D simple) avec coordonnées.
2. Planètes stockées dans Firebase :
   - Caractéristiques aléatoires mais partagées entre tous les joueurs.
3. Déplacement du vaisseau avec coût en ressources.
4. Chaque planète a :
   - Liste d’espèces spécifiques.
   - Rareté des espèces et ressources.

---

## ✅ Phase 4 – Gestion Avancée & Multijoueur
### But
Améliorer la profondeur et préparer la monétisation.

### Fonctionnalités
1. Gestion complète du vaisseau (pièces à débloquer/améliorer).
2. PNJ avec rôles spécifiques.
3. Système de commerce ou d’échange d’œufs entre joueurs.
4. Événements spéciaux (planètes rares temporaires).
5. Premières mécaniques de **monétisation** (cosmétiques, accélérateurs de temps).

---

## Roadmap Technique
| Phase | Priorité | Stockage |
|-------|----------|----------|
| 1 – Clicker MVP | **Immédiat** | Local (AsyncStorage), Firebase plus tard |
| 2 – Expéditions | Moyen terme | Firebase obligatoire |
| 3 – Carte Stellaire | Moyen/long terme | Firebase obligatoire |
| 4 – Multijoueur & Monétisation | Long terme | Firebase + fonctions temps réel |

---

## Prochaine Étape
1. Implémenter **Phase 1 – Clicker MVP** en micro-tâches.
2. Ajouter Firebase une fois la boucle clicker stable.

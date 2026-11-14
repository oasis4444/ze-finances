# Z&E — Notre avenir, notre projet

Application de gestion financière familiale (français, malagasy, English) : revenus, dépenses, épargne, projets (terrain, maison…), budget intelligent, alertes et simulations. Devise : Ariary (Ar).

> « Ensemble, nous gérons aujourd'hui pour construire demain. »

## Hébergement (100 % gratuit)

| Rôle | Service | Coût |
|---|---|---|
| Site web (HTML) | GitHub Pages | Gratuit |
| Base de données en ligne | Firebase Firestore (offre Spark) | Gratuit (50 000 lectures / 20 000 écritures par jour) |
| Comptes avec mot de passe | Firebase Authentication | Gratuit |

## Fichiers

- `index.html` : l'application complète
- `firebase-config.js` : configuration Firebase + e-mails des deux membres
- `firestore.rules` : règles de sécurité (seuls vos deux comptes ont accès)
- `manifest.webmanifest`, `sw.js`, `icons/` : installation sur le téléphone (PWA) et fonctionnement hors ligne

## Mise en route

1. **Firebase** : créer un projet sur https://console.firebase.google.com
   - Authentication → E-mail/Mot de passe → Activer
   - Authentication → Paramètres → Domaines autorisés → ajouter `VOTRE-NOM.github.io`
   - Firestore Database → Créer (mode production)
   - Firestore → Règles : coller `firestore.rules` (avec vos deux e-mails) → Publier
2. **Configuration** : copier la configuration Web de Firebase dans `firebase-config.js`, et vos deux e-mails dans `ZE_MEMBERS`.
3. **GitHub Pages** : Settings → Pages → Source : *Deploy from a branch* → `main` / `(root)`.
4. Ouvrir `https://VOTRE-NOM.github.io/ze-finances/` → « Créer mon compte » (chaque membre choisit son mot de passe et confirme son e-mail), puis « Ajouter à l'écran d'accueil ».

**Installation actuelle :** projet Firebase `ze-finances` (Firestore eur3), site https://oasis4444.github.io/ze-finances/

Sans configuration Firebase, l'application fonctionne en mode local (données sur l'appareil uniquement).

## Sauvegarde

Paramètres → **Sauvegarde complète (.json)** à faire régulièrement. Exports Excel et PDF disponibles au même endroit.

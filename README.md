# Comment modifier votre site — L'Art du Coulissement
Ce guide explique, en français simple, comment modifier les textes, les
photos et les couleurs de votre site sans aucune connaissance technique.
---
## Structure des fichiers
```
votre-site/
├── index.html              ← Tous les textes du site
├── styles.css              ← Couleurs et mise en page
├── script.js               ← Petits scripts (ne pas toucher)
├── images/                 ← Toutes les photos du site
│   ├── hero-baie-vitree.jpg
│   ├── fondateur-placeholder.jpg
│   ├── reparation-roulette.jpg
│   ├── avant-apres-roulettes.jpg
│   └── rail-baie-vitree.jpg
├── robots.txt              ← Pour Google (ne pas toucher)
├── sitemap.xml             ← Pour Google (ne pas toucher)
└── README-MODIFICATIONS.md ← Ce fichier
```
Ouvrez les fichiers `.html` et `.css` avec un éditeur simple comme
**Notepad++** (gratuit) ou **VS Code** (gratuit). N'utilisez surtout pas Word.
---
## 1. Modifier un texte
Tous les textes du site sont dans **`index.html`**.
Repérez les commentaires de ce type :
```html
<!-- MODIFIABLE : texte de présentation du fondateur -->
```
Le texte juste en dessous est modifiable. Changez uniquement ce qui est
**entre les balises** (par exemple entre `<p>` et `</p>`), pas les balises elles-mêmes.
**Exemple — bon :**
```html
<p>Je m'appelle Simon et j'ai 15 ans d'expérience.</p>
```
**Exemple — à ne pas faire :**
```html
Je m'appelle Simon et j'ai 15 ans d'expérience.
```
(les balises `<p></p>` ont été supprimées)
### Sections principales (repères dans le fichier)
Cherchez ces identifiants avec `Ctrl+F` :
- `id="hero"` → grande bannière d'accueil
- `id="services"` → présentation des activités
- `id="avantages"` → arguments de vente
- `id="fondateur"` → votre présentation
- `id="entreprise"` → présentation de la société
- `id="galerie"` → carrousel de photos
- `id="contact"` → coordonnées
---
## 2. Changer une photo
**Méthode la plus simple :** remplacez le fichier image dans le dossier
`images/` en gardant **exactement le même nom**.
Par exemple, pour changer votre portrait :
1. Préparez une photo nette, format portrait (plus haute que large).
2. Renommez-la `fondateur-placeholder.jpg` (exactement ce nom).
3. Glissez-la dans le dossier `images/` en remplaçant l'ancienne.
**Conseils pour de bonnes photos :**
- Format : `.jpg` pour les photos, `.png` pour les logos.
- Taille : pas plus de 1600 pixels de large (sinon le site sera lent).
- Compressez-les sur [https://squoosh.app](https://squoosh.app) (gratuit).
### Ajouter une nouvelle photo à la galerie
Dans `index.html`, cherchez `id="carousel"`. Dupliquez ce bloc :
```html
<figure class="carousel-item">
  <img src="images/NOM-DE-VOTRE-PHOTO.jpg" alt="Description de la photo" loading="lazy" />
  <figcaption>Légende de la photo.</figcaption>
</figure>
```
Et placez votre nouvelle photo dans le dossier `images/`.
---
## 3. Changer un numéro de téléphone ou un email
Dans **toute la page**, utilisez la fonction **Rechercher / Remplacer** de
votre éditeur (`Ctrl+H`).
- Pour changer le numéro : remplacez `0698180498` par votre nouveau numéro
  (attention, il y a aussi `06 98 18 04 98` avec espaces — remplacez les deux).
- Pour le format `tel:` : remplacez `tel:+33698180498` (sans le 0 initial,
  avec `+33` pour la France).
- Pour l'email : remplacez `lartducoulissement@gmail.com`.
---
## 4. Changer les couleurs
Dans **`styles.css`**, tout en haut, vous trouverez :
```css
:root {
  --bleu-principal: #0a2540;
  --bleu-clair:     #1e4976;
  --or:             #c9a961;
  ...
}
```
Modifiez la valeur après les `:` (les codes commencent par `#`).
Vous pouvez choisir vos couleurs sur [https://htmlcolorcodes.com](https://htmlcolorcodes.com).
---
## 5. Tester le site sur votre ordinateur
Vous n'avez **pas besoin d'installer de serveur**. Pour voir le site :
### Option simple
Double-cliquez sur `index.html` — il s'ouvre dans votre navigateur.
### Option recommandée (rechargement automatique)
1. Installez **VS Code** : [https://code.visualstudio.com](https://code.visualstudio.com)
2. Dans VS Code, installez l'extension **"Live Server"** (Ritwick Dey).
3. Ouvrez le dossier du site, faites un clic droit sur `index.html` →
   **"Open with Live Server"**.
4. Le site s'ouvre dans le navigateur et se recharge à chaque modification.
---
## 6. Mettre le site en ligne (gratuit)
L'option la plus simple : **Netlify Drop**.
1. Allez sur [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Glissez tout le dossier du site dans la fenêtre.
3. C'est en ligne en 30 secondes, avec une adresse `*.netlify.app` gratuite
   et le HTTPS automatique.
4. Vous pourrez ensuite connecter votre propre nom de domaine (ex. `lartducoulissement.fr`).
---
## 7. Pour être bien référencé sur Google (TRÈS IMPORTANT)
Le site est techniquement optimisé, mais pour ressortir en premier
sur "réparation baie vitrée [votre ville]", il faut **impérativement** :
### a) Créer une fiche Google Business Profile (gratuit)
👉 [https://www.google.com/business](https://www.google.com/business)
C'est ce qui vous fera apparaître dans la carte Google en haut des résultats.
Renseignez : nom, téléphone, zone, horaires, photos. **C'est l'action la plus
importante** pour votre visibilité locale, plus que le site lui-même.
### b) Récolter des avis Google 5 étoiles
Demandez à chaque client satisfait de vous laisser un avis. Plus vous en
avez (idéalement >10), plus vous remontez dans les résultats.
### c) S'inscrire sur les annuaires
- PagesJaunes (gratuit) : [https://www.pagesjaunes.fr](https://www.pagesjaunes.fr)
- Houzz : [https://www.houzz.fr](https://www.houzz.fr)
- Chambre des Métiers de votre département
### d) Mettre à jour le site une fois en ligne
Dans `index.html`, remplacez `https://lartducoulissement.fr/` par
votre vraie URL (s'il y en a une différente).
---
Bonne chance, et n'hésitez pas à demander de l'aide si besoin !
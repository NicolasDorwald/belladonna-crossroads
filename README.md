# THE BELLADONNA CROSSROADS — SITE WEB

## 1. Objectif

Créer un petit site vitrine pour le groupe stoner rock **The Belladonna Crossroads**.

Le site doit être :

* immersif et graphique ;
* sombre, mystérieux, cinématographique ;
* cohérent avec l'univers visuel du groupe et du futur clip ;
* simple techniquement ;
* sans serveur ni base de données pour le moment.

Pas de boutique/merch pour l'instant.

---

## 2. Technologie

### Frontend

* **React**
* **Vite**
* HTML / JSX
* CSS
* JavaScript

Pas de backend.

Pas de base de données.

Pas besoin de React Router dans un premier temps.

Le site fonctionne comme une **interface unique** : le contenu change en fonction de la rubrique sélectionnée.

### Formulaire de contact

Le formulaire sera géré par un **service externe de formulaire**, afin de ne pas avoir à créer de serveur.

---

## 3. Concept général de l'interface

Le site possède un **fond commun permanent**.

Le fond contient notamment :

* l'image/ambiance principale ;
* le logo du groupe ;
* la navigation en forme de demi-lune.

Ces éléments restent visibles pendant la navigation.

Les différentes rubriques apparaissent dans une zone de contenu centrale.

### Rubriques prévues

* HOME
* MUSIC
* VIDEO
* TOUR / DATES
* THE BAND
* CONTACT

La navigation graphique permet de passer d'une rubrique à l'autre.

---

## 4. Navigation : la demi-lune

Élément graphique principal du site.

Leonardo a généré une sorte de **demi-lune composée de quatre petites dalles/carrés**.

Ces quatre éléments représentent les principales rubriques.

La navigation n'est donc pas une barre de menu classique.

### Fonctionnement

Une des dalles est placée en **position haute / principale**.

Les autres sont disposées autour d'elle sur la demi-lune.

Lorsqu'on clique sur une autre dalle :

1. la dalle sélectionnée devient la dalle principale ;
2. les autres dalles se déplacent autour de la demi-lune ;
3. la navigation donne l'impression de tourner ;
4. la rubrique correspondante apparaît ;
5. la rubrique précédente disparaît.

Important : il n'est **pas nécessaire de créer de nouvelles icônes pour chaque rotation**.

Il y a seulement quatre éléments de navigation.

Chaque élément possède simplement une **position différente sur l'arc** selon la rubrique active.

La rotation sera principalement réalisée avec **CSS + classes dynamiques React**.

Animation souhaitée : environ **300–600 ms**, fluide, pas d'animation interminable.

---

## 5. Architecture React envisagée

Structure simple :

App
│
└── Site
├── Background
├── Logo
├── SectionContent
│   ├── Home
│   ├── Music
│   ├── Video
│   ├── Tour
│   ├── Band
│   └── Contact
│
└── NavigationWheel

La navigation est un composant permanent.

Elle ne se trouve pas à l'intérieur de chaque rubrique.

### État principal

Un seul état React peut contrôler la rubrique active :

`activeSection`

Exemple :

`const [activeSection, setActiveSection] = useState("home");`

Un clic sur une dalle déclenche :

`setActiveSection("music")`

Le contenu est ensuite affiché conditionnellement.

Exemple conceptuel :

`activeSection === "music"` → afficher Music

`activeSection === "video"` → afficher Video

etc.

---

## 6. Principe important

Le site doit donner l'impression que l'utilisateur **reste dans le même univers visuel**.

Il ne doit pas avoir l'impression de charger plusieurs pages totalement différentes.

Le fond + logo + navigation restent donc en place.

Seul le contenu central évolue.

La navigation tourne en même temps que le contenu change.

Le concept de **Crossroads** est ainsi intégré directement à l'UX : l'utilisateur choisit différents chemins autour d'un même point central.

---

## 7. Direction artistique

Ne pas faire un site metal classique.

Éviter :

* gothique excessif ;
* cyberpunk ;
* steampunk ;
* esthétique fantasy ;
* surcharge de crânes ;
* clichés metal ;
* interface moderne trop propre.

Direction recherchée :

* stoner rock ;
* psychédélique ;
* occulte ;
* mystérieux ;
* cinématographique ;
* désertique ;
* vieux cinéma ;
* giallo / horreur artistique ;
* théâtre ancien ;
* silhouettes ;
* fumée ;
* textures analogiques.

Palette envisagée :

* noir profond ;
* orange brûlé ;
* ocre ;
* or vieilli ;
* vert très sombre / vert maladif ;
* touches de bleu sale.

Beaucoup de **vide et de noir** pour conserver le côté mystérieux.

---

## 8. Logo

Leonardo a déjà généré un logo intéressant pour The Belladonna Crossroads.

Le logo doit idéalement devenir l'élément central permanent de l'accueil.

Si nécessaire, on pourra récupérer le logo depuis l'image générée et créer un **PNG transparent**, voire plus tard le vectoriser en SVG.

Le logo ne doit pas être recréé différemment à chaque page.

---

## 9. Philosophie du développement

Commencer très simplement.

### Étape 1

Créer le projet React + Vite.

### Étape 2

Mettre en place :

* fond ;
* logo ;
* conteneur principal ;
* quatre dalles de navigation.

### Étape 3

Faire fonctionner les clics avec `useState`.

### Étape 4

Afficher les différentes sections.

### Étape 5

Ajouter les positions dynamiques des dalles.

### Étape 6

Ajouter l'animation CSS de rotation.

### Étape 7

Travailler les détails visuels :

* textures ;
* ombres ;
* typographies ;
* transitions ;
* effets au survol.

### Étape 8

Créer les vraies rubriques :

* Music ;
* Video ;
* Tour ;
* Band ;
* Contact.

Ne pas chercher à tout programmer d'un coup.

---

## 10. Principe UX

Les dalles doivent être suffisamment explicites pour comprendre qu'elles sont cliquables.

La dalle active doit être visuellement identifiable :

* légèrement plus grande ;
* plus lumineuse ;
* contraste supérieur ;
* éventuellement titre visible.

Les autres restent présentes afin que l'utilisateur comprenne qu'il existe plusieurs directions.

La navigation doit être originale mais rester compréhensible.

L'animation est un **renfort visuel**, pas une condition nécessaire à la compréhension.

---

## 11. Résumé en une phrase

**Un site React/Vite vitrine sans backend, construit comme une interface immersive unique : un fond et un logo permanents, avec une demi-lune de quatre dalles qui tourne au clic pour sélectionner une rubrique et faire apparaître son contenu.**


## 12. Structure

belladonna-crossroads/
│
├── README.md
├── package.json
├── vite.config.js
├── index.html
│
├── src/
│   ├── components/
│   │   ├── NavigationWheel.jsx
│   │   ├── Logo.jsx
│   │   └── SectionContent.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Music.jsx
│   │   ├── Video.jsx
│   │   ├── Tour.jsx
│   │   ├── Band.jsx
│   │   └── Contact.jsx
│   │
│   ├── assets/
│   │   ├── logo.png
│   │   └── ...
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── ...
Intro:

Cypress est un framework de test conçu spécifiquement pour les applications web modernes. Il est utilisé pour écrire, exécuter et déboguer des tests automatisés, principalement des tests end-to-end (E2E). Voici quelques points clés pour mieux comprendre Cypress :

    Test end-to-end : Cypress permet de simuler les actions d'un utilisateur sur une application web (comme cliquer sur des boutons, remplir des formulaires, etc.) et vérifier si l'application réagit comme prévu. Cela inclut des tests d'interface utilisateur, de flux utilisateur ou de performance.

    Temps réel et interactivité : Cypress est reconnu pour sa rapidité et son interactivité. Il offre une interface graphique où tu peux voir les tests se dérouler en temps réel, ce qui est très pratique pour le débogage. En cas d'erreur, Cypress capture automatiquement des captures d'écran et enregistre les étapes exécutées pour faciliter l'identification du problème.

    Architecture côté client : Contrairement à d'autres outils de test qui fonctionnent en dehors du navigateur, Cypress s'exécute directement dans le navigateur. Cela lui permet d'intercepter les requêtes réseau, de manipuler directement le DOM (Document Object Model), et d'avoir un meilleur contrôle sur l'application à tester.

    Installation et utilisation faciles : Cypress s'installe facilement via npm (Node Package Manager) et ne nécessite pas de configuration complexe. Il est conçu pour les développeurs JavaScript et les équipes travaillant avec des frameworks modernes comme React, Angular, Vue, etc.

    Tests unitaires et d'intégration : Bien que son principal objectif soit les tests end-to-end, Cypress peut également être utilisé pour des tests unitaires et d'intégration, ce qui en fait un outil très flexible pour assurer la qualité d'une application.

    Communauté et extensions : Cypress dispose d'une communauté active et d'un écosystème riche de plugins qui peuvent améliorer ses fonctionnalités de test (comme l'intégration avec des outils CI/CD, l'exécution parallèle des tests, etc.).

En résumé, Cypress est un outil puissant pour tester les applications web modernes, avec une grande attention portée à la convivialité et à l'efficacité pour les développeurs et testeurs.

Tester un projet avec Cypress, étap bien structuré :
1. index.html doit être servi sur un serveur local, package.json, http-server installé. Ajout d'un script pour démarrer ce serveur.
2. Configurer la baseUrl dans Cypress. Cypress doit savoir où accéder à l' application web. Pour cela, configurer le fichier cypress.config.js (ou cypress.config.ts).

Ajout ou modification dans le fichier cypress.config.js des éléments suivants :
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8080/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

Lancer le serveur local pour servir les fichiers HTML/JS en utilisant la commande : npm run serve
S'assurer que l'application est bien servie sur 127.0.0.1:8080 ou ajuster le port dans la configuration Cypress si nécessaire.

Lancer Cypress avec : npm run cypress:open

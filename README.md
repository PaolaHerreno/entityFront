### Prérequis
<ol>
    <li>avoir nodejs installer (dernière version LTS)</li>
    <li>avoir Docker installer pour faire l'image serveur</li>
</ol>

### Lancer en mode dev
<ol>
    <li>`npm install` pour installer les dépendences</li>
    <li>`ng serve` pour lancer le serveur de developement</li>
</ol>

### Creer une image docker.
<ol>
    <li>`npm install` pour installer les dépendences</li>
    <li>`ng build` pour installer les dépendences</li>
    <li>`docker build -t entityfront .` pour créer l'image du serveur de distribution des fichiers HTLM</li>
    <li>`docker run --name entityfront -p 80:80 -d entityfront` pour démarrer le serveur HTML</li>
</ol>

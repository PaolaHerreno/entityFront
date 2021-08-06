### Prérequis
<ol>
    <li>avoir nodejs installer (dernière version LTS)</li>
    <li>avoir Docker installer pour faire l'image serveur</li>
</ol>

### Lancer en mode dev
<ol>
    <li><pre>npm install</pre> pour installer les dépendences</li>
    <li><pre>ng serve</pre> pour lancer le serveur de developement</li>
</ol>

### Creer une image docker.
<ol>
    <li><pre>npm install</pre> pour installer les dépendences</li>
    <li><pre>ng build</pre> pour installer les dépendences</li>
    <li><pre>docker build -t entityfront .</pre> pour créer l'image du serveur de distribution des fichiers HTLM</li>
    <li><pre>docker run --name entityfront -p 80:80 -d entityfront</pre> pour démarrer le serveur HTML</li>
</ol>

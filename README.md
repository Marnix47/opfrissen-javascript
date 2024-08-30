# JavaScript opfris-opdracht

Deze opdracht is bedoeld om je kennis van en vaardigheden in JavaScript op te frissen. De startcode zorgt ervoor dat er een rood vierkantje (=appel) bovenin het scherm verschijnt.

Hulpmiddelen:
- [Syntaxblad JavaScript en P5js](/syntaxblad-javascript.pdf)
- [KhanAcademy](https://www.khanacademy.org/computing/computer-programming)
- [P5js](https://p5js.org/reference/)

### De hele opdracht in één keer:
Maak op dezelfde wijze als in de 4e klas een klein spelletje waarbij het de bedoeling is dat je zoveel mogelijk appels in een mandje vangt. Het mandje kun je met behulp van de muis onderaan het scherm naar links en rechts bewegen. Er mogen maximaal 3 appels tegelijk op het scherm zijn.
Gegevens van appels die gevangen of gemist zijn, mogen niet in het geheugen blijven staan. Maar naar eigen inzicht gebruik van if, for en/of arrays, op dezelfde manier waarop je in de 4e klas de game hebt gemaakt. Maak het spel evt. mooier met een plaatjes van fruit, een mandje.

### De opdracht stap voor stap
1. Laat de appel naar beneden vallen. Dit doe je door in de `draw`-functie de waarde van de variable `hoogte` steeds kleiner te maken.
2. Maak het 'mandje'. Teken op een y-waarde van 650 een rechthoek van 100 pixels breed en 15 pixels hoog. De x-positie wordt bepaald door de x-positie van de muis. Zoek evt. op het syntaxblad of in KhanAcademy op hoe je die kunt opvragen.
3. Zorg er met behulp van een 'if'-statement voor dat het mandje stopt bij randen van het spel, ook als je de muis verder naar links of rechts beweegt.
4. Gebruik opnieuw een `if`-statement om de appel een nieuwe positie te geven op het moment dat deze onder uit beeld is gevallen. Tip: gebruik bij de nieuwe y-waarde hiervoor `random(-1000, -200)` om de appel na een korte random tijd pas weer op het scherm te zien. Voor de x-waarde kun je ook een random waarde kiezen.
5. Maak een globale variabele aan om de score bij te houden. Geef deze in de `setup` de waarde 0. Toon de score in een bovenhoek op het scherm.
6. Wanneer de appel de mand raakt, moet de appel ook een nieuwe random positie krijgen (net als wanneer die uit beeld is gegaan). Ook moet je er één punt bij krijgen. Op [deze webpagina](https://www.jeffreythompson.org/collision-detection/rect-rect.php) staat uitgelegd hoe je kunt checken of twee rechthoeken overlappen.
7. Nu heb je misschien op twee plekken in je code met behulp van `random` beschreven dat de appel een nieuwe positie moet krijgen. Stop deze code in een losse functie en roep die functie aan op de twee plekken waar de betreffende code eerst stond.
8. Breid je game naar eigen smaak uit. Denk aan: meerdere appels, mooiere plaatjes, de mogelijkheid om af te kunnen gaan.

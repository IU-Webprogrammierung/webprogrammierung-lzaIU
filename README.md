# Projekt: Web-Programmierung

## Projektbeschreibung
Ziel des Projekts ist es, ein e Webseite zu entwickeln. 
Dabei sollen verschiedene Komponenten und Funktionen implementiert werden.

Die Anforderungen sind:
* Inhalte auf beliebigen Geräten von 360 Pixel Breite bis 1920 Pixel Breite sinnvoll anzeigen
* mindestens vier verlinkten Seiten
* Versionskontrolle (Git)
* Media Queries mit mindestens einem Breakpoint
* Flexbox und/oder Grid
* Vorgaben für die Barrierefreiheit

Mein Konzept beinhaltet fünf Seiten:
* Homepage
* Über mich
* Reisen
* Bücher
* Arbeit

---
## Verwendete Technologien
* HTML5
* CSS
  * Flexbox
  * Grid Layout
  * Media Queries
* JavaScript
  * Web Components für Header und Footer
* Git

---
## 📂 Projektstruktur
* `/css` → Stylesheets
* `/html` → Unterseiten
* `/images` → Bilder
* `/components` → Web Components
* `index.html` → Startseite

---
## Responsive Design
Nach Überarbeitung des Konzepts in Phase zwei sind folgende Breakpoint umgesetzt:

Navigation:
* 900px

Homepage:
* 900px
* 1600px

Über mich:
* 900px
* 1600px

Reisen:
* 900px
* 1600px

Bücher:
* 900px
* 1600px

Arbeit:
* 1200px

---
### Umgesetzte Techniken:
* CSS Grid für Seitenlayouts
* Flexbox für flexible Komponenten
* Fluide Schriftgrössen mit `calc()` 

---
## Web Components
Zur Wiederverwendbarkeit wurden wiederverwendbare Komponenten mit Web Components umgesetzt:
* `<web-component-header>`
* `<web-component-footer>`

### Vorteile:
* Wiederverwendbarer Code
* Klare Trennung von Struktur und Layout
* Zentrale Pflege von Navigation und Footer

---
## Navigation
* Responsives **Burger-Menü**
* Hervorhebung der aktiven Seite

---
## ♿ Barrierefreiheit (Accessibility)
Folgende Maßnahmen wurden umgesetzt:

* Semantische HTML-Struktur (`header`, `main`, `section`, `footer`)
* Alternativtexte für alle Bilder (`alt`)
* Einsatz von ARIA-Attributen
* Gute Lesbarkeit durch passende Schriftgrößen und Kontraste

---
## 🔧 Refactoring & Code-Optimierung
Im Verlauf des Projekts wurden folgende Verbesserungen umgesetzt:

* Wiederverwendbare Komponenten (Header/Footer)
* Dynamische Pfadberechnung für Links im Header und Footer (ROOT-System)
* Image/Logo durch svg ersetzt im Footer
* Alert Message in Form
* Tailwind an ausgesuchten Stellen eingesetzt
 * ergänzend zu bestehendem Styling
 * Funktionen ergänzend

---
## 💡 Erkenntnisse
* Web Components verbessern die Wiederverwendbarkeit von Code
  * sie sind aber für Erstbenutzer mit einigem Aufwand zu erlernen
* Responsive Design erfordert strukturierte Planung
* Semantik ist entscheidend für Barrierefreiheit
* CSS Grid und Flexbox ergänzen sich optimal
* Konzepte müssen je nach Ausgangslage überarbeitet werden

---
## 👩‍💻 Autorin
Laura Zaugg
BSc Informatik – IU Internationale Hochschule

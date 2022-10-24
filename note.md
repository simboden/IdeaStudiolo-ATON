# Virtual Studiolo test

## come eseguirlo
- installare Node
- scompattare lo zip in una cartella
- entrare nella cartella
> npm install
> nom start

## scopo
Questa demo replica usando threejs le funzionalita' del virtual studiolo che interessano la vista 3D.
L'intento e' quello di mettere a fuoco i punti di convergenza/divergenza da ATON,
e di seguito decidere come fare un porting su ATON.
Premetto che e' la prima volta che uso threejs, quindi potrebbero esserci errori grossolani,
se qualche feature non funziona bene, consiglio di vederla anche nello Studiolo ufficiale.

## funzionalita a comune con ATON

#### Mouse picking
il sistema sa sempre quale e' l'oggetto sotto il mouse.
Nella scena possono esserci oggetti passivi, e oggetti che possono attivare particolari eventi.

#### Hilighting
Gli oggetti 'sensibili' mostrano un hilight quando il mouse ci passa sopra

### Modalita' di spostamento della camera
L'utente puo' spostare il punto di vista facendo click sul pavimento 
( in realta' su un'area piu piccola del pavimento, per impediere di andare troppo vicino alle pareti )
Muovere il mouse su una superficie valida per lo spostamento mostra un feedback visivo specifico.

#### Modalita' di rotazione/pan/zoom della camera
Utilizza un oggetto OrbitController, la camera ruota facendo click-drag del mouse sinistro.
Pan e Zoom sono abilitati/disabilitati a seconda del modo di interazione scelto.

## Funzionalita' presenti nel Virtual studiolo e non in ATON

#### Tre modalita' di interazione
l'applicazione parte nella modalita' FP (first person)
Realizzata posizionando la camera all'altezza dell'occhio di una persona ( non si puo cambiare la y )
e mettendo il centro di rotazione (target) dell' OrbitControl a 10 cm di distanza dalla camera lungo la direzione dello sguardo.
In modo FP zoom e pan sono disabilita, ci si muove facendo click sul pavimento, il movimento e' animato. 
(la modalita' FP e' analoga a quella di ATON)

Un bottone permette di passare alla modalita' TP (third person)
Nella transizione la camera si allontana dal punto di vista FP, rivelando cosi l'avatar del player,
un billboard con la sagoma di isabella.
In questa modalita viene attivato lo zoom, che permette di avvicinarsi o allontanarsi dalla testa dell'avatar,
Il centro di rotazione rimane la testa dell'avatar.
In modalita' TP diventa possibile che degli ostacoli (muri o altro) si interpongano tra la camera ed il target, 
se questo succede, gli ostacoli vengono nascosti.
( se i muri sono dei piani e' sufficente il backface culling, ma nel caso generale non basta )

Un altro bottone permette di tornare dalla modalita' TP alla modalita FP, 
la transizione e' animata, la camera entra nella testa dell'avatar, l'avatar viene nascosto.

La terza modalita' di interazione e'  deltta closeup, e permette di  esaminare da vicino particolare modelli (artworks)
che possono trovarsi fuori dalla portata della modalita FP ( un quadro molto in alto, un obbetto molto in basso )
La modalita' closeup e' attivata facendo click su un artwork, la camera viene portata in una posizione adatta ad osservare il modello 
( il target va nel centro del modello, la camera viene messa di fronte ad una certa distanza, queste posizioni sono hardcoded, 
ma si potrebbero calcolare se i modelli fossero preparati secondo una certe convenzioni ).
In questa modalita' vengono attivati  sia Zoom che Pan. Posizione,rotazione e zoom della camera devono essere limitati 
per impedire alla camera di attraversare muri. ( questa cosa non e' implementata nella demo, ma puo' essere semplice se i modelli 
adottano opportune convenzioni )

Attivando la modalita' closeup viene mostrato un bottone "exit closeup", premendolo vengono ripristinate la modalita' e la posizione 
di camera precedenti. Nella modalita closeup e' anche possibile fare click su un artwork diverso, in questo caso si attiva 
una transizione da closeup-su-a a closeup-su-b

## Funzionalita' presenti ATON e non nella demo e non in ATON

- funzionamento su cellulare / tablet : 
  non mi aspetto grossi problemi riguardo l'interazione, forse dovremo prevedere modelli con livelli di dettaglio
   
- funzionamento in VR : 
  ripensare i sistemi di interazione, e le parti di interfaccia convenzionale
  
## Conclusioni  

Immagino che sia possibile impacchettare il tutto come una ATON-custom-web-app, utilizzando le funzionalita di ATON che riguardano il download dei modelli, e invece sostituendo le modalita di navigazione. Ma certamente si puo fare di meglio. Di questo ne parliamo a voce. 

## riferimenti 
- virtual studiolo ufficiale : http://ideastudiolo.hpc.cineca.it/isabella/virtual_studiolo
- minimal threejs app        : https://github.com/briangershon/threejs-minimal
- outline pass               : https://www.npmjs.com/package/three-outlinepass
- billboard                  : https://jsfiddle.net/prisoner849/w19d5km7/
- gsap animations            : https://www.npmjs.com/package/gsap



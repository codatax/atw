# atw - Algemene termijnenwet
## Overzicht
Dit package past de regels van de Algemene termijnenwet (hierna: Atw) toe bij de berekening van een termijn. Deze regels zijn van toepassing wanneer de einddatum van een termijn op een zaterdag, zondag of algemeen erkende feestdag eindigt.

## Classes
### Art. 1
**Property**
- _endDate_: Einddatum (Date).
- _term_: Termijn (Integer).
- _newEndDate_: Nieuw te berekenen einddatum (Date).

**Methods**
- _Art1Par1()_: Verlengt de eindtermijn (endDate), als deze op een zaterdag, zondag of algemeen erkende feestdag eindigt, tot en met de eerstvolgende dag die niet een zaterdag, zondag of feestdag is.
- _Art1Par2()_: Maakt de verlenging ongedaan wanneer de termijn is bepaald door terugrekening vanaf een tijdstip of een gebeurtenis (term < 0).

### Art. 2 
**Property**
- _endDate_: Einddatum (Date).
- _term_: Termijn (Integer).
- _termUnit_: Termijneenheid (String).
- _newEndDate_: Nieuw te berekenen einddatum (Date).
- _startDate_: Nieuw te berekenen ingangsdatum (Integer).

**Methods**
- _Art2()_: Verlengt een in de wet gestelde termijn van tenminste drie dagen zo nodig dat in de termijn ten minste twee dagen voorkomen die niet een zaterdag, zondag of een algemeen erkende feestdag zijn.

### Art. 3
**Defaults**
- Nieuwjaarsdag, de Christelijke tweede Paas- en Pinksterdag, de beide Kerstdagen, de Hemelvaartsdag, de dag waarop de verjaardag van de Koning wordt gevierd en de vijfde mei (Date).
- Goede Vrijdag (Date).
- Gepubliceerd in de Nederlandse Staatscourant (Date).

### Art. 4
**Property**
- _endDate_: Einddatum (Date).
- _term_: Aantal van de termijnbeschrijving (Integer).
- _termUnit_: Termijneenheid (String).
- _newEndDate_: Nieuw te berekenen einddatum (Date).
- _dumParB_: Dummy voor een termijn betreffende de bekendmaking, inwerkingtreding of buitenwerkingtreding van wettelijk voorschriften (Boolean).
- _dumParC_: Dummy voor een termijn van vrijheidsbeneming (Boolean).

**Methods**
- _Art4_: Maakt ten de verlenging (zie Art. 1 en Art. 2 Atw) ongedaan in geval de termijn is omschreven in uren, in meer dan 90 dagen, in meer dan twaalf weken, in meer dan drie maanden, of in een of meer jaren, of de termijn betreft de bekendmaking, inwerkingtreding of buitenwerkingtreding van wettellijke voorschriften, of de termijn betreft de termijn van vrijheidsbeneming.

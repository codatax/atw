# atw - Algemene termijnenwet
## Overzicht
Dit package past de regels van de Algemene termijnenwet (hierna: Atw) toe bij de berekening van een termijn. Deze regels zijn van toepassing wanneer de einddatum van een termijn op een zaterdag, zondag of algemeen erkende feestdag eindigt.

## Classes

## Art. 1
**Property**
- _endDate_: Einddatum (Date).
- _termDays_: Termijn in dagen (Integer).

**Methods**
- _Art1Par1(endDate)_: Verlengt de eindtermijn (endDate), als deze op een zaterdag, zondag of algemeen erkende feestdag eindigt, tot en met de eerstvolgende dag die niet een zaterdag, zondag of feestdag is.
- _Art1Par2(endDate, termDays)_: Maakt de verlenging ongedaan wanneer de termijn is bepaald door terugrekening vanaf een tijdstip of een gebeurtenis (term < 0).

## Art. 2 
**Property**
- _endDate_: Einddatum (Date).
- _termDays_: Termijn in dagen (Integer).

**Methods**
- _Art2(startDate, term)_: Verlengt een in de wet gestelde termijn van tenminste drie dagen zo nodig dat in de termijn ten minste twee dagen voorkomen die niet een zaterdag, zondag of een algemeen erkende feestdag zijn.

## Art. 3
**Property**
- _holidaysPar1_: Nieuwjaarsdag, de Christelijke tweede Paas- en Pinksterdag, de beide Kerstdagen, de Hemelvaartsdag, de dag waarop de verjaardag van de Koning wordt gevierd en de vijfde mei (Date).
- _holidaysPar2_: Goede Vrijdag (Date).
- _holidaysPar3_: Gepubliceerd in de Nederlandse Staatscourant (Date).

## Art. 4
**Property**
- _term_: Aantal van de termijnbeschrijving (Integer).
- _termDescription_: Beschrijving termijn (String: {hours, days, weaks, months, years, other}).
- _dummyParB_: Dummy voor een termijn betreffende de bekendmaking, inwerkingtreding of buitenwerkingtreding van wettelijk voorschriften (Boolean).
- _dummyParC_: Dummy voor een termijn van vrijheidsbeneming (Boolean).

**Methods**
- _Art4LetA(term, termDescription)_: Maakt de verlenging (zie Art. 1 en Art. 2 Atw) ongedaan in geval de termijn is omschreven in uren, in meer dan 90 dagen, in meer dan twaalf weken, in meer dan drie maanden, of in een of meer jaren.
- _Art4LetB()_: Maakt de verlenging (zie Art. 1 en Art. 2 Atw) ongedaan in geval de termijn betreft de bekendmaking, inwerkingtreding of buitenwerkingtreding van wettellijke voorschriften.
- _Art4LetC()_: Maakt de verlenging (zie Art. 1 en Art. 2 Atw) ongedaan in geval de termijn betreft de termijn van vrijheidsbeneming.

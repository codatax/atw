# atw - Algemene termijnenwet
## Overzicht
Dit package past de regels van de Algemene termijnenwet (hierna: Atw) toe bij de berekening van een termijn. Deze regels zijn van toepassing wanneer de einddatum van een termijn op een zaterdag, zondag of algemeen erkende feestdag eindigt.

## Classes

## Art. 1
**Property**
- endDate
- termDays

**Methods**
- Art1Par1(endDate): Verlengt de eindtermijn (endDate), als deze op een zaterdag, zondag of algemeen erkende feestdag eindigt, tot en met de eerstvolgende dag die niet een zaterdag, zondag of feestdag is.
- Art1Par2(endDate, termDays): Maakt de verlenging ongedaan wanneer de termijn is bepaald door terugrekening vanaf een tijdstip of een gebeurtenis (term < 0)

## Art. 2 
**Property**
- endDate
- term

**Methods**
- Art2(startDate, term): Verlengt een in de wet gestelde termijn van tenminste drie dagen zo nodig dat in de termijn ten minste twee dagen voorkomen die niet een zaterdag, zondag of een algemeen erkende feestdag zijn.

## Art. 3
**Property**
- holidaysPar1: Nieuwjaarsdag, de Christelijke tweede Paas- en Pinksterdag, de beide Kerstdagen, de Hemelvaartsdag, de dag waarop de verjaardag van de Koning wordt gevierd en de vijfde mei.
- holidaysPar2: Goede Vrijdag
- holidaysPar3: Gepubliceerd in de Nederlandse Staatscourant

## Art. 4
**Property**
- term: Aantal van de termijnbeschrijving;
- termDescription: Beschrijving termijn {hours, days, weaks, months, years, other};
- dummyParB: Dummy voor een termijn betreffende de bekendmaking, inwerkingtreding of buitenwerkingtreding van wettelijk voorschriften;
- dummyParC: Dummy voor een termijn van vrijheidsbeneming.

**Methods**
- Art4LetA(term, termDescription): Maakt de verlenging (zie Art. 1 en Art. 2 Atw) ongedaan in geval de termijn is omschreven in uren, in meer dan 90 dagen, in meer dan twaalf weken, in meer dan drie maanden, of in een of meer jaren;
- Art4LetB(): Maakt de verlenging (zie Art. 1 en Art. 2 Atw) ongedaan in geval de termijn betreft de bekendmaking, inwerkingtreding of buitenwerkingtreding van wettellijke voorschriften;
- Art4LetC(): Maakt de verlenging (zie Art. 1 en Art. 2 Atw) ongedaan in geval de termijn betreft de termijn van vrijheidsbeneming.


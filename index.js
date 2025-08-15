//Article 1
class Art1 {
  constructor({endDate, term, termUnit}){
    this.endDate = new Date(endDate);
    this.term = term;
    this.termUnit= termUnit; //hour, day, week, month, year
    this.newEndDate = new Date(endDate);
  }

  Art1Par1(){
    while (this.newEndDate.getDay() === 6 || this.newEndDate.getDay() === 0 || Art3.some(h => h.getTime() === this.newEndDate.getTime())){
      this.newEndDate.setDate(this.newEndDate.getDate() + 1)
      console.log('Einddatum aangepast als gevolg van Art1Par1', this.newEndDate)
    }
  }

  Art1Par2(){
    if (this.term < 0){
      this.newEndDate = this.endDate
      console.log('Einddatum aangepast als gevolg van Art1Par2', this.newEndDate)
    }
  }
}

//Article 2
class Art2 {
  constructor({endDate, term, termUnit, newEndDate}){
    this.endDate = new Date(endDate);
    this.term = term;
    this.termUnit= termUnit; //hour, day, week, month, year
    this.newEndDate = new Date(newEndDate);
    this.startDate = new Date(this.endDate);
  }

  Art2(){
    switch(this.termUnit) {
      case 'hour':
        this.startDate.setHours(this.startDate.getHours() - this.term)
        // console.log('in uren')
      break;
      case 'day':
        this.startDate.setDate(this.startDate.getDate() - this.term)
        // console.log('in dagen')
      break;
      case 'week':
        this.startDate.setDate(this.startDate.getDate() - this.term*7)
        // console.log('in weken')
      break;
     case 'month':
        this.startDate.setMonth(this.startDate.getMonth() - this.term)
        // console.log('in maanden')
      break;
     case 'year':
        this.startDate.setFullYear(this.startDate.getFullYear - this.term)
        // console.log('in jaren')
      break;
    }

    // console.log('Verschil', this.newEndDate, this.startDate, 'is', Math.floor((this.endDate - this.startDate)/(1000 * 60 * 60 * 24)) + 1)

    if (Math.ceil((this.endDate  - this.startDate)/(1000 * 60 * 60 * 24)) >= 3){
      let w = 0
      for (let i = new Date(this.startDate); i <= this.newEndDate; i.setDate(i.getDate() + 1)) {
            // console.log(i, i.getDay())
            if(i.getDay() !== 6 && i.getDay() !== 0 && !Art3.some(h => h.getTime() === i.getTime())) {
              w +=1 
            }
          }
      // console.log('Werkdagen in termijn', w)

      while (w < 2){
        // console.log("Voeg een extra dag toe", w)
        this.newEndDate.setDate(this.newEndDate.getDate() + 1)
        console.log('Einddatum aangepast als gevolg van Art2', this.newEndDate)
        if(this.newEndDate.getDay() !== 6 && this.newEndDate.getDay() !== 0 && !Art3.some(h => h.getTime() === this.newEndDate.getTime())){
          w ++
          // console.log(w)
        }
      } 
    }
  }
}

//Article 3
const Art3 = [
  new Date('2025-01-01'), //Nieuwjaarsdag: woensdag 1 januari 2025 (lid 1)
  new Date('2025-04-18'), //Goede Vrijdag: vrijdag 18 april 2025 (lid 1)
  new Date('2025-04-21'), //Tweede Paasdag: maandag 21 april 2025 (lid 1)
  new Date('2025-06-09'), //Tweede Pinksterdag: maandag 9 juni 2025 (lid 1)
  new Date('2025-12-25'), //Eerste Kerstdag: donderdag 25 december 2025 (lid 1)
  new Date('2025-12-26'), //Tweede Kerstdag: vrijdag 26 december 2025 (lid 1)
  new Date('2025-05-29'), //Hemelvaartsdag: donderdag 29 mei 2025 (lid 1)
  new Date('2025-04-26'), //Dag waarop de verjaardag van de Koning wordt gevierd: zaterdag 26 april 2025 (lid 1)
  new Date('2025-05-05'), //Vijfde mei: maandag 5 mei 2025 (lid 1)
  new Date('2025-04-18'), //Goede Vrijdag: vrijdag 18 april 2025 (lid 2)
];

//Article 4
class Art4 {
  constructor({endDate, term, termUnit, newEndDate,  dumParB, dumParC}){
    this.endDate = new Date(endDate);
    this.term = term;
    this.termUnit= termUnit; //hour, day, week, month, year
    this.newEndDate = new Date(newEndDate);
    this.dumParB = dumParB
    this.dumParC = dumParC
  } 

  Art4(){
    if ((this.termUnit =='hour')|| (this.term > 90 && this.termUnit == 'day')||(this.term > 12 && this.termUnit == 'week')||(this.term > 3 && this.termUnit == 'month')||(this.term >= 1 && this.termUnit == 'year')){
      this.newEndDate.setDate(this.endDate.getDate())
      console.log('Einddatum aangepast als gevolg van Artikel 4 onderdeel a', this.newEndDate)
    } else if (this.dumParB) {
      this.newEndDate.setDate(this.endDate.getDate())
      console.log('Einddatum aangepast als gevolg van Artikel 4 onderdeel b', this.newEndDate)
    } else if (this.dumParC) {
      this.newEndDate.setDate(this.endDate.getDate())
      console.log('Einddatum aangepast als gevolg van Artikel 4 onderdeel c', this.newEndDate)
    }
  }
}

module.exports = {
  Art1,
  Art2,
  Art4 };
document.title = 'My Magical Home Page';

const louisa = {
  naam: 'Louisa',
  leeftijd: 19,
  huisdieren: ['toekan', 'komodovaraan', 'capybara'],
  
  getBirthDate: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.leeftijd;
  },

  talk: function () {
    console.log('Hallo ik ben ' + this.naam, 'en ik ben ' + this.leeftijd + ' jaar oud. Ik ben geboren in ' + this.getBirthDate() + '.');
  },
  
  showPets: function () {
    console.log('Ik heb de volgende huisdieren:');
    for (let i = 0; i < this.huisdieren.length; i++) {
      console.log(this.huisdieren[i] + '.');
    }
  }

};

louisa.talk();
louisa.showPets();
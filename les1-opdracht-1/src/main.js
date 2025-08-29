document.title = 'My Magical Home Page';

const louisa = {
  naam: 'Louisa',
  leeftijd: 19,
  
  getBirthDate: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.leeftijd;
  },

  talk: function () {
    console.log('Hallo ik ben ' + this.naam, 'en ik ben ' + this.leeftijd + ' jaar oud. Ik ben geboren in ' + this.getBirthDate() + '.');
  },
  
};

louisa.talk();

const myFakeStore = {
  areas: {
    '6dddf310-be85-11e8-9baa-e309b0a245f4': {
      title: 'Ile d\'Egine',
      description: '-420 avant JC, Grèce antique',
      places: {
        '8c5682a8-be85-11e8-89e1-bf06710ff7a1': {
          name: 'Temple d\'Apollon',
          lastUpdate: Date.now(),
          icon: 'account_balance',
          active: true,
          modules: { 
            'dprotecteur': { label: 'Départ protecteur' },
            'dartiste': { label: 'Départ artiste'},
            'dartisan': { label: 'Départ artisan'},
            'dpenseur': { label: 'Départ penseur'},
            'templeapollon': { label: 'Temple Apollon'},
            'templeaphaia': { label: 'Temple Aphaia'},
            'plage': { label: 'Plage'},
          },
          moduleLinks: [
            { source: 'dprotecteur', target: 'templeapollon' },
            { source: 'dartiste', target: 'templeapollon' },
            { source: 'dartisan', target: 'templeapollon' },
            { source: 'dpenseur', target: 'templeapollon' },
            { source: 'templeapollon', target: 'plage' },
          ],
        },
        '62f4e186-bf5f-11e8-a059-97b4eb21fc3a': {
          name: 'Agora penseur',
          lastUpdate: Date.now(),
          icon: 'school',
          active: true,
        },
        '69d89dbc-bf5f-11e8-9cf7-8348c09faaa4': {
          name: 'Atelier artiste',
          lastUpdate: Date.now(),
          icon: 'brush',
          active: true,
        },
        '703165b8-bf5f-11e8-b862-2f07ea179189': {
          name: 'Gymnase protecteur',
          lastUpdate: Date.now(),
          icon: 'rowing',
          active: true,
        },
        '75c463e0-bf5f-11e8-bd40-13550a32778c': {
          name: 'Atelier artisan',
          lastUpdate: Date.now(),
          icon: 'domain',
          active: true,
        },
      }
    }
  }
};

export default myFakeStore;
const snakewaterMontana = {
    paleontologist: 'Dr. Alan Grant',
    depth: '10 meters',
    specimen: 'Velociraptor'
  }
const nicaragua = {
    depth: '200 meters',
    annualBudget: 1500000,
    specimens: [
      'Tyrannosaurus Rex',
      'Stegosaurous',
      'Triceratops',
      'Velociraptor'
    ]
  }
  const hammondsMines = {
    buenos_aires: {
      depth: '400 meters',
      annualBudget: 1000000,
      specimens: ['Dilophosaurus', 'Brachiosaurus']
    },
    mexico: {
      depth: '350 meters',
      annualBudget: 900000,
      specimens: ['Gallimimus', 'Parasaurolophus']
    }
  }
  //part 1
  const guestOfHonor = "Alex Barbosa";
  snakewaterMontana.paleontologist = guestOfHonor;
  let cleverGirl = snakewaterMontana.specimen;
  //part 2
  let nicaraguanSpecimens = nicaragua.specimens;
  let favoriteSpecimen = nicaragua.specimens[3];
  nicaragua.annualBudget += 250000;
  //part 3
  let jHMexicoDepth = hammondsMines.mexico.depth;
  let jHBABudget = hammondsMines.buenos_aires.annualBudget;

  hammondsMines.nicaragua = nicaragua;

  let budget1, budget2, budget3;
  budget1 = hammondsMines.buenos_aires.annualBudget;
  budget2 = hammondsMines.mexico.annualBudget;
  budget3 = hammondsMines.nicaragua.annualBudget;

  let totalCost = budget1+budget2+ budget3;

  console.log(snakewaterMontana.paleontologist);

  console.log(snakewaterMontana.specimen);

  console.log(hammondsMines.buenos_aires.specimens);

  console.log(hammondsMines.mexico.specimens[1])
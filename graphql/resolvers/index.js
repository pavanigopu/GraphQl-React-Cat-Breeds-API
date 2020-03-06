
const CatBreed = require("../../models/breed");

module.exports = {
    breeds: () => {
      return CatBreed.find()
        .then(breeds => {
          return breeds.map(breed => {
            return { ...breed._doc, _id: breed.id };
          })
        })
        .catch(err => {
          throw err;  
        });
    },
    createBreed: args => {
      const breed = new CatBreed({
        name: args.breedInput.name,
        description: args.breedInput.description,
        temperament: args.breedInput.temperament,
        origin: args.breedInput.origin
      });

      return breed.save()
        .then(result => {
          console.log(result);
          return { ...result._doc };
        })
        .catch(err => {
          console.error(err);
          throw err;
        });
    },
    breedById: args => {
      return CatBreed.findById(args.id)
        .then(breed => {
          return { ...breed._doc }
        })
        .catch(err => {
          throw err;
        });
    },
    searchByName: args => {
      return CatBreed.find()
        .then(breeds => {
          return breeds.filter(breed => {
            if (breed.name.includes(args.name)) {
              return { ...breed._doc };
            }
          })
        })
        .catch(err => {
          throw err;  
        });
    }
  }
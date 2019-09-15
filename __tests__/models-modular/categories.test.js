const Categories = require('../../models-modular/categories/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Modular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let newCategory = { name: 'Coats', description: 'For cold weather' };
    return categories.create(newCategory)
      .then((savedCategory) => {
        Object.keys(newCategory).forEach((key) => {
          expect(savedCategory[key]).toEqual(newCategory[key]);
        });
      });
  });

  it('can get() a category', () => {
    let newCategory = { name: 'Pants', description: 'For your legs' };
    return categories.create(newCategory)
      .then((savedCategory) => {
        return categories.get(savedCategory._id)
          .then((returnedCategory) => {
            Object.keys(newCategory).forEach((key) => {
              expect(returnedCategory[key]).toEqual(newCategory[key]);
            });
          });
      });
  });

  it('can get() all categories', () => {
    let newCategory = { name: 'Coats', description: 'For cold weather' };
    let newCategory2 = { name: 'Pants', description: 'For your legs' };
    return categories.create(newCategory)
      .then(() => {
        return categories.create(newCategory2);
      })
      .then((savedCategory) => {
        return categories.get();
      })
      .then((foundCategory) => {
        expect(foundCategory.count).toEqual(4);
      });
  });

  it('can update() a category', () => {
    let newCategory = { name: 'Pants', description: 'For your legs' };
    return categories.create(newCategory)
      .then((savedCategory) => {
        return categories.get(savedCategory._id)
          .then((returnedCategory) => {
            return categories.update(returnedCategory._id, { name: 'Glasses', description: 'For your face' })
              .then((updatedCategory) => {
                expect(updatedCategory.name).toEqual('Glasses');
              });
          });
      });
  });

  it('can delete() a category', () => {
    let newCategory = { name: 'Pants', description: 'For your legs' };
    return categories.create(newCategory)
      .then((savedCategory) => {
        return categories.get(savedCategory._id)
          .then((returnedCategory) => {
            return categories.delete(returnedCategory._id)
              .then((deletedCategory) => {
                return categories.get(deletedCategory._id);
              })
              .then((categories) => {
                expect(categories).toEqual(null);
              });
          });
      });
  });

});
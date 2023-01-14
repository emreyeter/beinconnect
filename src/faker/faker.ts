import {faker} from '@faker-js/faker'


const fakeCategory = faker.helpers.uniqueArray(faker.vehicle.type,10).map((name) => {
    return {
        id: faker.datatype.uuid(),
        name
    }
})


const fakeProduct = new Array(200).fill(null).map(() => {
    return {
        id: faker.datatype.uuid(),
        model : faker.lorem.words(2) ,
        price: faker.datatype.number(1000),
        category: faker.helpers.arrayElement(fakeCategory),
        image : faker.image.imageUrl(200,200, 'movie', true),
        image_hq : faker.image.imageUrl(1440,350, 'movie', true),
        year: faker.datatype.number({min: 1990, max: 2020}),
        rating: faker.datatype.number({min: 1, max: 5, precision: 0.1}),
        description: faker.lorem.paragraphs(3),
    }
})



export {fakeCategory, fakeProduct}
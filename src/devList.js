import { faker } from '@faker-js/faker';

const devList = [
    {
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "position" : faker.person.jobTitle(),
        "rating": "⭐" + faker.number.float({min: 1, max: 5, precision: 0.1})
    },
    {
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "position" : faker.person.jobTitle(),
        "rating": "⭐" + faker.number.float({min: 1, max: 5, precision: 0.1})
    },
    {
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "position" : faker.person.jobTitle(),
        "rating": "⭐" + faker.number.float({min: 1, max: 5, precision: 0.1})
    },
    {
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "position" : faker.person.jobTitle(),
        "rating": "⭐" + faker.number.float({min: 1, max: 5, precision: 0.1})
    }
]

export default devList
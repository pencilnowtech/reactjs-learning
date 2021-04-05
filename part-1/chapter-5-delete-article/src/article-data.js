import faker from 'faker'

export const articles = [
	{
		id: 1,
		title: 'Deep Learning for Coders',
		rating: faker.random.number(5),
		img: faker.image.abstract(),
		author: faker.name.findName()
	},
	{
		id: 2,
		title: 'Journey of ReactJS in small steps',
		rating: faker.random.number(5),
		img: faker.image.business(),
		author: faker.name.findName()
	},
	{
		id: 3,
		title: 'First Deep Learning model',
		rating: faker.random.number(5),
		img: faker.image.technics(),
		author: faker.name.findName()
	},
];

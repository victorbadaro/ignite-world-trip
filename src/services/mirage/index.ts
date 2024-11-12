import { createServer, Model } from 'miragejs';

type Continent = {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
};

const continents: Continent[] = [
	{
		id: 1,
		name: 'Europa',
		description: 'O continente mais antigo.',
		imageUrl:
			'https://images.unsplash.com/photo-1490642914619-7955a3fd483c?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 2,
		name: 'América do Norte',
		description: 'O novo mundo.',
		imageUrl:
			'https://images.unsplash.com/photo-1699689940779-4624e64a31a0?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 3,
		name: 'América do Sul',
		description: 'O coração vibrante do mundo.',
		imageUrl:
			'https://images.unsplash.com/photo-1547920295-ecea779c2a24?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 4,
		name: 'Ásia',
		description: 'A alma do mundo em cada horizonte.',
		imageUrl:
			'https://images.unsplash.com/photo-1562749076-4fd06fc26134?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 5,
		name: 'África',
		description: 'Terra de origens, rica em almas e sonhos.',
		imageUrl:
			'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 6,
		name: 'Oceania',
		description: 'Onde o horizonte toca o infinito.',
		imageUrl:
			'https://images.unsplash.com/photo-1656177054067-e18d932a7ee7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	}
];

export function makeServer() {
	const server = createServer({
		models: {
			continent: Model.extend<Continent>({} as Continent)
		},

		seeds(server) {
			server.db.loadData({
				continents
			});
		},

		routes() {
			this.namespace = 'api';

			this.get('/continents');

			this.namespace = '';
			this.passthrough();
		}
	});

	return server;
}
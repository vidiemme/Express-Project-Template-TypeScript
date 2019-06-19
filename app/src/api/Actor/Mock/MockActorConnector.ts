var db = [
    {
        actor_id: "aaaaaaaaaaa",
        actor_name: "Harrison",
        actor_surname: "Ford",
    },
    {
        actor_id: "bbbbbbbbbbb",
        actor_name: "Will",
        actor_surname: "Smith",
    },
    {
        actor_id: "ccccccccccc",
        actor_name: "Leonardo",
        actor_surname: "Di Caprio",
    },
    {
        actor_id: "ddddddddddd",
        actor_name: "Julia",
        actor_surname: "Roberts",
	},
	{
        actor_id: "eeeeeeeeeee",
        actor_name: "Sandra",
        actor_surname: "Bullock",
	},
	{
        actor_id: "fffffffffff",
        actor_name: "Nicole",
        actor_surname: "Kidman",
    }
]

import { IActorConnector } from "../ActorInterfaces";
import { Actor } from "../ActorModels";

export const MockActorConnector: IActorConnector = {

	async actor(id: string): Promise<Actor | null> {
		for (let i = 0; i < db.length; i++) {
			const element = db[i];
			if (element.actor_id === id) {
				return new Actor(element.actor_id, element.actor_name, element.actor_surname);
			}
		}
		return null;
	},

	async actors(): Promise<Array<Actor>> {
		return db.map( i => { return new Actor(i.actor_id, i.actor_name, i.actor_surname); });
	},

	async findActors(query: string): Promise<Array<Actor>> {
		return db.map( i => { return new Actor(i.actor_id, i.actor_name, i.actor_surname); });
	}
}

console.log("[ActorAPI] Using mocked ActorsAPI Actor Connector");
import { IActorDataHandler } from "../ActorInterfaces";
import { Actor } from "../ActorModels";

export const MockActorDataHandler: IActorDataHandler = {
	async actors(actors: Array<Actor>): Promise<Array<Actor>> {
		return actors;
	},

	async actor(id: string, actor: Actor | null): Promise<Actor | null> {
		return actor;
	},

	async findActors(query: string, actors: Array<Actor>): Promise<Array<Actor>> {
		return actors;
	}
}

console.log("[ActorAPI] Using mocked ActorsAPI Actor Data Handler");
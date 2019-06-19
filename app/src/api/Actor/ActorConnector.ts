import { IActorConnector } from "./ActorInterfaces";
import { Actor } from "./ActorModels";

export const ActorConnector: IActorConnector = {

	async actor(id: string): Promise<Actor | null> {
		return new Actor(id, "Name", "Surname");
	},

	async actors(): Promise<Array<Actor>> {
		return [];
	},

	async findActors(query: string): Promise<Array<Actor>> {
		return [];
	}
}
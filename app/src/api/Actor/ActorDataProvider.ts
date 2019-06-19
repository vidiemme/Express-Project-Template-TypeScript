import { IActorDataProvider, IActorDataHandler, IActorConnector } from "./ActorInterfaces";
import { ActorDataHandler } from "./ActorDataHandler";
import { ActorConnector } from "./ActorConnector";
import { Actor } from "./ActorModels";

var dataHandler: IActorDataHandler = ActorDataHandler;
var connector: IActorConnector = ActorConnector;

export const ActorDataProvider: IActorDataProvider =  {

	async actor(id: string): Promise<Actor | null> {
		let actor = await connector.actor(id);
		return await dataHandler.actor(id, actor);
	},

	async actors(): Promise<Array<Actor>> {
		let actors = await connector.actors();
		return await dataHandler.actors(actors);
	},

	async findActors(query: string): Promise<Array<Actor>> {
		let actors = await connector.findActors(query);
		return await dataHandler.findActors(query, actors);
	},

	get dataHandler(): IActorDataHandler { return dataHandler; },
	set dataHandler(newValue: IActorDataHandler) { dataHandler = newValue; },
	get dataConnector(): IActorConnector { return connector; },
	set dataConnector(newValue: IActorConnector) { connector = newValue; }
}

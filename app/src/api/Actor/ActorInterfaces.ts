import { Actor } from "./ActorModels";

export interface IActorConnector {
	actors(): Promise<Array<Actor>>;
	actor(id: string): Promise<Actor | null>;
	findActors(query: string): Promise<Array<Actor>>;
}

export interface IActorDataHandler {
	actors(actors: Array<Actor>): Promise<Array<Actor>>;
	actor(id: string, actor: Actor | null): Promise<Actor | null>;
	findActors(query: string, actors: Array<Actor>): Promise<Array<Actor>>;
}

export interface IActorDataProvider {
	actors(): Promise<Array<Actor>>;
	actor(id: string): Promise<Actor | null>;
	findActors(query: string): Promise<Array<Actor>>;
	dataHandler: IActorDataHandler;
	dataConnector: IActorConnector;
}
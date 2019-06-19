
import { Request, Response, NextFunction, Router } from "express";
import { IActorDataProvider } from "./ActorInterfaces";
import { ActorDataProvider } from "./ActorDataProvider";
import { MockActorConnector } from "./Mock/MockActorConnector";

export class ActorAPI {

	dataProvider: IActorDataProvider

    constructor(private router: Router, dataProvider: IActorDataProvider = ActorDataProvider) { 
		this.dataProvider = dataProvider;
	}

    attach() {
        this.router.get("/actor/:id", (req, res, next) => this.actor(req, res, next));
	}
	
	prepareForTests() {
		this.dataProvider.dataConnector = MockActorConnector;
	}

    private async actor(req: Request, res: Response, _next: NextFunction) {
		let id = req.params.id;
		let result = await this.dataProvider.actor(id);
		if (result != null) {
			res.send(result);
		} else {
			res.status(404);
			res.send({ error: 'Actor not found' });
		}
    }
}
import { Router } from "express";
import { ActorAPI } from "./Actor/ActorAPI";

export class APIs {

	actorAPI: ActorAPI
	
	constructor(private router: Router) {
		this.actorAPI = new ActorAPI(this.router);
	}

	attachAPIs() {
		this.actorAPI.attach();
	}

	prepareForTests() {
		this.actorAPI.prepareForTests();
	}
}
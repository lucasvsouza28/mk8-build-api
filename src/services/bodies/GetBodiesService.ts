import Stats from '@entities/stats';
import EmptyListException from "../../exceptions/EmptyListException";
import data from "./bodies-data";

export type GetBodiesServiceResponse = {
    items: Stats[];
}

export interface IGetBodiesService {
    execute: () => Promise<GetBodiesServiceResponse>;
}

export default class GetBodiesService implements IGetBodiesService {
    constructor(){}

    async execute(): Promise<GetBodiesServiceResponse> {
        const items: Stats[] = data;

        if (!items.length) throw new EmptyListException('body');

        return {
            items
        } as GetBodiesServiceResponse;
    }
}
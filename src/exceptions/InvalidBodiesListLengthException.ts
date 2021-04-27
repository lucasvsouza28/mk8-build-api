export default class InvalidBodiesListLengthException extends Error {
    constructor(message: string = 'invalid bodies list length'){
        super(message)
    }
}
import express from 'express';

export type expressCD = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => void;

export type expressErrorCd = (
    error: Error,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => void;

export type expressPromiseCd = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => Promise<void>;
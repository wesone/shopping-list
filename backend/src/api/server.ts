import express from 'express';
import type { NextFunction, Request, RequestHandler, Response } from 'express';
import cors from 'cors';
import registerHandlers from './utils/registerHandlers.ts';

interface ServerConfig {
    port: number
}

export interface APIHandler {
    /**
     * Define the route for this handler. If not provided, the directory structure will define the route.
     */
    route?: string,
    method: "all" | "get" | "post" | "put" | "delete" | "patch" | "options" | "head",
    handler: RequestHandler
}

export default async (config: ServerConfig) => {
    const app = express();

    app.use(express.json());
    app.use(cors());

    await registerHandlers(app, import.meta.dirname + '/handlers');

    app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
        const httpErr = err as { status?: number; message?: string } | undefined;
        if (!isNaN(httpErr?.status as number) && httpErr?.message) {
            res.set('Content-Type', 'application/json');
            res.status(httpErr.status ?? 500).send(httpErr.message);
            return next();
        }
        next(err);
    });

    const server = app.listen(config.port, () => {
        console.log(`Application started on port ${config.port}...`);
    });

    return { app, server };
};

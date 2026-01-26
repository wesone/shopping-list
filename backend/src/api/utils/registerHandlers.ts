import fs from 'node:fs/promises';
import path from 'node:path';
import type { Application } from 'express';
import type { APIHandler } from '../server.ts';

const importHandlers = async (dirPath: string) => {
    const handlers: (APIHandler & { route: string })[] = [];

    const directoryEntries = (await fs.readdir(dirPath, { withFileTypes: true, recursive: true }))
        .filter(dirent => dirent.isFile() && dirent.name.endsWith('.ts'));

    await Promise.all(
        directoryEntries
            .map(async dirent => {
                const { default: module } = await import(path.join(dirent.parentPath, dirent.name));
                const directoryRoute = [
                    dirent.parentPath.replace(dirPath, ''),
                    path.basename(dirent.name, path.extname(dirent.name))
                ];
                if (typeof module?.handler === 'function')
                    handlers.push({
                        method: module.method,
                        route: module.route ?? directoryRoute.join('/'),
                        handler: module.handler
                    });
            })
    );

    return handlers;
};

export default async (app: Application, dirPath: string) => {
    (await importHandlers(dirPath))
        .map(({method, route, handler}) => app[method](route, handler));
};

import createServer from './api/server.ts';
import { connect as connectToDatabase, disconnect as disconnectFromDatabase } from './repository/Mongoose.ts';

connectToDatabase();

const { server } = await createServer({ 
    port: process.env.PORT ? Number(process.env.PORT) : 8080 
});

function enableGracefulShutdown() {
    [
        'SIGTERM',
        'SIGINT',
        'SIGUSR2'
    ].forEach(type => {
        process.once(type, async () => {
            try {
                await new Promise<void>((resolve, reject) => server.close(
                    err => err ? reject(err) : resolve()
                ));
                await disconnectFromDatabase();
                console.log('Application was gracefully shut down...');
            }
            finally {
                process.kill(process.pid, type);
            }
        });
    });
}

enableGracefulShutdown();

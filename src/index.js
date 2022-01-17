import config from "../config/default.cjs";
import routes from "./routes/index.js";
import Server from "./Server.js";
import databaseProvider from "./DatabaseProvider.js";
const run = async () => {
  console.log(config)
  
  try {
    await databaseProvider.testConnection();
    const server = new Server(config.cors_options, config.options.public_routes_prefix, config.options.private_routes_prefix);
    server.addRoutes(routes);
    server.start(
      config.options.port,
      config.security.key_path,
      config.security.cert_path
    );
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
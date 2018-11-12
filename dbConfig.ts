let cosmosDbConfig: any = {};

cosmosDbConfig.host = process.env.HOST || 'https://mapipana.documents.azure.com:443/';
cosmosDbConfig.authKey = process.env.AUTH_KEY || 'OjiVaxQEg5JUWBQfzJj6WdVHhRmVYH8ubf6eFxwNQtYXj9kpuiXkQFSUvP3BDf3DRidPBOths7Pv2DKbi7I8cQ==';

export {cosmosDbConfig};
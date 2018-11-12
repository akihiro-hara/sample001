"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cosmos_1 = require("@azure/cosmos");
const dbConfig_1 = require("./dbConfig");
class DbRepository {
    constructor(docClient) {
        this.docClient = docClient;
    }
    init() {
        let SqlQuerySpec = {
            query: 'SELECT * FROM root r WHERE r.id= @id',
            parameters: [{
                    name: '@id',
                    value: 'SampleDB'
                }]
        };
    }
    getItems() {
        let querySpec = {
            query: 'SELECT * FROM root',
            parameters: []
        };
        console.log(this.docClient);
        cosmosClient.database("SampleDB").container("pipa").read().catch(e => { console.log(e); });
    }
}
let cosmosClient = new cosmos_1.CosmosClient({ endpoint: dbConfig_1.cosmosDbConfig.host, auth: { masterKey: dbConfig_1.cosmosDbConfig.authKey } });
let cosmosDb = new DbRepository(cosmosClient);
cosmosDb.init();
cosmosDb.getItems();
// export {cosmosDb};
//# sourceMappingURL=dbRepository.js.map
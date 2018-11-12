import {CosmosClient, SqlQuerySpec, ContainerResponse} from '@azure/cosmos';
import {cosmosDbConfig} from './dbConfig';

class DbRepository{
    docClient: CosmosClient;
    constructor(docClient: CosmosClient){
        this.docClient = docClient;
    }

    init(){

        let SqlQuerySpec: any = {
            query: 'SELECT * FROM root r WHERE r.id= @id',
            parameters: [{
                name: '@id',
                value: 'SampleDB'
            }]
        };

    }

    getItems(){
        let querySpec: SqlQuerySpec  = {
            query: 'SELECT * FROM root',
            parameters: []
        };

        console.log(this.docClient);

        cosmosClient.database("SampleDB").container("pipa").read().catch(e => {console.log(e);});
    }

}

let cosmosClient = new CosmosClient({ endpoint: cosmosDbConfig.host, auth: { masterKey: cosmosDbConfig.authKey} });

let cosmosDb = new DbRepository(cosmosClient);
cosmosDb.init();

cosmosDb.getItems();

// export {cosmosDb};
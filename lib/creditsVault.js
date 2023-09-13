"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
function isSigningCosmWasmClient(client) {
    return 'execute' in client;
}
class Client {
    client;
    contractAddress;
    constructor(client, contractAddress) {
        this.client = client;
        this.contractAddress = contractAddress;
    }
    mustBeSigningClient() {
        return new Error("This client is not a SigningCosmWasmClient");
    }
    static async instantiate(client, sender, codeId, initMsg, label, initCoins, fees) {
        const res = await client.instantiate(sender, codeId, initMsg, label, fees, {
            ...(initCoins && initCoins.length && { funds: initCoins }),
        });
        return res;
    }
    queryConfig = async () => {
        return this.client.queryContractSmart(this.contractAddress, { config: {} });
    };
    queryVotingPowerAtHeight = async (args) => {
        return this.client.queryContractSmart(this.contractAddress, { voting_power_at_height: args });
    };
    queryTotalPowerAtHeight = async () => {
        return this.client.queryContractSmart(this.contractAddress, { total_power_at_height: {} });
    };
    queryBondingStatus = async (args) => {
        return this.client.queryContractSmart(this.contractAddress, { bonding_status: args });
    };
    queryDao = async () => {
        return this.client.queryContractSmart(this.contractAddress, { dao: {} });
    };
    queryName = async () => {
        return this.client.queryContractSmart(this.contractAddress, { name: {} });
    };
    queryDescription = async () => {
        return this.client.queryContractSmart(this.contractAddress, { description: {} });
    };
    queryListBonders = async () => {
        return this.client.queryContractSmart(this.contractAddress, { list_bonders: {} });
    };
    queryInfo = async () => {
        return this.client.queryContractSmart(this.contractAddress, { info: {} });
    };
    updateConfig = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { update_config: args }, fee || "auto", memo, funds);
    };
    bond = async (sender, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { bond: {} }, fee || "auto", memo, funds);
    };
    unbond = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { unbond: args }, fee || "auto", memo, funds);
    };
}
exports.Client = Client;

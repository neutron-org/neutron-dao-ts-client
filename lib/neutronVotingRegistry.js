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
    queryDao = async () => {
        return this.client.queryContractSmart(this.contractAddress, { dao: {} });
    };
    queryConfig = async () => {
        return this.client.queryContractSmart(this.contractAddress, { config: {} });
    };
    queryVotingVaults = async () => {
        return this.client.queryContractSmart(this.contractAddress, { voting_vaults: {} });
    };
    queryVotingPowerAtHeight = async (args) => {
        return this.client.queryContractSmart(this.contractAddress, { voting_power_at_height: args });
    };
    queryTotalPowerAtHeight = async () => {
        return this.client.queryContractSmart(this.contractAddress, { total_power_at_height: {} });
    };
    queryInfo = async () => {
        return this.client.queryContractSmart(this.contractAddress, { info: {} });
    };
    addVotingVault = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { add_voting_vault: args }, fee || "auto", memo, funds);
    };
    deactivateVotingVault = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { deactivate_voting_vault: args }, fee || "auto", memo, funds);
    };
    activateVotingVault = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { activate_voting_vault: args }, fee || "auto", memo, funds);
    };
    updateConfig = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { update_config: args }, fee || "auto", memo, funds);
    };
}
exports.Client = Client;

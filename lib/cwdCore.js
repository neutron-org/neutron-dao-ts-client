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
    queryDumpState = async () => {
        return this.client.queryContractSmart(this.contractAddress, { dump_state: {} });
    };
    queryGetItem = async (args) => {
        return this.client.queryContractSmart(this.contractAddress, { get_item: args });
    };
    queryListItems = async () => {
        return this.client.queryContractSmart(this.contractAddress, { list_items: {} });
    };
    queryProposalModules = async () => {
        return this.client.queryContractSmart(this.contractAddress, { proposal_modules: {} });
    };
    queryActiveProposalModules = async () => {
        return this.client.queryContractSmart(this.contractAddress, { active_proposal_modules: {} });
    };
    queryPauseInfo = async () => {
        return this.client.queryContractSmart(this.contractAddress, { pause_info: {} });
    };
    queryVotingModule = async () => {
        return this.client.queryContractSmart(this.contractAddress, { voting_module: {} });
    };
    queryListSubDaos = async () => {
        return this.client.queryContractSmart(this.contractAddress, { list_sub_daos: {} });
    };
    queryGetSubDao = async (args) => {
        return this.client.queryContractSmart(this.contractAddress, { get_sub_dao: args });
    };
    queryDaoURI = async () => {
        return this.client.queryContractSmart(this.contractAddress, { dao_u_r_i: {} });
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
    executeProposalHook = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { execute_proposal_hook: args }, fee || "auto", memo, funds);
    };
    pause = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { pause: args }, fee || "auto", memo, funds);
    };
    removeItem = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { remove_item: args }, fee || "auto", memo, funds);
    };
    setItem = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { set_item: args }, fee || "auto", memo, funds);
    };
    updateConfig = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { update_config: args }, fee || "auto", memo, funds);
    };
    updateProposalModules = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { update_proposal_modules: args }, fee || "auto", memo, funds);
    };
    updateVotingModule = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { update_voting_module: args }, fee || "auto", memo, funds);
    };
    updateSubDaos = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { update_sub_daos: args }, fee || "auto", memo, funds);
    };
}
exports.Client = Client;

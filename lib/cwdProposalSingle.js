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
    queryProposal = async (args) => {
        return this.client.queryContractSmart(this.contractAddress, { proposal: args });
    };
    queryListProposals = async () => {
        return this.client.queryContractSmart(this.contractAddress, { list_proposals: {} });
    };
    queryReverseProposals = async () => {
        return this.client.queryContractSmart(this.contractAddress, { reverse_proposals: {} });
    };
    queryProposalCount = async () => {
        return this.client.queryContractSmart(this.contractAddress, { proposal_count: {} });
    };
    queryGetVote = async (args) => {
        return this.client.queryContractSmart(this.contractAddress, { get_vote: args });
    };
    queryListVotes = async (args) => {
        return this.client.queryContractSmart(this.contractAddress, { list_votes: args });
    };
    queryProposalCreationPolicy = async () => {
        return this.client.queryContractSmart(this.contractAddress, { proposal_creation_policy: {} });
    };
    queryProposalHooks = async () => {
        return this.client.queryContractSmart(this.contractAddress, { proposal_hooks: {} });
    };
    queryVoteHooks = async () => {
        return this.client.queryContractSmart(this.contractAddress, { vote_hooks: {} });
    };
    queryDao = async () => {
        return this.client.queryContractSmart(this.contractAddress, { dao: {} });
    };
    queryInfo = async () => {
        return this.client.queryContractSmart(this.contractAddress, { info: {} });
    };
    propose = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { propose: args }, fee || "auto", memo, funds);
    };
    vote = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { vote: args }, fee || "auto", memo, funds);
    };
    execute = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { execute: args }, fee || "auto", memo, funds);
    };
    close = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { close: args }, fee || "auto", memo, funds);
    };
    updateConfig = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { update_config: args }, fee || "auto", memo, funds);
    };
    updatePreProposeInfo = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { update_pre_propose_info: args }, fee || "auto", memo, funds);
    };
    addProposalHook = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { add_proposal_hook: args }, fee || "auto", memo, funds);
    };
    removeProposalHook = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { remove_proposal_hook: args }, fee || "auto", memo, funds);
    };
    addVoteHook = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { add_vote_hook: args }, fee || "auto", memo, funds);
    };
    removeVoteHook = async (sender, args, fee, memo, funds) => {
        if (!isSigningCosmWasmClient(this.client)) {
            throw this.mustBeSigningClient();
        }
        return this.client.execute(sender, this.contractAddress, { remove_vote_hook: args }, fee || "auto", memo, funds);
    };
}
exports.Client = Client;

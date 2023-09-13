import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult, InstantiateResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Coin } from "@cosmjs/amino";
export interface InstantiateMsg {
    description: string;
    name: string;
    owner: string;
    vesting_contract_address: string;
    [k: string]: unknown;
}
/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 */
export type Uint128 = string;
/**
 * A human readable address.
 *
 * In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.
 *
 * This type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.
 *
 * This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.
 */
export type Addr = string;
/**
 * A human readable address.
 *
 * In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.
 *
 * This type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.
 *
 * This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.
 */
export type Addr1 = string;
export type String = string;
export type ArrayOfTupleOf_AddrAnd_Uint128 = [Addr, Uint128][];
export type String1 = string;
export interface InvestorsVestingVaultSchema {
    responses: BondingStatusResponse | Config | Addr1 | String | InfoResponse | ArrayOfTupleOf_AddrAnd_Uint128 | String1 | TotalPowerAtHeightResponse | VotingPowerAtHeightResponse;
    query: VotingPowerAtHeightArgs | BondingStatusArgs;
    execute: UpdateConfigArgs | UnbondArgs;
    [k: string]: unknown;
}
export interface BondingStatusResponse {
    bonding_enabled: boolean;
    height: number;
    unbondable_abount: Uint128;
    [k: string]: unknown;
}
export interface Config {
    description: string;
    name: string;
    owner: Addr;
    vesting_contract_address: Addr;
    [k: string]: unknown;
}
export interface InfoResponse {
    info: ContractVersion;
    [k: string]: unknown;
}
export interface ContractVersion {
    /**
     * contract is the crate name of the implementing contract, eg. `crate:cw20-base` we will use other prefixes for other languages, and their standard global namespacing
     */
    contract: string;
    /**
     * version is any string that this implementation knows. It may be simple counter "1", "2". or semantic version on release tags "v0.7.0", or some custom feature flag list. the only code that needs to understand the version parsing is code that knows how to migrate from the given contract (and is tied to it's implementation somehow)
     */
    version: string;
}
export interface TotalPowerAtHeightResponse {
    height: number;
    power: Uint128;
    [k: string]: unknown;
}
export interface VotingPowerAtHeightResponse {
    height: number;
    power: Uint128;
    [k: string]: unknown;
}
export interface VotingPowerAtHeightArgs {
    address: string;
    height?: number | null;
}
export interface BondingStatusArgs {
    address: string;
    height?: number | null;
}
export interface UpdateConfigArgs {
    description?: string | null;
    name?: string | null;
    owner?: string | null;
    vesting_contract_address?: string | null;
    [k: string]: unknown;
}
export interface UnbondArgs {
    amount: Uint128;
    [k: string]: unknown;
}
export declare class Client {
    private readonly client;
    contractAddress: string;
    constructor(client: CosmWasmClient | SigningCosmWasmClient, contractAddress: string);
    mustBeSigningClient(): Error;
    static instantiate(client: SigningCosmWasmClient, sender: string, codeId: number, initMsg: InstantiateMsg, label: string, initCoins?: readonly Coin[], fees?: StdFee | 'auto' | number): Promise<InstantiateResult>;
    queryConfig: () => Promise<Config>;
    queryVotingPowerAtHeight: (args: VotingPowerAtHeightArgs) => Promise<VotingPowerAtHeightResponse>;
    queryTotalPowerAtHeight: () => Promise<TotalPowerAtHeightResponse>;
    queryBondingStatus: (args: BondingStatusArgs) => Promise<BondingStatusResponse>;
    queryDao: () => Promise<Addr>;
    queryName: () => Promise<String>;
    queryDescription: () => Promise<String>;
    queryListBonders: () => Promise<ArrayOfTupleOf_AddrAnd_Uint128>;
    queryInfo: () => Promise<InfoResponse>;
    updateConfig: (sender: string, args: UpdateConfigArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    bond: (sender: string, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    unbond: (sender: string, args: UnbondArgs, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}

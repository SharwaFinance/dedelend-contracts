/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IHegicStrategy } from "./IHegicStrategy";

export class IHegicStrategyFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IHegicStrategy {
    return new Contract(address, _abi, signerOrProvider) as IHegicStrategy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "optionID",
        type: "uint256",
      },
    ],
    name: "exercise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "priceProvider",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "priceProvider",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "optionID",
        type: "uint256",
      },
    ],
    name: "profitOf",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "strategyData",
    outputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "strike",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

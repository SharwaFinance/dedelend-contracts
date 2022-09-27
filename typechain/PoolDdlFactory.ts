/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PoolDdl } from "./PoolDdl";

export class PoolDdlFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    ddlContract1: string,
    ddlContract2: string,
    overrides?: Overrides
  ): Promise<PoolDdl> {
    return super.deploy(
      _token,
      ddlContract1,
      ddlContract2,
      overrides || {}
    ) as Promise<PoolDdl>;
  }
  getDeployTransaction(
    _token: string,
    ddlContract1: string,
    ddlContract2: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      ddlContract1,
      ddlContract2,
      overrides || {}
    );
  }
  attach(address: string): PoolDdl {
    return super.attach(address) as PoolDdl;
  }
  connect(signer: Signer): PoolDdlFactory {
    return super.connect(signer) as PoolDdlFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolDdl {
    return new Contract(address, _abi, signerOrProvider) as PoolDdl;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "ddlContract1",
        type: "address",
      },
      {
        internalType: "address",
        name: "ddlContract2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Provide",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "INITIAL_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "addTotalLocked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "changeOpenDeDeLend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ddlContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxDepositAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "openDeDeLend",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minShare",
        type: "uint256",
      },
    ],
    name: "provideFrom",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "shareOf",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "subTotalLocked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalLocked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600019600655600a805460ff191660011790553480156200002457600080fd5b50604051620018603803806200186083398101604081905262000047916200021f565b6040518060400160405280600b81526020016a15dc9a5d1a5b99c811111360aa1b8152506040518060400160405280600381526020016211111360ea1b815250620000a16200009b6200012560201b60201c565b62000129565b8151620000b690600490602085019062000179565b508051620000cc90600590602084019062000179565b5050600880546001600160a01b0319166001600160a01b0395861617905550908216600090815260076020526040808220805460ff199081166001908117909255939094168252902080549091169091179055620002c9565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620001879062000273565b90600052602060002090601f016020900481019282620001ab5760008555620001f6565b82601f10620001c657805160ff1916838001178555620001f6565b82800160010185558215620001f6579182015b82811115620001f6578251825591602001919060010190620001d9565b506200020492915062000208565b5090565b5b8082111562000204576000815560010162000209565b6000806000606084860312156200023557600080fd5b83516200024281620002b0565b60208501519093506200025581620002b0565b60408501519092506200026881620002b0565b809150509250925092565b600181811c908216806200028857607f821691505b60208210811415620002aa57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0381168114620002c657600080fd5b50565b61158780620002d96000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806356891412116100f9578063a9059cbb11610097578063dd62ed3e11610071578063dd62ed3e146103a6578063e3b86a5e146103b9578063f2fde38b146103cc578063fc0c546a146103df57600080fd5b8063a9059cbb14610373578063ae3050e114610386578063d0679d341461039357600080fd5b80638da5cb5b116100d35780638da5cb5b1461032a5780638ed832711461034f57806395d89b4114610358578063a457c2d71461036057600080fd5b806356891412146102f057806370a08231146102f9578063715018a61461032257600080fd5b806323b872dd11610166578063313ce56711610140578063313ce5671461029c57806332f13d8c146102ab57806339509351146102ce5780634dbac733146102e157600080fd5b806323b872dd146102635780632bc355ca146102765780632e1a7d4d1461028957600080fd5b806313bdde8b116101a257806313bdde8b1461022057806318160ddd146102335780631b45a68d1461023b57806321e5e2c41461025057600080fd5b806306fdde03146101c9578063095ea7b3146101e757806312b583491461020a575b600080fd5b6101d16103f2565b6040516101de919061142d565b60405180910390f35b6101fa6101f5366004611364565b610484565b60405190151581526020016101de565b61021261049c565b6040519081526020016101de565b61021261022e36600461138e565b61051d565b600354610212565b61024e6102493660046113fb565b6107e2565b005b61021261025e3660046112d3565b610818565b6101fa610271366004611328565b610871565b61024e6102843660046113fb565b610895565b61024e6102973660046113fb565b6108c3565b604051601281526020016101de565b6101fa6102b93660046112d3565b60076020526000908152604090205460ff1681565b6101fa6102dc366004611364565b610a31565b610212670de0b6b3a764000081565b61021260095481565b6102126103073660046112d3565b6001600160a01b031660009081526001602052604090205490565b61024e610a53565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016101de565b61021260065481565b6101d1610a67565b6101fa61036e366004611364565b610a76565b6101fa610381366004611364565b610af1565b600a546101fa9060ff1681565b61024e6103a1366004611364565b610aff565b6102126103b43660046112f5565b610bba565b61024e6103c73660046113c1565b610be5565b61024e6103da3660046112d3565b610c00565b600854610337906001600160a01b031681565b606060048054610401906114f2565b80601f016020809104026020016040519081016040528092919081815260200182805461042d906114f2565b801561047a5780601f1061044f5761010080835404028352916020019161047a565b820191906000526020600020905b81548152906001019060200180831161045d57829003601f168201915b5050505050905090565b600033610492818585610c79565b5060019392505050565b6008546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156104e057600080fd5b505afa1580156104f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105189190611414565b905090565b600a5460009060ff166105675760405162461bcd60e51b815260206004820152600d60248201526c1c185d5cd95119511953195b99609a1b60448201526064015b60405180910390fd5b600060095461057461049c565b61057e9190611482565b9050600061058b60035490565b1180156105985750600081115b6105b3576105ae670de0b6b3a7640000856114bc565b6105d1565b806105bd60035490565b6105c790866114bc565b6105d1919061149a565b91506000816006546105e391906114db565b9050838310156106455760405162461bcd60e51b815260206004820152602760248201527f506f6f6c204572726f723a20546865206d696e74206c696d697420697320746f6044820152666f206c6172676560c81b606482015260840161055e565b600083116106a15760405162461bcd60e51b815260206004820152602360248201527f506f6f6c204572726f723a2054686520616d6f756e7420697320746f6f20736d604482015262185b1b60ea1b606482015260840161055e565b8085111561070f5760405162461bcd60e51b815260206004820152603560248201527f506f6f6c204572726f723a204465706f736974696e6720696e746f2074686520604482015274706f6f6c206973206e6f7420617661696c61626c6560581b606482015260840161055e565b6008546040516323b872dd60e01b8152336004820152306024820152604481018790526001600160a01b03909116906323b872dd90606401602060405180830381600087803b15801561076157600080fd5b505af1158015610775573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079991906113de565b506107a43384610d9d565b60405185815233907fa63d9d1536f0a17779061a910d29ff26af4aa035bbd6c128b55bfde21d6a2b409060200160405180910390a250509392505050565b3360009081526007602052604090205460ff166107fe57600080fd5b806009600082825461081091906114db565b909155505050565b60008061082460035490565b1115610868576003546001600160a01b03831660009081526001602052604090205461084e61049c565b61085891906114bc565b610862919061149a565b92915050565b5060005b919050565b60003361087f858285610e7c565b61088a858585610ef6565b506001949350505050565b3360009081526007602052604090205460ff166108b157600080fd5b80600960008282546108109190611482565b60006009546108d061049c565b6108da9190611482565b90506108e461049c565b8211156108f057600080fd5b6000816108fc60035490565b61090690856114bc565b610910919061149a565b336000908152600160205260409020549091508111156109685760405162461bcd60e51b8152602060048201526013602482015272416d6f756e7420697320746f6f206c6172676560681b604482015260640161055e565b61097233826110c4565b60085460405163a9059cbb60e01b8152336004820152602481018590526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b1580156109be57600080fd5b505af11580156109d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f691906113de565b5060405183815233907f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243649060200160405180910390a2505050565b600033610492818585610a448383610bba565b610a4e9190611482565b610c79565b610a5b611212565b610a65600061126c565b565b606060058054610401906114f2565b60003381610a848286610bba565b905083811015610ae45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161055e565b61088a8286868403610c79565b600033610492818585610ef6565b3360009081526007602052604090205460ff16610b1b57600080fd5b610b2361049c565b811115610b2f57600080fd5b60085460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb90604401602060405180830381600087803b158015610b7d57600080fd5b505af1158015610b91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb591906113de565b505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b610bed611212565b600a805460ff1916911515919091179055565b610c08611212565b6001600160a01b038116610c6d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161055e565b610c768161126c565b50565b6001600160a01b038316610cdb5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161055e565b6001600160a01b038216610d3c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161055e565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038216610df35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161055e565b8060036000828254610e059190611482565b90915550506001600160a01b03821660009081526001602052604081208054839290610e32908490611482565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6000610e888484610bba565b90506000198114610ef05781811015610ee35760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161055e565b610ef08484848403610c79565b50505050565b6001600160a01b038316610f5a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161055e565b6001600160a01b038216610fbc5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161055e565b6001600160a01b038316600090815260016020526040902054818110156110345760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161055e565b6001600160a01b0380851660009081526001602052604080822085850390559185168152908120805484929061106b908490611482565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110b791815260200190565b60405180910390a3610ef0565b6001600160a01b0382166111245760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161055e565b6001600160a01b038216600090815260016020526040902054818110156111985760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161055e565b6001600160a01b03831660009081526001602052604081208383039055600380548492906111c79084906114db565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6000546001600160a01b03163314610a655760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161055e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461086c57600080fd5b6000602082840312156112e557600080fd5b6112ee826112bc565b9392505050565b6000806040838503121561130857600080fd5b611311836112bc565b915061131f602084016112bc565b90509250929050565b60008060006060848603121561133d57600080fd5b611346846112bc565b9250611354602085016112bc565b9150604084013590509250925092565b6000806040838503121561137757600080fd5b611380836112bc565b946020939093013593505050565b6000806000606084860312156113a357600080fd5b6113ac846112bc565b95602085013595506040909401359392505050565b6000602082840312156113d357600080fd5b81356112ee81611543565b6000602082840312156113f057600080fd5b81516112ee81611543565b60006020828403121561140d57600080fd5b5035919050565b60006020828403121561142657600080fd5b5051919050565b600060208083528351808285015260005b8181101561145a5785810183015185820160400152820161143e565b8181111561146c576000604083870101525b50601f01601f1916929092016040019392505050565b600082198211156114955761149561152d565b500190565b6000826114b757634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156114d6576114d661152d565b500290565b6000828210156114ed576114ed61152d565b500390565b600181811c9082168061150657607f821691505b6020821081141561152757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8015158114610c7657600080fdfea2646970667358221220fea850941bdf1ef1a35f2a61fd3618033761b490cac2c4532bd86a53ff80618264736f6c63430008060033";

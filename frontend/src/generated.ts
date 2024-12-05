import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BiscoToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const biscoTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'INITIAL_SUPPLY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const biscoTokenAddress = {
  11155111: '0x718A7f5434B846b17158f8B3F3191aD48B58C967',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const biscoTokenConfig = {
  address: biscoTokenAddress,
  abi: biscoTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link biscoTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useReadBiscoToken = /*#__PURE__*/ createUseReadContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"INITIAL_SUPPLY"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useReadBiscoTokenInitialSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: biscoTokenAbi,
    address: biscoTokenAddress,
    functionName: 'INITIAL_SUPPLY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useReadBiscoTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useReadBiscoTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useReadBiscoTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useReadBiscoTokenName = /*#__PURE__*/ createUseReadContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useReadBiscoTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useReadBiscoTokenTotalSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: biscoTokenAbi,
    address: biscoTokenAddress,
    functionName: 'totalSupply',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link biscoTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useWriteBiscoToken = /*#__PURE__*/ createUseWriteContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useWriteBiscoTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useWriteBiscoTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useWriteBiscoTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: biscoTokenAbi,
    address: biscoTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link biscoTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useSimulateBiscoToken = /*#__PURE__*/ createUseSimulateContract({
  abi: biscoTokenAbi,
  address: biscoTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useSimulateBiscoTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: biscoTokenAbi,
    address: biscoTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useSimulateBiscoTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: biscoTokenAbi,
    address: biscoTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link biscoTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useSimulateBiscoTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: biscoTokenAbi,
    address: biscoTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link biscoTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useWatchBiscoTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: biscoTokenAbi,
    address: biscoTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link biscoTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useWatchBiscoTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: biscoTokenAbi,
    address: biscoTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link biscoTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x718A7f5434B846b17158f8B3F3191aD48B58C967)
 */
export const useWatchBiscoTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: biscoTokenAbi,
    address: biscoTokenAddress,
    eventName: 'Transfer',
  })

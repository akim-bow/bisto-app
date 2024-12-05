import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import { sepolia } from 'wagmi/chains'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    foundry({
      include: ['BiscoToken.json'],
      project: '../',
      deployments: {
        BiscoToken: {
          [sepolia.id]: '0x718A7f5434B846b17158f8B3F3191aD48B58C967',
        },
      }
    }),
    react()
  ],
})

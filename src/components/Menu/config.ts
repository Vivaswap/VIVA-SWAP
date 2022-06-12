import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.projecttokenmma.it//',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },


   {
    label: 'NFT',
    icon: 'NftIcon',
     href: 'https://www.projecttokenmma.it/nft',
   },
  
  {
    label: 'More',
   icon: 'MoreIcon',
  items: [
   {
   label: 'Docs',
   href: 'https://www.projecttokenmma.it/white-paper',
  },
  {
  label: 'Github',
   href: 'https://github.com/RedMTech/MMA-Swap-Frontend',
  },
 ],
},

]

export default config

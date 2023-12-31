import { HexString } from '@polkadot/util/types';

type BaseNFT = {
  id: string;
  name: string;
  description: string;
  media: string;
  reference: string;
  ownerId: HexString;
  approvedAccountIds: HexString[];
};

type NFTDetails = {
  royalty: number;
  rarity: string;
  attributes: { [key: string]: string };
};

type Offers = { [key: `[null,${number}]`]: HexString };

type Auction = {
  bidPeriod: number;
  startedAt: number;
  endedAt: number;
  currentPrice: number;
  currentWinner: HexString;
};

type MarketNFT = {
  tokenId: string;
  owner: HexString;
  ftContractId: HexString | null;
  price: number | null;
  auction: Auction | null;
  offers: Offers;
  tx: null;
};

type NFT = BaseNFT & MarketNFT;

type MarketplaceState = { AllItems: MarketNFT[] };
type MarketNFTState = { ItemInfo: MarketNFT };
type NFTState = { Token: { token: BaseNFT } };
type OwnersNFTState = { TokensForOwner: { tokens: BaseNFT[] } };

type Filter = {
  value: string;
  list: string[];
  onChange: (filter: string) => void;
};

type Listing = {
  heading: string;
  description: string;
  owner: HexString;
  src: string;
  offers?: { bidder: string; price: string }[];
  price?: MarketNFT['price'];
  rarity?: string;
  attrs?: NFTDetails['attributes'];
};

type AuctionFormValues = {
  duration: string;
  bidPeriod: string;
  minPrice: string;
};

export type {
  BaseNFT,
  NFTDetails,
  Offers,
  Auction,
  MarketNFT,
  NFT,
  MarketplaceState,
  MarketNFTState,
  NFTState,
  OwnersNFTState,
  Filter,
  Listing,
  AuctionFormValues,
};

import {getFaucet, getTestFaucet} from "../branding";

export const iobankerAPIs = {
    BASE: "https://ioxbank.com",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    NEW_DEPOSIT_ADDRESS: "/simple-api/initiate-trade"
};

export const rudexAPIs = {
    BASE: "https://gateway.rudex.org/api/rudex",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/simple-api/initiate-trade"
};

export const gdex2APIs = {
    BASE: "https://api.gdex.io/adjust",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs"
};

// Legacy Deposit/Withdraw
export const gdexAPIs = {
    BASE: "https://api.gdex.io",
    ASSET_LIST: "/gateway/asset/assetList",
    ASSET_DETAIL: "/gateway/asset/assetDetail",
    GET_DEPOSIT_ADDRESS: "/gateway/address/getAddress",
    CHECK_WITHDRAY_ADDRESS: "/gateway/address/checkAddress",
    DEPOSIT_RECORD_LIST: "/gateway/deposit/recordList",
    DEPOSIT_RECORD_DETAIL: "/gateway/deposit/recordDetail",
    WITHDRAW_RECORD_LIST: "/gateway/withdraw/recordList",
    WITHDRAW_RECORD_DETAIL: "/gateway/withdraw/recordDetail",
    GET_USER_INFO: "/gateway/user/getUserInfo",
    USER_AGREEMENT: "/gateway/user/isAgree",
    WITHDRAW_RULE: "/gateway/withdraw/rule"
};

export const xbtsxAPIs = {
    BASE: "https://apis.xbts.io/api/v1",
    COINS_LIST: "/coin"
};

export const nodeRegions = [
    // region of the node follows roughly https://en.wikipedia.org/wiki/Subregion#/media/File:United_Nations_geographical_subregions.png
    "Northern Europe",
    "Western Europe",
    "Southern Europe",
    "Eastern Europe",
    "Northern Asia",
    "Western Asia",
    "Southern Asia",
    "Eastern Asia",
    "Central Asia",
    "Southeastern Asia",
    "Australia and New Zealand",
    "Melanesia",
    "Polynesia",
    "Micronesia",
    "Northern Africa",
    "Western Africa",
    "Middle Africa",
    "Eastern Africa",
    "Southern Africa",
    "Northern America",
    "Central America",
    "Caribbean",
    "South America"
];

export const settingsAPIs = {
    // If you want a location to be translated, add the translation to settings in locale-xx.js
    // and use an object {translate: key} in WS_NODE_LIST
    DEFAULT_WS_NODE: "wss://fake.automatic-selection.com",
    WS_NODE_LIST: [
        {
            url: "wss://fake.automatic-selection.com",
            location: {translate: "settings.api_closest"}
        },
        {
            url: "ws://127.0.0.1:8090",
            location: "Locally hosted"
        },
        {
            url: "wss://dex.iobanker.com/ws",
            region: "Western Europe",
            country: "Germany",
            location: "Frankfurt",
            operator: "Witness: iobanker-core",
            contact: "email:admin@iobanker.com"
        },
        {
            url: "wss://ws.gdex.top",
            region: "Eastern Asia",
            country: "China",
            location: "Shanghai",
            operator: "Witness: gdex-witness",
            contact: "telegram:BrianZhang"
        },
        {
            url: "wss://api.weaccount.cn",
            region: "Eastern Asia",
            country: "China",
            location: "Hangzhou",
            operator: "Witness: btspp-witness",
            contact: "telegram:btsplusplus"
        },
        {
            url: "wss://eu.nodes.bitshares.ws",
            region: "Western Europe",
            country: "Germany",
            operator: "Infrastructure Worker",
            contact: "email:info@blockchainprojectsbv.com"
        },
        {
            url: "wss://api.bts.mobi/ws",
            region: "Northern America",
            country: "U.S.A.",
            location: "Virginia",
            operator: "Witness: in.abit",
            contact: "telegram:abitmore"
        },
        {
            url: "wss://btsws.roelandp.nl/ws",
            region: "Northern Europe",
            country: "Finland",
            location: "Helsinki",
            operator: "Witness: roelandp",
            contact: "telegram:roelandp"
        },
        {
            url: "wss://api.bitshares.bhuz.info/ws",
            region: "Northern America",
            country: "Canada",
            operator: "Witness: bhuz",
            contact: "telegram:bhuzor"
        },
        {
            url: "wss://btsfullnode.bangzi.info/ws",
            region: "Western Europe",
            country: "Germany",
            location: "Munich",
            operator: "Witness: Bangzi",
            contact: "telegram:Bangzi"
        },
        {
            url: "wss://api.dex.trading/",
            region: "Western Europe",
            country: "France",
            location: "Paris",
            operator: "Witness: zapata42-witness",
            contact: "telegram:Zapata_42"
        },

        // Testnet
        {
            url: "wss://node.testnet.bitshares.eu",
            region: "TESTNET - Western Europe",
            country: "Germany",
            location: "Frankfurt",
            operator: "BitShares Europe",
            contact: "telegram:xeroc"
        },
        {
            url: "wss://testnet.nodes.bitshares.ws",
            region: "TESTNET - Western Europe",
            country: "Germany",
            location: "Nuremberg",
            operator: "Infrastructure Worker",
            contact: "email:info@blockchainprojectsbv.com"
        },
        {
            url: "wss://testnet.dex.trading/",
            region: "TESTNET - Western Europe",
            country: "France",
            location: "Paris",
            operator: "Witness: zapata42-witness",
            contact: "telegram:Zapata_42"
        },
        {
            url: "wss://api.gbacenter.org/ws",
            region: "Northern America",
            country: "U.S.A.",
            location: "Fremont, CA",
            operator: "Witness: gbac-ety001",
            contact: "email:work@domyself.me"
        }
    ],
    ES_WRAPPER_LIST: [
        {
            url: "https://kibana.bts.mobi",
            region: "N/A",
            country: "N/A",
            operator: "N/A",
            contact: "N/A"
        }
    ],
    DEFAULT_FAUCET: getFaucet().url,
    TESTNET_FAUCET: getTestFaucet().url
};

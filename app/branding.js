import {Apis} from "bitsharesjs-ws";
/** This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 *  the process.
 *
 *  @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

/**
 * Determine if we are running on testnet or mainnet
 * @private
 */
function _isTestnet() {
    const testnet =
        "39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447"; // just for the record
    const mainnet =
        "4018d7844c78f6a6c41c6a552b898022310fc5dec06da467ee7905a8dad512c8";

    // treat every other chain as testnet
    return Apis.instance().chain_id !== mainnet;
}

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "ioBanker DEX";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://dex.iobanker.com";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "https://faucet.xbts.io",
        show: false,
        editable: false,
        referrer: "iobanker-core"
    };
}

export function getTestFaucet() {
    // fixme should be solved by introducing _isTestnet into getFaucet and fixing the mess in the Settings when fetching faucet address
    return {
        url: "https://faucet.testnet.bitshares.eu", // operated as a contribution by BitShares EU
        show: true,
        editable: false
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/logo-ico-blue.png");
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["darkTheme", "lightTheme", "midnightTheme"]
    return "darkTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "password";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 */
export function getUnits() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    return ["BTS", "HONEST.BTC", "HONEST.USD"];
}

export function getDefaultMarket() {
    if (_isTestnet()) {
        return "BTS_TEST";
    }
    return "HONEST.USD_BTS";
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */
export function getMyMarketsBases() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    return ["BTS", "HONEST.USD", "HONEST.BTC"];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    let tokens = {
        nativeTokens: [
            "BTS",
            "CNY",
            "EUR",
            "RUBLE",
            "HONEST.BTC",
            "HONEST.ETH",
            "HONEST.XRP",
            "HONEST.USD",
            "HONEST.CNY",
            "HONEST.XAU",
            "HONEST.XAG",
            "TWENTIX",
            "WEYOUME"
        ],

        rudexTokens: [
            "RUDEX.BTC",
            "RUDEX.ETH",
            "RUDEX.EOS",
            "RUDEX.USDT",
            "RUDEX.WLS",
            "RUDEX.SMOKE"
        ],

        xbtsxTokens: [
            "XBTSX.STH",
            "XBTSX.DOGE",
            "XBTSX.BTC",
            "XBTSX.BCH",
            "XBTSX.LTC",
            "XBTSX.DASH",
            "XBTSX.ETH"
        ],
        iobankerTokens: ["IOB.XRP"],
        otherTokens: ["SOUNDAC.XSD"]
    };

    let allTokens = [];
    for (let type in tokens) {
        allTokens = allTokens.concat(tokens[type]);
    }
    return allTokens;
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets(quotes = []) {
    if (_isTestnet()) {
        return [["BTS", "TEST"]];
    }
    return [
        ["BTS", "HONEST.BTC"], // BTS HONEST pairs
        ["BTS", "HONEST.CNY"],
        ["BTS", "HONEST.ETH"],
        ["BTS", "HONEST.XRP"],
        ["BTS", "HONEST.XAU"],
        ["BTS", "HONEST.XAG"],
        ["BTS", "HONEST.BTC"],
        ["BTS", "TWENTIX"], // TWENTIX
        ["BTS", "IOB.XRP"], // IOB.XRP pairs

        ["HONEST.BTC", "HONEST.USD"], // HONEST.BTC pairs
        ["HONEST.BTC", "HONEST.CNY"],
        ["HONEST.BTC", "HONEST.ETH"],
        ["HONEST.BTC", "HONEST.XRP"],
        ["HONEST.BTC", "HONEST.XAU"],
        ["HONEST.BTC", "HONEST.XAG"],
        ["HONEST.BTC", "RUDEX.BTC"],

        ["HONEST.USD", "HONEST.CNY"], // HONEST.USD pairs
        ["HONEST.USD", "HONEST.ETH"],
        ["HONEST.USD", "HONEST.XRP"],
        ["HONEST.USD", "HONEST.XAU"],
        ["HONEST.USD", "HONEST.XAG"],
        ["HONEST.USD", "RUDEX.USDT"],
        ["HONEST.USD", "EUR"],
        ["HONEST.USD", "IOB.XRP"]
    ].filter(a => {
        if (!quotes.length) return true;
        return quotes.indexOf(a[0]) !== -1;
    });
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
    if (_isTestnet()) {
        return [];
    }
    return ["HONEST.", "XBTSX.", "RUDEX.", "SOUNDAC.", "IOB."];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for BitAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "OPEN.", "bit"
    return [];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
    const allowedGateways = ["XBTSX", "RUDEX", "IOB"];
    if (!gateway) {
        // answers the question: are any allowed?
        return allowedGateways.length > 0;
    }
    return allowedGateways.indexOf(gateway) >= 0;
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}

export function getConfigurationAsset() {
    let assetSymbol = null;
    if (_isTestnet()) {
        assetSymbol = "NOTIFICATIONS";
    } else {
        assetSymbol = null;
    }
    // explanation will be parsed out of the asset description (via split)
    return {
        symbol: assetSymbol,
        explanation:
            "This asset is used for decentralized configuration of the BitShares UI placed under bitshares.org."
    };
}
export function getSteemNewsTag() {
    return null;
}

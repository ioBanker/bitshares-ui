# HONEST Market Pegged Assets (MPAs)
## BTS  Collateral
* **[HONEST.USD](/asset/HONEST.USD)** UNITED STATES DOLLAR FIAT - *Asset ID 1.3.5649*
* **[HONEST.CNY](/asset/HONEST.CNY)** CHINESE YUAN FIAT - *Asset ID 1.3.5641*
* **[HONEST.BTC](/asset/HONEST.BTC)** BITCOIN - *Asset ID 1.3.5650*
* **[HONEST.ETH](/asset/HONEST.ETH)** ETHEREUM - *Asset ID 1.3.5659*
* **[HONEST.XRP](/asset/HONEST.XRP)** XRP - *Asset ID 1.3.5660*
* **[HONEST.XAU](/asset/HONEST.XAU)** GOLD TROY OUNCE - *Asset ID 1.3.5651*
* **[HONEST.XAG](/asset/HONEST.XAG)** SILVER TROY OUNCE - *Asset ID 1.3.5652*

## HONEST.BTC  Collateral
* **[HONEST.ETH1](/asset/HONEST.ETH1)** ETHEREUM - *Asset ID 1.3.5662*
* **[HONEST.XRP1](/asset/HONEST.XRP1)** XRP - *Asset ID 1.3.5661*

## Price Feed
- **Maintenance Collateral Ratio**: 1.5
- **Liquidation Penalty**: 0-13%
- **Interest Rate**: 0%
- [CEX](https://github.com/litepresence/Honest-MPA-Price-Feeds/blob/master/honest/pricefeed_cex.py#L39)
- [Forex](https://github.com/litepresence/Honest-MPA-Price-Feeds/blob/master/honest/pricefeed_forex.py#L34)
- [DEX](https://github.com/litepresence/Honest-MPA-Price-Feeds/blob/master/honest/pricefeed_dex.py#L66)

## Assumptions
* An *MPA* is a derivative smart contract with the sole purpose of tracking the value of its underlying asset 1:1.
* MPA price feeds should be timely, accurate, and honest; always always representing the global median price, with truth and precision.
* Long term borrowers of an MPA will be required to adjust their collateral over time to prevent margin call.
* The purses and interests of the owners of an MPA are more important than the purses of the borrowers of that MPA.
* Borrowers have a duty and personal responsibility to maintain the collateral of MPA's, which they have speculated into existence.
* Holders are lay users who expect and deserve peg and continuity of MPA's, which they own.
* MPA holders expect their owned assets will remain true to their purpose by definition.
* We seek to maintain MPA's near their respective price peg most of the time.
* We can accept extreme short term deviation from peg to achieve liquidation of under collateralized positions.
* Deviation from peg cannot be so extreme as to result in a market wide default via core blockchain mechanisms.
* The mean peg of an MPA over time is far more important than immediate peg of the MPA in any momentary instance.
* We are willing to allow considerable deviation from the peg in the instant, in order to minimize the time spent off peg.
* It is acceptable and expected for an MPA to be slightly overvalued or undervalued relative to the 1:1 peg, in bull or bear markets respectively.
* Monetary policy should NOT be implemented for marketing purposes or to induce borrowing with the aim of inflating the monetary supply.
* Monetary policy should NOT be implemented to adjust for deviation from peg during bullish or bearish market trends.
* Monetary policy should allow market participants the greatest freedom possible to make their own decisions and be responsible for the outcome.
* Monetary policy should not waver over time as to benefit some market participants at the expense of others; whenever possible policy should be set in stone.
* Monetary policy  should place the burden of default on the individual borrower, rather than the collective holders.
* Monetary policy restrictions should only be implemented to prevent edge case scenarios which result in prolonged loss of peg or freezing of holder assets.
* Under no circumstance should monetary policy induce an MPA to become pegged to the backing asset (typically BTS).
* Under no circumstance should monetary policy induce an MPA to become frozen by the chain - "supergao".

## More Information
* [Telegram](https://t.me/onestcommunity)
* [bitsharestalk.org](https://bitsharestalk.org/index.php?topic=32035)
* [github.com](https://github.com/litepresence/Honest-MPA-Price-Feeds)
* [Whitepaper](https://github.com/litepresence/Honest-MPA-Price-Feeds/blob/master/docs/whitepaper.md)

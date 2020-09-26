# Margin Position

In order to provide liquidity for HONEST.Assets, you can *borrow* HONEST.Assets from the BitShares Blockchain.

## Terms

* *Feed Price*: The collateral price in the borrowed asset.
* *Collateral Ratio* (CR) : `= DEBT / COLLATERAL`
* *Maintenance Collateral Ratio* (MCR): The minimum required *CR*.
* *Target Collateral Ratio* (TCR): Sell only enough collateral to reach *TCR* again.
* *Call Price* (CP): `= DEBT / COLLATERAL * MCR` The price at which short/borrowed positions are getting margin called.
* *Maximum Short Squeeze Ratio* (MSSR): Max. liquidation penalty. Real penalty is dependent on market liquidity.
* *Short Squeeze Protection* (SSP): ` = Call Price / MSSR` or min. price for collateral sell. Real price is dependent on market liquidity.
* *Force Settlement Offset* (FSO): Fee for HONEST.Asset settlement, from the HONEST.Asset holder.

## Borrowing

The BitShares network is capable of minting HONEST.Asset, without any interest rate, to participants providing enough collateral:

- `Portfolio` → `Margin Position` → *click on 0.000...* → *Update Position*
- `Exchange` → `HONEST.Asset/BTS` → `BUY BTS` → `BORROW` → *Update Position*

## Short Selling

The borrowed HONEST.Assets, can be sold for any asset on the Exchange, which provides a BTS-market pair. After buying the other asset, you are now short that particular HONEST.Asset.

## Margin Call

The borrower needs to add extra collateral or reduce the debt, before the collateral value drops under the *MCR*, to not get margin called.

A margin call will occur, when the *CR* is lower than the *MCR* and a bid is equal or greater than the *SSP*.

The margin call sells collateral, to buy shares of the borrowed HONEST.Asset back and reduce the amount of debt. The remaining BTS are used as collateral, to cover the outstanding debt.

## Settlement

Holders of any HONEST.Asset can request a settlement at *Feed Price + FSO* at any time.
The settlement closes the borrow/short positions with lowest CR and sells the collateral to the asset settler.

## Covering

To close a borrow/short position, one must hold the same amount of that
particular HONEST.Asset. When the particular debt is payed back to the network, the corresponding supply is reduced and the collateral is released.

- *Update Position* → `Debt` → `Pay max. Debt`

## Strategies
- Borrow an asset, which will lose in value or has a premium
- Buy an asset, which will increase in value or has a discount


- Maximise total debt, when collateral value is low
- Minimise total debt, when collateral value is high


- When collateral value decreases, debt needs to be reduced
- When collateral value increases, debt can be increased


- Use max. 50% of your funds as collateral
- Keep enough HONEST.Assets for liquidity or *CR* adjustmens
- Keep your *CR* over 1.75

# Short Selling HONEST.Assets

In order to increase your exposure to BTS and offer liquidity for HONEST.Assets, such
as USD, BTC, XAU, etc., you can *borrow* HONEST.Asset from the network and
*sell it short*. We will here briefly describe the procedure.

## Borrowing

The BitShares network is capable of issuing HONEST.Asset, without any interest rate, to participants providing enough collateral.

 * *feed price*: The price for 1 BTS, as it is traded on exchanges.
 * *maintenance collateral ratio* (MCR): Minimum required collateral ratio.
 * *call price* (CP): The price at which short/borrow positions are margin called.
 * *maximum short squeeze ratio* (MSSR): Max. liquidation penalty. Real penalty is dependent on market liquidity.
 * *short squeeze protection* (SSP): Min. price for collateral sell.
 * *force settlement offset* (FSO): Fee for HONEST.Asset settlement to debt holder.

## Selling

 After borrowing HONEST.Assets, they can be sold free at any of the corresponding
 markets at any price a buyer is willing to pay. With this step, the
 short-selling is now complete and you are short that particular HONEST.Asset.

## Margin Call

The borrower needs to add extra collateral or reduce the amount of debt, before the collateral value drops under the maintenance ratio, to not get margin called.

A margin call will occur, when the *CR* is lower than the *MCR* and a bid is equal or greater than the *SSP*.

```
call price = DEBT / COLLATERAL * MCR

SSP = settlement price / MSSR
```

The margin call sells collateral, to buy shares of the borrowed HONEST.Asset back and reduce the amount of debt. The remaining BTS are used as collateral, to cover the outstanding debt.

## Settlement

Holders of any HONEST.Asset can request a settlement at *feed price + FSO* at any time.
The settlement closes the borrow/short positions with lowest collateral ratio and sells the collateral to the asset settler.

## Covering

To close a borrow/short position, one must hold the same amount of that
particular HONEST.Asset. When the particular debt is payed back to the network, the corresponding supply is reduced and the collateral is released.

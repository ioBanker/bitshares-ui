# Short Selling HONEST.Assets

In order to increase your exposure to BTS and offer liquidity for HONEST.Assets, such
as USD, BTC, XAU, etc., you can *borrow* HONEST.Asset from the network and
*sell it short*. We will here briefly describe the procedure.

## Borrowing

The BitShares network is capable of issuing HONEST.Asset, without any interest rate, to participants given enough collateral.

 * *feed price*: The price for 1 BTS, as it is traded on exchanges
 * *maintenance collateral ratio* (MCR): A ratio defined by the price feeds, as minimum required collateral ratio
 * *maximum short squeeze ratio* (MSSR): A ratio defined by the price feeds, as market discount for collateral sell
 * *short squeeze protection* (SSP): Defines the current min. price for collateral sell during a margin call
 * *call price* (CP): The price at which short/borrow positions are margin called
 * *force settlement offset* (FSO): Fee for HONEST.Asset settlement to asset borrower

### Selling

 After borrowing HONEST.Assets, they can be sold free at any of the corresponding
 markets at any price a buyer is willing to pay. With this step, the
 short-selling is now complete and you are short that particular HONEST.Asset.

### Margin Call

The BitShares network is capable to offer a margin call to those positions, that do not
have enough collateral, to back their borrowed HONEST.Assets properly.
A margin call will occur, when a bid is equal or greater than the *SSP*.

```
SSP = settlement price / MSSR
call price = DEBT / COLLATERAL * MCR
```

The margin call sells collateral, to buy shares of the borrowed HONEST.Asset back and reduce the debt position. The remaining BTS are used as collateral to cover the outstanding debt.

### Settlement

Holders of any HONEST.Asset can request a settlement at *feed price + FSO* at any time.
The settlement closes the borrow/short positions with lowest collateral ratio and sells the collateral to the asset settler.

## Updating Collateral Ratio

At any time, the holder of a borrow/short position can modify the collateral
ratio in order to flexibly adjust to market behavior. If the collateral ratio is
increased, an additional amount of BTS is locked as collateral or the debt of HONEST.Asset is reduced.

### Covering

To close a borrow/short position, one must hold the same amount of that
particular HONEST.Asset. When the particular debt is payed back to the network, the corresponding supply is reduced and the collateral is released.

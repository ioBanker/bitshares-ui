# ioxbank Instant Swap Service
A Bridge Instant Swap Service is responsible for moving cryptocurrencies between BitShares and other Blockchains. You can easily identify those cryptocurrencies supported by ioxbank, they are prefixed with **IOB.** and marked as featured in dashboard page.

## Website
[https://ioxbank.com](https://support.ioxbank.com/docs)

## Support
- [Telegram](https://t.me/ioxbank)
- [Open a Ticket](https://support.ioxbank.com)

## IOB.XRP features
- No KYC
- No limits
- Low market fees
- Low withdraw fee
- Instant swap
- Min. amount: 25 XRP

### Transparency Information
- [XRP Balance](https://livenet.xrpl.org/accounts/rDce39TBzszQJx2sshLy5jPXV3F9nEaQ9Y)
- [IOB.XRP Current supply](/asset/IOB.XRP)

### Deposit to your BitShares wallet from your XRP wallet
- **XRP Destination address:** rDce39TBzszQJx2sshLy5jPXV3F9nEaQ9Y
- **XRP Destination tag (ONLY NUMBERS):** BitShares user ID (without 1.2.)

### Withdraw from your BitShares wallet to your XRP wallet
Send **IOB.XRP** to [ioxbank-gateway](/account/ioxbank-gateway) and use one of the following memo options:
- xrp:*xrp-address*:tag:*tag-number*:*memo*
- xrp:*xrp-address*:tag:*tag-number*
- xrp:*xrp-address*

### Withdraw Examples: 
- If you want to withdraw your XRPs to your XRP address **rDce39TBzszQJx2sshLy5jPXV3F9nEaQ9Y** and your tag is **485738**; the memo that should be included with the send operation of **IOB.XRP** should be **xrp:rDce39TBzszQJx2sshLy5jPXV3F9nEaQ9Y:tag:485738** or **xrp:rDce39TBzszQJx2sshLy5jPXV3F9nEaQ9Y:tag:485738:thanks for the wonderful bridge**

- If you want to withdraw your XRPs to your XRP address **rDce39TBzszQJx2sshLy5jPXV3F9nEaQ9Y** in case you own the private keys of the XRP address; you don't need to include a tag, the memo that should be included with the send operation of **IOB.XRP** should be **xrp:rDce39TBzszQJx2sshLy5jPXV3F9nEaQ9Y**

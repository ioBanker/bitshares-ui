import React from "react";
import Translate from "react-translate-component";
import FormattedAsset from "../../Utility/FormattedAsset";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import counterpart from "counterpart";
import {ChainTypes as grapheneChainTypes} from "bitsharesjs";

export const TicketCreate = ({op, linkToAccount, fromComponent}) => {
   const {operations} = grapheneChainTypes;
   let op = Object.keys(operations);
   const ticket_type = Object.keys(
                    grapheneChainTypes.ticket_type
                ).find(
                    key =>
                        grapheneChainTypes.ticket_type[key] ===
                        op[1].target_type
                );
                return (
                    <span>
                        <TranslateWithLinks
                            string="operation.ticket_create"
                            keys={[
                                {
                                    type: "account",
                                    value: op[1].account,
                                    arg: "account"
                                },
                                {
                                    type: "amount",
                                    value: op[1].amount,
                                    arg: "amount"
                                }
                            ]}
                        />
                        &nbsp; (
                        {counterpart.translate(
                            "operation.ticket_types." + ticket_type
                        )}
                        )
                    </span>
                );
};

import React from "react";
import Translate from "react-translate-component";
import FormattedAsset from "../../Utility/FormattedAsset";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import counterpart from "counterpart";
import {ChainTypes, ChainStore} from "bitsharesjs";

export const TicketCreate = ({op, linkToAccount, fromComponent}) => {
    const {operations} = ChainTypes;
    let ops = Object.keys(operations);
        switch (
            ops[op[0]] // For a list of trx types, see chain_types.coffee
        )
    const ticket_type = Object.keys(ChainTypes.ticket_type).find(
        key => ChainTypes.ticket_type[key] === op[1].target_type
    );
    return (
        <span>
            <TranslateWithLinks
                string="operation.ticket_create"
                keys={[
                    {
                        type: "account",
                        value: op[1].account,
                        arg: "from"
                    },
                    {
                        type: "amount",
                        value: op[1].amount,
                        arg: "amount"
                    }
                ]}
            />
            &nbsp; (
            {counterpart.translate("operation.ticket_types." + ticket_type)})
        </span>
    );
};

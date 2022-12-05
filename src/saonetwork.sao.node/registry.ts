import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgClaimReward } from "./types/sao/node/tx";
import { MsgLogout } from "./types/sao/node/tx";
import { MsgReset } from "./types/sao/node/tx";
import { MsgLogin } from "./types/sao/node/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/saonetwork.sao.node.MsgClaimReward", MsgClaimReward],
    ["/saonetwork.sao.node.MsgLogout", MsgLogout],
    ["/saonetwork.sao.node.MsgReset", MsgReset],
    ["/saonetwork.sao.node.MsgLogin", MsgLogin],
    
];

export { msgTypes }
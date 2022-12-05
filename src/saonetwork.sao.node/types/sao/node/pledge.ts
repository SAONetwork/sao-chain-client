/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "saonetwork.sao.node";

export interface Pledge {
  creator: string;
  pledged: Coin | undefined;
  reward: Coin | undefined;
  rewardDebt: Coin | undefined;
}

function createBasePledge(): Pledge {
  return { creator: "", pledged: undefined, reward: undefined, rewardDebt: undefined };
}

export const Pledge = {
  encode(message: Pledge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pledged !== undefined) {
      Coin.encode(message.pledged, writer.uint32(18).fork()).ldelim();
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardDebt !== undefined) {
      Coin.encode(message.rewardDebt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pledge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePledge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pledged = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.reward = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.rewardDebt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pledge {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pledged: isSet(object.pledged) ? Coin.fromJSON(object.pledged) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined,
      rewardDebt: isSet(object.rewardDebt) ? Coin.fromJSON(object.rewardDebt) : undefined,
    };
  },

  toJSON(message: Pledge): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pledged !== undefined && (obj.pledged = message.pledged ? Coin.toJSON(message.pledged) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    message.rewardDebt !== undefined
      && (obj.rewardDebt = message.rewardDebt ? Coin.toJSON(message.rewardDebt) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pledge>, I>>(object: I): Pledge {
    const message = createBasePledge();
    message.creator = object.creator ?? "";
    message.pledged = (object.pledged !== undefined && object.pledged !== null)
      ? Coin.fromPartial(object.pledged)
      : undefined;
    message.reward = (object.reward !== undefined && object.reward !== null)
      ? Coin.fromPartial(object.reward)
      : undefined;
    message.rewardDebt = (object.rewardDebt !== undefined && object.rewardDebt !== null)
      ? Coin.fromPartial(object.rewardDebt)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

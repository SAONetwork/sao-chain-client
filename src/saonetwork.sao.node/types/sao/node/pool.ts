/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "saonetwork.sao.node";

export interface Pool {
  denom: Coin | undefined;
  coinPerShare: string;
  lastRewardBlock: number;
  totalReward: Coin | undefined;
}

function createBasePool(): Pool {
  return { denom: undefined, coinPerShare: "", lastRewardBlock: 0, totalReward: undefined };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Coin.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    if (message.coinPerShare !== "") {
      writer.uint32(18).string(message.coinPerShare);
    }
    if (message.lastRewardBlock !== 0) {
      writer.uint32(24).int64(message.lastRewardBlock);
    }
    if (message.totalReward !== undefined) {
      Coin.encode(message.totalReward, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.coinPerShare = reader.string();
          break;
        case 3:
          message.lastRewardBlock = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.totalReward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      denom: isSet(object.denom) ? Coin.fromJSON(object.denom) : undefined,
      coinPerShare: isSet(object.coinPerShare) ? String(object.coinPerShare) : "",
      lastRewardBlock: isSet(object.lastRewardBlock) ? Number(object.lastRewardBlock) : 0,
      totalReward: isSet(object.totalReward) ? Coin.fromJSON(object.totalReward) : undefined,
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Coin.toJSON(message.denom) : undefined);
    message.coinPerShare !== undefined && (obj.coinPerShare = message.coinPerShare);
    message.lastRewardBlock !== undefined && (obj.lastRewardBlock = Math.round(message.lastRewardBlock));
    message.totalReward !== undefined
      && (obj.totalReward = message.totalReward ? Coin.toJSON(message.totalReward) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.denom = (object.denom !== undefined && object.denom !== null) ? Coin.fromPartial(object.denom) : undefined;
    message.coinPerShare = object.coinPerShare ?? "";
    message.lastRewardBlock = object.lastRewardBlock ?? 0;
    message.totalReward = (object.totalReward !== undefined && object.totalReward !== null)
      ? Coin.fromPartial(object.totalReward)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

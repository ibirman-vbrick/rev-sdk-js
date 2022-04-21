[@vbrick/rev-sdk](../README.md) / [embed/EventBus](../modules/embed_EventBus.md) / EventBus

# Class: EventBus

[embed/EventBus](../modules/embed_EventBus.md).EventBus

## Table of contents

### Constructors

- [constructor](embed_EventBus.EventBus.md#constructor)

### Methods

- [awaitEvent](embed_EventBus.EventBus.md#awaitevent)
- [destroy](embed_EventBus.EventBus.md#destroy)
- [off](embed_EventBus.EventBus.md#off)
- [on](embed_EventBus.EventBus.md#on)
- [publish](embed_EventBus.EventBus.md#publish)
- [publishError](embed_EventBus.EventBus.md#publisherror)

## Constructors

### constructor

• **new EventBus**(`iframe`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iframe` | `HTMLIFrameElement` |
| `config` | [`VbrickSDKConfig`](../interfaces/VbrickSDK.VbrickSDKConfig.md) |

#### Defined in

[embed/EventBus.ts:16](https://github.com/vbrick/rev-sdk-js/blob/8587b78/src/embed/EventBus.ts#L16)

## Methods

### awaitEvent

▸ **awaitEvent**(`event`, `failEvent?`, `timeout?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `string` | `undefined` |
| `failEvent?` | `string` | `undefined` |
| `timeout` | `number` | `30000` |

#### Returns

`Promise`<`any`\>

#### Defined in

[embed/EventBus.ts:36](https://github.com/vbrick/rev-sdk-js/blob/8587b78/src/embed/EventBus.ts#L36)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[embed/EventBus.ts:114](https://github.com/vbrick/rev-sdk-js/blob/8587b78/src/embed/EventBus.ts#L114)

___

### off

▸ **off**(`event`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`void`

#### Defined in

[embed/EventBus.ts:60](https://github.com/vbrick/rev-sdk-js/blob/8587b78/src/embed/EventBus.ts#L60)

___

### on

▸ **on**(`event`, `fn`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[embed/EventBus.ts:29](https://github.com/vbrick/rev-sdk-js/blob/8587b78/src/embed/EventBus.ts#L29)

___

### publish

▸ **publish**(`event`, `msg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `msg?` | `any` |

#### Returns

`void`

#### Defined in

[embed/EventBus.ts:68](https://github.com/vbrick/rev-sdk-js/blob/8587b78/src/embed/EventBus.ts#L68)

___

### publishError

▸ **publishError**(`msg`, `err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `err` | `any` |

#### Returns

`void`

#### Defined in

[embed/EventBus.ts:77](https://github.com/vbrick/rev-sdk-js/blob/8587b78/src/embed/EventBus.ts#L77)

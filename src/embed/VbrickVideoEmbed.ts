import { TokenType } from '../VbrickSDK';
import { IVbrickVideoEmbed, ICaptionSettings } from './IVbrickApi';
import { PlayerStatus } from './PlayerStatus';
import { PlayerEvent } from './PlayerEvent';
import { PlayerMethod } from './PlayerMethod';
import { VbrickEmbed } from './VbrickEmbed';
import { VbrickEmbedConfig } from './VbrickEmbedConfig';

/**
 * Internal class used to model an embedded video
 */
export class VbrickVideoEmbed extends VbrickEmbed implements IVbrickVideoEmbed {

	 /**
	 * video playing, buffering, etc
	 */
	public get playerStatus(): PlayerStatus {
		return this._playerStatus;
	}
	private _playerStatus

	 /**
	 * Player Volume. 0-1
	 */
	public get volume(): number {
		return this._volume;
	}
	private _volume: number;

	/**
	 * Whether captions are enabled, and selected language
	 */
	public get captions(): ICaptionSettings {
		return this._captions;
	}
	private _captions: ICaptionSettings;

	/**
	 * Contains metadata for the video
	 */
	public readonly videoInfo: any;



	constructor(
		videoId: string,
		config: VbrickEmbedConfig,
		container: HTMLElement
	) {
		super(getEmbedUrl(videoId, config), config, container);
	}

	 /**
	  * Plays the video if it is paused.
	  */
	public play(): void {
		this.eventBus.publish(PlayerMethod.PlayVideo);
	}
	/**
	  * Pauses the video if it is playing.
	  */
	public pause(): void {
		this.eventBus.publish(PlayerMethod.PauseVideo);
	}

	/**
	 * Sets player volume
	 * @param volume {number} 0-1
	 */
	public setVolume(volume: number): void {
		this.eventBus.publish(PlayerMethod.SetVolume, { volume });
	}

	protected initializeToken(): Promise<any> {
		if(!this.config.token) {
			return Promise.resolve()
		}

		if(this.config.token.type !== TokenType.ACCESS_TOKEN) {
			return Promise.reject('Unsupported token type');
		}

		return Promise.resolve({
			accessToken: this.config.token.value
		});
	}

	protected initializeEmbed(): void {
		this.eventBus.on(PlayerEvent.PlayerStatusChanged, e => this._playerStatus = e.status),
		this.eventBus.on(PlayerEvent.VolumeChanged, e => this._volume = e.volume),
		this.eventBus.on(PlayerEvent.CaptionsChanged, e => this._captions = e.captions)
	}

	public destroy(): void {
		super.destroy();

		this.unsubscribes?.forEach(fn => fn());
	}
}

function getEmbedUrl(id: string, config: VbrickEmbedConfig): string {
	const query = [
		['tk', !!config.token],
		['id', id],
		['accent', config.accentColor],
		['autoplay', config.autoplay],
		['forceClosedCaptions', config.forcedCaptions],
		['loopVideo', config.playInLoop],
		['noCc', config.hideCaptions],
		['noCenterButtons', config.hideOverlayControls],
		['noChapters', config.hideChapters],
		['noFullscreen', config.hideFullscreen],
		['noPlayBar', config.hidePlayControls],
		['noSettings', config.hideSettings],
		['popupAuth=true', !config.token && config.popupAuth], //popupAuth requires a true value
		['startAt', config.startAt],
	]
		.map(([key, value]) =>
			!value ? undefined :
			value === true ? key :
			`${key}=${encodeURIComponent(value)}`)
		.filter(Boolean)
		.join('&');

	return `${config.baseUrl}/embed?${query}`;
}

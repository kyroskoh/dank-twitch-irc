import * as Color from 'color';
import {Moment} from 'moment';
import {TwitchBadgesList} from '../badges';
import {TwitchEmoteList} from '../emotes';
import { TwitchMessage } from '../twitch';
import { ChannelMessage } from '../message';

export class UsernoticeMessage extends TwitchMessage implements ChannelMessage {
    public static get command(): string {
        return 'USERNOTICE';
    }

    public get channelName(): string {
        return this.ircMessage.ircChannelName;
    }

    public get senderUsername(): string {
        return this.ircMessage.ircTags.getString('login');
    }

    public get badgeInfo(): string {
        return this.ircMessage.ircTags.getString('badge-info');
    }

    public get badges(): TwitchBadgesList {
        return this.ircMessage.ircTags.getBadges();
    }

    public get color(): Color {
        return this.ircMessage.ircTags.getColor();
    }

    public get displayName(): string {
        return this.ircMessage.ircTags.getString('display-name');
    }

    public get emotes(): TwitchEmoteList {
        return this.ircMessage.ircTags.getEmotes();
    }

    public get messageID(): string {
        return this.ircMessage.ircTags.getString('id');
    }

    public get message(): string {
        return this.ircMessage.ircTags.getString('message');
    }

    public get isMod(): boolean {
        return this.ircMessage.ircTags.getBoolean('mod') ||
            this.badges.hasModerator;
    }

    /** sub, resub, subgift, etc... */
    public get messageTypeID(): string {
        return this.ircMessage.ircTags.getString('msg-id');
    }

    public get channelID(): number {
        return this.ircMessage.ircTags.getInt('room-id');
    }

    public get systemMessage(): string {
        return this.ircMessage.ircTags.getString('system-msg');
    }

    public get serverTimestamp(): Moment {
        return this.ircMessage.ircTags.getTimestamp();
    }

    public get senderUserID(): number {
        return this.ircMessage.ircTags.getInt('user-id');
    }
}
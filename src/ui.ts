import type * as react from "react";
import type { ChatMessageNode } from "./chats.js";
import type { JsonObject } from "./common.js";

export declare namespace ui {
	export type MarkdownComponentProps = Record<string, unknown>;
	export type MarkdownComponent = react.FC<MarkdownComponentProps>;

	export interface MarkdownElement {
		/** The element to override inside of markdown renderers */
		element: string;
		/** The React component to render the markdown element */
		component: MarkdownComponent;
	}

	/** Registers a React component to be rendered in any markdown element */
	export function registerMarkdownElement(element: MarkdownElement): void;

	/** Unregisters a markdown component */
	export function unregisterMarkdownElement(elementId: string): void;

	export interface ChatNodeComponentProps {
		node: ChatMessageNode;
	}

	export type ChatNodeComponent = react.FC<ChatNodeComponentProps>;

	export interface ChatNode {
		/** The ID of the chat node */
		id: string;
		/** The component to render for the chat node */
		component: ChatNodeComponent;
	}

	export function registerChatNode(chatNode: ChatNode): void;

	export function unregisterChatNode(chatNodeId: string): void;

	export interface ChatPanelComponentProps<TData extends JsonObject = JsonObject> {
		data: TData;
	}

	export type ChatPanelComponent<TData extends JsonObject = JsonObject> = react.FC<
		ChatPanelComponentProps<TData>
	>;

	export interface ChatPanel<TData extends JsonObject = JsonObject> {
		/** The ID of the chat panel */
		id: string;

		/** The component to render for the chat panel */
		component: ChatPanelComponent<TData>;
	}

	export function registerChatPanel<TData extends JsonObject>(chatPanel: ChatPanel<TData>): void;

	export function unregisterChatPanel(chatPanelId: string): void;

	export namespace showChatPanel {
		export interface Options {
			/** The ID of the chat panel to show */
			id: string;
			/** Optional data to pass to the chat panel */
			data?: JsonObject;
		}
	}

	export function showChatPanel(options: showChatPanel.Options): void;
}
